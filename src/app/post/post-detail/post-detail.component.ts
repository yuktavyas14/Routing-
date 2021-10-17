import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Post } from '../post';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}
  post: Post;
  ngOnInit() {
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.postService.getPost(params['id']).subscribe(post => {
        this.post = post;
      });
    });
  }
  gotoPosts() {
    // this.router.navigateByUrl('/posts');
    this.router.navigate(['/posts']);
  }
}
