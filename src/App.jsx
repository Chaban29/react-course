import * as React from 'react';
import cl from './assets/main.module.scss';
import { PostList } from './components/PostList/PostList';
import { Button } from './components/UIComponents/Button/Button';
import { MyInput } from './components/Input/myInput';
import { useState } from 'react';
import { posts as postItems } from './common/posts/posts';

const App = () => {
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
    <div className={cl.app}>
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

export { App };
