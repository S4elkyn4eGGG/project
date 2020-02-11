import React from 'react';

import postsStore from 'store/posts';

import './edit.scss';

const Edit = (): JSX.Element => {
  const { posts } = postsStore();

  return (
    <div className='edit'>
      <div>
        Edit
        <ul>
          {posts.map((post: string, i: number) => (
            <li key={post + i}>{`${i} - ${post}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Edit;
