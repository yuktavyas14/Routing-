import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() {}

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }
  getPost(id: number | string): any {
    return this.getPosts().pipe(
      map((posts: Post[]) => posts.find(p => p.id === +id))
    );
  }
}
