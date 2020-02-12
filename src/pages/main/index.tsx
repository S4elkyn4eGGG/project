import React from 'react';

import postsStore from 'store/posts';
import { getPosts } from '../../api/posts';
import { postsActions } from 'store/posts/actions';

import './main.scss';

const Main = (): JSX.Element => {
  const { posts } = postsStore();

  return (
    <div className='main'>
      Main
      <button
        onClick={(): void => {
          getPosts();
        }}
      >
        GET POSTS
      </button>
      <button
        onClick={(): void => {
          postsActions.clearState();
        }}
      >
        CLEAR STATE
      </button>
      <ul>
        {posts.map((post: string, i: number) => (
          <li key={post + i}>{`${i} - ${post}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
