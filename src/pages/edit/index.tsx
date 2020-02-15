import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import useForm from 'hooks/useForm';
import firebaseModule from 'api/firebase';

import Input from 'components/Input';
import Panel from 'components/Panel';
import Button from 'components/Button';
import Title from 'components/Title';

import './edit.scss';
import postsStore from 'store/posts';

const INITIAL_STATE = {
  title: '',
  category: '',
  content: '',
  image: '',
};

const Edit = (): JSX.Element => {
  const [isNew, setIsNew] = useState(true);
  const params: any = useParams();
  const history = useHistory();
  const { editPost } = postsStore();

  const { values, handleChange, handleSubmit, updateValues } = useForm(
    INITIAL_STATE
  );

  useEffect(() => {
    setIsNew(params && params.id === 'new');
  }, [params, editPost, history]);

  useEffect(() => {
    if (!editPost || isNew) {
      return;
    }

    const postResponse = {
      title: editPost.title,
      category: editPost.category,
      content: editPost.content,
      image: editPost.image,
    };

    updateValues(postResponse);
  }, [editPost, isNew]);

  const submitFunc = async (): Promise<void> => {
    const { title, category, content, image } = values;

    const newPost = {
      title,
      category,
      content,
      image,
      date: new Date(),
    };

    await firebaseModule.db.collection('posts').add(newPost);

    history.push('/admin');
  };

  return (
    <div className='edit'>
      <Panel className='edit_container'>
        <Title text={values.title || 'New Post Title'} />
        <Input
          name='title'
          value={values.title}
          onChange={handleChange}
          placeholder='Title'
        />
        <Input
          name='category'
          value={values.category}
          onChange={handleChange}
          placeholder='Category'
        />
        <Input
          name='content'
          value={values.content}
          onChange={handleChange}
          placeholder='Content'
          textarea={true}
          className='edit_container_textarea'
        />
        <Input
          name='image'
          value={values.image}
          onChange={handleChange}
          placeholder='Image link'
        />
        <Button
          text={isNew && !editPost ? 'Save' : 'Update'}
          onClick={() => handleSubmit(submitFunc)}
          className='edit_container_btn'
        />
      </Panel>
    </div>
  );
};

export default Edit;
