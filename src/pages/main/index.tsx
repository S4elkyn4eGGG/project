import React from 'react';

import campaignsStore from 'store/posts';
import { getPosts } from '../../api/posts';

import './main.scss';

const Main = (): JSX.Element => {
  const { posts } = campaignsStore();

  return (
    <div className='main'>
      Main
      <button
        onClick={() => {
          getPosts();
        }}
      >
        GET POSTS
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
