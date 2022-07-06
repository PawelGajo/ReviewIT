import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { GIT_ICON } from '../../../../../../assets/icons/svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { PostCategory } from '../../models/Post';

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
    private fb: FormBuilder
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
    console.log(this.postForm);
  }

  ngOnInit(): void {
    this.initForm();
  }
}
