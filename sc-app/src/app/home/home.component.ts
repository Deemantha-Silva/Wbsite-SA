import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../model/article.model';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogArticleComponent } from '../dialogs/dialog-article/dialog-article.component';
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numDivs: number;
  articles: Article[] = [];
  bio: Article[] = [];
  private articleSub: Subscription;
  title = 'Home';
  constructor(public articlesService: ArticlesService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.numDivs = ($('div[id$="1"]').length);
    this.articlesService.getArticles();

    this.articleSub = this.articlesService
      .getArticlesUpdatedListener()
      .subscribe((articles: Article[]) => {
        this.articles = articles;
      });

    this.articlesService.getBio();

    this.articleSub = this.articlesService
      .getBioUpdatedListener()
      .subscribe((bio: Article[]) => {
        this.bio = bio;
      });
  }

  ngOnDestroy() {
    this.articleSub.unsubscribe();
  }

  navigateSoc() {
    this.router.navigateByUrl('/sociology');
  }

  displayArticle(id) {
    this.articlesService.getArticle(id);
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
}
