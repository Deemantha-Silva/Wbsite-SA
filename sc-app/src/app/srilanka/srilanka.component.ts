import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../model/article.model';
import { ArticlesService } from '../services/articles.service';
import { Video} from '../model/video.model';
import { VideosService } from '../services/videos.service';
import { MatDialog } from '@angular/material';
import { DialogArticleComponent } from '../dialogs/dialog-article/dialog-article.component';
declare const $: any;

@Component({
  selector: 'app-srilanka',
  templateUrl: './srilanka.component.html',
  styleUrls: ['./srilanka.component.css']
})
export class SrilankaComponent implements OnInit, OnDestroy {
  title = 'Sri Lanka';
  article: Article;
  articles: Article[] = [];
  videos: Video[] = [];
  private articleSub: Subscription;
  private videoSub: Subscription;
  numDivs: number;
  curDate: any;
  last: any;
  lastDate: any;
  p = 1;
  x = 1;
  private player;
  private ytEvent;


  constructor(
    public articlesService: ArticlesService,
    public videosService: VideosService,
    public dialog: MatDialog) { }

  ngOnInit() {
      this.last = 7;
      this.curDate = new Date();
      this.lastDate = new Date(this.curDate.getTime() - (this.last * 24 * 60 * 60 * 1000));

      this.articlesService.getSLArticles();
      this.articleSub = this.articlesService
        .getArticlesUpdatedListener()
        .subscribe((articles: Article[]) => {
          this.articles = articles;
        });

        this.videosService.getSLVideos();
        this.videoSub = this.videosService
          .getSLVideosUpdatedListener()
          .subscribe((videos: Video[]) => {
            this.videos = videos;
          });
  }

  ngOnDestroy() {
    this.articleSub.unsubscribe();
    this.videoSub.unsubscribe();
  }

  displayArticle(id) {
    this.articlesService.getSLArticle(id);
    this.articleSub = this.articlesService
    .getArticleListener()
    .subscribe((art: Article) => {
      this.openDialog(art);
    });
  }

  openDialog(article) {
    const dialogRef = this.dialog.open(DialogArticleComponent, {
      width: '70%',
      data: article
    });

    dialogRef.afterClosed().subscribe(result => {
      this.articleSub.unsubscribe();
    });
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

}
