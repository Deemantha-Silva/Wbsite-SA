import { Link } from '../model/link.model';
import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
// subject is a type of event emitter
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class LinkService {
  private links: Link[] = [];
  private linkUpdated = new Subject<Link[]>();

  constructor(private http: HttpClient) {}

  getSocLinks() {
    this.http.get('http://localhost:3000/sociology')
    .subscribe(data => {
      this.links = data['links'].recordset;
      this.linkUpdated.next([...this.links]);
    });
  }

  getLinksUpdatedListener() {
    return this.linkUpdated.asObservable();
  }
}
