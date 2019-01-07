import { Video } from '../model/video.model';
import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
// subject is a type of event emitter
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class VideosService {
  private video: Video[] = [];
  private videoUpdated = new Subject<Video[]>();

  constructor(private http: HttpClient) {}

  getSLVideos() {
    this.http.get('http://localhost:3000/srilanka')
    .subscribe(data => {
      this.video = data['videos'].recordset;
      this.videoUpdated.next([...this.video]);
    });
  }

  getSLVideosUpdatedListener() {
    return this.videoUpdated.asObservable();
  }
}
