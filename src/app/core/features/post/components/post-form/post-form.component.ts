import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPost, PostCategory } from '../../models/Post';
import { Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { GIT_ICON } from '../../../../../../assets/icons/svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { createPost } from '../../state/posts.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  postCategories$: Observable<PostCategory[]> = of([
    {
      id: 1,
      name: 'Design'
    },
    {
      id: 2,
      name: 'SEO'
    }
  ]);

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private store: Store
  ) {
    iconRegistry.addSvgIconLiteral(
      'git',
      sanitizer.bypassSecurityTrustHtml(GIT_ICON)
    );
  }

  initForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      page_url: ['', Validators.required],
      repo_url: ['', Validators.required],
      categories: [[], Validators.required]
    });
  }

  submit() {
    const post: NewPost = this.postForm.value;
    this.store.dispatch(createPost({ post }));
  }

  ngOnInit(): void {
    this.initForm();
  }
}
