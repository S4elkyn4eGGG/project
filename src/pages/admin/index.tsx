import React, { useEffect } from 'react';

import './admin.scss';
import postsStore from 'store/posts';
import Label from 'components/Label';
import { getPosts } from 'api/posts';

const Admin = (): JSX.Element => {
  useEffect(() => {
    getPosts();
  }, []);

  const { posts } = postsStore();

  const columns = ['id', 'Date', 'Title', 'Content', ''];

  return (
    <div className='admin'>
      <table className='admin_table'>
        <thead>
          <tr>
            {columns.map((name: string) => (
              <th className='admin_table_header' key={name}>
                <span>{name}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {posts.length ? (
            posts.map((post: any, index: number) => (
              <tr
                key={post.id}
                className={`${!(index % 2) ? '' : 'admin_table_second_row'}`}
              >
                <td className='admin_table_cell'>{post.id}</td>
                <td className='admin_table_cell'>{''}</td>
                <td className='admin_table_cell'>{post.name}</td>
                <td className='admin_table_cell'>{post.body}</td>
                <td className='admin_table_cell'>
                  <Label text='edit' />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <span className='admin_table_nodata'>Data not found !</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
