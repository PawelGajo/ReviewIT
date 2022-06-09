import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListItem } from '../models/Post';
import { environment as env } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private POST_URL = `${env.apiUrl}/posts`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PostListItem[]> {
    return this.http.get<PostListItem[]>(this.POST_URL);
  }
}
