import * as React from 'react';
import { PostList } from '../PostList/PostList';
import { Button } from '../UIComponents/Button/Button';
import { MyInput } from '../Input/myInput';
import { useState } from 'react';
import { posts as postItems } from '../../common/posts/posts';
import cl from '../../assets/styles/main.module.scss';

const Form = () => {
  const [posts, setPosts] = useState(postItems);
  const [post, setPost] = useState({
    id: Date.now(),
    title: '',
    body: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlerAddedNewPost = () => {
    if (post.title !== '' && post.body !== '') {
      setPosts([...posts, { ...post, textButton: 'Delete' }]);
      setPost({ title: '', body: '' });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
    if (post.title !== '' && post.body !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  return (
    <div>
      <form className={cl.post__form}>
        <MyInput
          type='text'
          name='title'
          placeholder='Post title'
          id={cl.input}
          value={post.title}
          onChange={handleInputChange}
        />
        <MyInput
          type='text'
          name='body'
          placeholder='Post body'
          id={cl.input}
          value={post.body}
          onChange={handleInputChange}
        />
        <Button
          id='disabled'
          onClick={handlerAddedNewPost}
          className={cl.delete}
          type='button'
          disabled={isButtonDisabled}
        >
          Add new post
        </Button>
      </form>
      <PostList title='Posts' posts={posts} />
    </div>
  );
};

export { Form };
