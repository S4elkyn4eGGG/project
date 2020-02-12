import { map, tap } from 'rxjs/operators';

import { get } from './index';
import { postsActions } from 'store/posts/actions';
import { mainActions } from '../store/main/actions';

export const getPosts: () => void = (): void => {
  mainActions.updateLoading(true);

  get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap(() => mainActions.updateLoading(false)),
      map((posts): string[] => (posts as any[]).map((post) => post.title))
    )
    .subscribe((posts: string[]): void => {
      postsActions.updatePosts(posts);
    });
};
