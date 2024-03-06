import * as React from 'react';
import { PostList } from '../PostList/PostList';
import { Button } from '../UIComponents/Button/Button';
import { MyInput } from '../Input/myInput';
import { useState } from 'react';
import { posts as postItems } from '../../common/posts/posts';
import cl from '../../assets/styles/main.module.scss';
import { PostFilter } from '../PostFilter/PostFilter';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { usePosts } from '../../hooks/usePost/usePost';

const Form = () => {
  const [posts, setPosts] = useState(postItems);
  const [post, setPost] = useState({
    id: Date.now(),
    title: '',
    body: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const deletePostHandler = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const handlerAddedNewPost = () => {
    if (post.title !== '' && post.body !== '') {
      setPosts([...posts, { ...post, textButton: 'Delete' }]);
      setPost({ title: '', body: '' });
    }
    setModal(false);
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
    <div className={cl.form}>
      <Button className={cl.delete} onClick={() => setModal(true)}>
        Create Post
      </Button>
      <ModalWindow visible={modal} setVisible={setModal}>
        <h3 className={cl.create}>Create Post</h3>
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
      </ModalWindow>
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length === 0 ? (
        <h1 className={cl.postList__title}>Posts is Empty</h1>
      ) : (
        <PostList
          remove={deletePostHandler}
          title='Posts'
          posts={sortedAndSearchedPosts}
        />
      )}
    </div>
  );
};

export { Form };
