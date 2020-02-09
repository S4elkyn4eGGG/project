import { map } from 'rxjs/operators';

import { get } from './index';
import { postsActions } from 'store/posts/actions';

export const getPosts: () => void = (): void => {
  get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map((posts) => (posts as any[]).map((post) => post.title)))
    .subscribe((posts) => postsActions.updatePosts(posts));
};
