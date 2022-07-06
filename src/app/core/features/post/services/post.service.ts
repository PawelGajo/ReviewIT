import { HttpClient, HttpParams } from '@angular/common/http';
import { NewPost, Post } from '../models/Post';
import { AUTHOR_MOCK } from '../../../../../assets/mocks/author.mock';
import { Answer } from '../models/Answer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  POST_URL = `${env.apiUrl}/posts`;

  // PROD change to /posts/:id/answers/
  ANSWERS_URL = `${env.apiUrl}/answers`;

  constructor(private http: HttpClient) {}

  createPost(post: NewPost): Observable<Post> {
    //TODO change for prod backend
    const postWithExtraFields: Post = {
      ...post,
      answers: 0,
      author_last_activity: {
        author: AUTHOR_MOCK,
        created: '01-04-2022',
        type: 'created'
      },
      created: '01-04-2022',
      has_top_answer: false,
      last_activity: {
        author: AUTHOR_MOCK,
        created: '01-04-2022',
        type: 'created'
      },
      rank: 0,
      visits: 0,
      categories: [
        {
          id: 1,
          name: 'Code quality'
        },
        {
          id: 2,
          name: 'Design'
        },
        {
          id: 3,
          name: 'Performance'
        }
      ]
    };
    return this.http.post<Post>(this.POST_URL, postWithExtraFields);
  }

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
