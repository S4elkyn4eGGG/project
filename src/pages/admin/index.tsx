import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getPosts } from 'hooks/usePosts';
import postsStore from 'store/posts';
import { postsActions } from 'store/posts/actions';

import Button from 'components/Button';
import Label from 'components/Label';

import './admin.scss';

const Admin = (): JSX.Element => {
  const history = useHistory();
  const { posts } = postsStore();

  useEffect(() => {
    getPosts();
  }, []);

  const columns = ['id', 'Date', 'Title', 'Content', 'Edit'];

  const getRowClass = (index: number): string => {
    return index % 2 ? 'admin_table_second_row' : '';
  };

  const onEditRedirect = (editPost: any): any => {
    postsActions.updateEditPost(editPost);

    history.push(`edit/${editPost.id}`);
  };

  return (
    <div className='admin'>
      <div className='admin_buttons'>
        <Link className='link' to='edit/new'>
          <Button text='Add new post' className='admin_buttons_btn' />
        </Link>
      </div>
      <table className='admin_table'>
        <thead>
          <tr>
            {columns.map((name: string) => (
              <th key={name}>
                <span>{name}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {posts.length ? (
            posts.map((post: any, index: number) => (
              <tr key={post.id} className={getRowClass(index)}>
                <td>
                  <span>{post.id}</span>
                </td>
                <td>
                  <span>{post.date.toString()}</span>
                </td>
                <td>
                  <span>{post.title}</span>
                </td>
                <td>
                  <span>{post.content}</span>
                </td>
                <td>
                  <Label text='edit' onClick={() => onEditRedirect(post)} />
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
