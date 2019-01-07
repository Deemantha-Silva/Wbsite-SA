import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../model/article.model';
import { ArticlesService } from '../services/articles.service';
import { BookService } from '../services/books.service';
import { LinkService } from '../services/links.service';
import { Book } from '../model/book.model';
import { Link } from '../model/link.model';
import { MatDialog } from '@angular/material';

import { DialogArticleComponent } from '../dialogs/dialog-article/dialog-article.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare const $: any;

@Component({
  selector: 'app-sociology',
  templateUrl: './sociology.component.html',
  styleUrls: ['./sociology.component.css']
})
export class SociologyComponent implements OnInit, OnDestroy {
  title = 'Sociology';
  article: Article;
  articles: Article[] = [];
  books: Book[] = [];
  links: Link[] = [];
  private articleSub: Subscription;
  private bookSub: Subscription;
  private linkSub: Subscription;
  numDivs: number;
  curDate: any;
  last: any;
  lastDate: any;
  p = 1;
  constructor(
    public articlesService: ArticlesService,
    public bookService: BookService,
    public linkService: LinkService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.last = 7;
    this.curDate = new Date();
    this.lastDate = new Date(this.curDate.getTime() - (this.last * 24 * 60 * 60 * 1000));

    this.articlesService.getSocArticles();
    this.articleSub = this.articlesService
      .getArticlesUpdatedListener()
      .subscribe((articles: Article[]) => {
        this.articles = articles;
      });

      this.bookService.getSocBooks();
      this.bookSub = this.bookService
      .getBooksUpdatedListener()
      .subscribe((books: Book[]) => {
        this.books = books;
      });

      this.linkService.getSocLinks();
      this.linkSub = this.linkService
      .getLinksUpdatedListener()
      .subscribe((links: Link[]) => {
        this.links = links;
      });
  }

  ngOnDestroy() {
    this.articleSub.unsubscribe();
    this.bookSub.unsubscribe();
    this.linkSub.unsubscribe();
  }

  displayArticle(id) {
    this.articlesService.getSocArticle(id);
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
