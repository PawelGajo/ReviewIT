import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MOCK_POST_LIST_ITEMS } from '../models/mock-post-list';
import { PostListItem } from '../models/Post';
import { PostService } from './post.service';
import { TestBed } from '@angular/core/testing';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;
  let posts: PostListItem[] = MOCK_POST_LIST_ITEMS;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostService);

    TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch posts', () => {
    let fetchedPosts: PostListItem[] | undefined;
    service.getAll().subscribe((posts) => (fetchedPosts = posts));

    const request = httpTestingController.expectOne(`${service.POST_URL}`);

    request.flush(posts);

    expect(fetchedPosts).toEqual(posts);
  });
});
