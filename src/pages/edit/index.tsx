import React from 'react';

import postsStore from 'store/posts';

import './edit.scss';

const Edit = (): JSX.Element => {
  const store = postsStore();
  console.log(store);
  return (
    <div className='edit'>
      Edit
      <ul>
        {store.posts.map((post: string, i: number) => (
          <li key={post + i}>{`${i} - ${post}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Edit;
