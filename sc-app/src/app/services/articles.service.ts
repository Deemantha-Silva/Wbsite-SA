import { Article } from '../model/article.model';
import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
// subject is a type of event emitter
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ArticlesService {
  private articles: Article[] = [];
  private article: Article;
  private bio: Article[] = [];
  private articlesUpdated = new Subject<Article[]>();
  private bioUpdated = new Subject<Article[]>();
  private returnedArticle = new Subject<Article>();

  constructor(private http: HttpClient) {}

  getArticles() {
    this.http.get('http://localhost:3000/home')
    .subscribe(data => {
      this.articles = data['articles'].recordset;
      this.articlesUpdated.next([...this.articles]);
    });
  }

  getBio() {
    this.http.get('http://localhost:3000/home')
    .subscribe(data => {
      this.bio = data['bio'].recordset;
      this.bioUpdated.next([...this.bio]);
    });
  }

  getArticle(id) {
    this.http.get('http://localhost:3000/home/' + id)
    .subscribe(data => {
      this.article = data['recordset'][0];
      this.returnedArticle.next(this.article);
    });
  }

  getSocArticles() {
    this.http.get('http://localhost:3000/sociology')
    .subscribe(data => {
      this.articles = data['articles'].recordset;
      this.articlesUpdated.next([...this.articles]);
    });
  }

  getSocArticle(id) {
    this.http.get('http://localhost:3000/sociology/' + id)
    .subscribe(data => {
      this.article = data['recordset'][0];
      this.returnedArticle.next(this.article);
    });
  }

  getSLArticles() {
    this.http.get('http://localhost:3000/srilanka')
    .subscribe(data => {
      this.articles = data['articles'].recordset;
      this.articlesUpdated.next([...this.articles]);
    });
  }

  getSLArticle(id) {
    this.http.get('http://localhost:3000/srilanka/' + id)
    .subscribe(data => {
      this.article = data['recordset'][0];
      this.returnedArticle.next(this.article);
    });
  }

  getArticlesUpdatedListener() {
    return this.articlesUpdated.asObservable();
  }

  getBioUpdatedListener() {
    return this.bioUpdated.asObservable();
  }

  getArticleListener() {
    return this.returnedArticle.asObservable();
  }
}
