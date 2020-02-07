import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { postsActions } from 'store/posts/actions';

export const getPosts: () => void = (): void => {
  ajax
    .getJSON(`https://jsonplaceholder.typicode.com/posts`)
    .pipe(
      map((posts) => (posts as any[]).map((post) => post.title)),
      catchError((error) => {
        return of(error);
      })
    )
    .subscribe((posts) => postsActions.updatePosts(posts));
};
