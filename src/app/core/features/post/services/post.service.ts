import { HttpClient, HttpParams } from '@angular/common/http';
import { Answer } from '../models/Answer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { environment as env } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  POST_URL = `${env.apiUrl}/posts`;

  // PROD change to /posts/:id/answers/
  ANSWERS_URL = `${env.apiUrl}/answers`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.POST_URL);
  }

  search(query: string): Observable<Post[]> {
    let params = new HttpParams();
    params = params.append('q', query);
    return this.http.get<Post[]>(this.POST_URL, { params });
  }

  getAnswersForPost(postId: number): Observable<Answer[]> {
    postId; // prod - filtering posts
    return this.http.get<Answer[]>(this.ANSWERS_URL);
  }
}
