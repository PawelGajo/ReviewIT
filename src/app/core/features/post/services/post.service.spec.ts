import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ANSWERS_MOCK } from '../../../../../assets/mocks/answer.mock';
import { Answer } from '../models/Answer';
import { MOCK_POST_LIST_ITEMS } from '../../../../../assets/mocks/post-list.mock';
import { Post } from '../models/Post';
import { PostService } from './post.service';
import { TestBed } from '@angular/core/testing';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;
  let posts: Post[] = MOCK_POST_LIST_ITEMS;
  let answers: Answer[] = ANSWERS_MOCK;

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

  it('should successfuly fetch posts ', () => {
    let fetchedPosts: Post[] | undefined;
    service.getAll().subscribe((posts) => (fetchedPosts = posts));

    const request = httpTestingController.expectOne(`${service.POST_URL}`);

    request.flush(posts);

    expect(fetchedPosts).toEqual(posts);
  });

  it('should throw http Response error after posts fetch', () => {
    const errorEvent: ProgressEvent = new ProgressEvent('API Error');
    const status = 500;
    const statusText = 'Internal Server Error';

    let actualError: HttpErrorResponse | undefined;
    service.getAll().subscribe({
      next: () =>
        fail('Should return error and next handler must not be called'),
      error: (error) => (actualError = error),
      complete: () =>
        fail('Should return error and complete handler must not be called')
    });
    const request = httpTestingController.expectOne(`${service.POST_URL}`);
    request.error(errorEvent, { status, statusText });

    expect(actualError?.error).toBe(errorEvent);
    expect(actualError?.status).toBe(status);
    expect(actualError?.statusText).toBe(statusText);
  });

  it('should successfuly fetch answer for post', () => {
    let fetchedAnswers: Answer[] | undefined;
    service
      .getAnswersForPost(1)
      .subscribe((answers) => (fetchedAnswers = answers));

    const request = httpTestingController.expectOne(`${service.ANSWERS_URL}`);

    request.flush(answers);

    expect(fetchedAnswers).toEqual(answers);
  });

  it('should throw http Response error after answers fetch', () => {
    const errorEvent: ProgressEvent = new ProgressEvent('API Error');
    const status = 500;
    const statusText = 'Internal Server Error';

    let actualError: HttpErrorResponse | undefined;
    service.getAnswersForPost(1).subscribe({
      next: () =>
        fail('Should return error and next handler must not be called'),
      error: (error) => (actualError = error),
      complete: () =>
        fail('Should return error and complete handler must not be called')
    });
    const request = httpTestingController.expectOne(`${service.ANSWERS_URL}`);
    request.error(errorEvent, { status, statusText });

    expect(actualError?.error).toBe(errorEvent);
    expect(actualError?.status).toBe(status);
    expect(actualError?.statusText).toBe(statusText);
  });
});
