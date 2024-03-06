import * as React from 'react';
import { PostList } from '../PostList/PostList';
import { Button } from '../UIComponents/Button/Button';
import { MyInput } from '../Input/myInput';
import { useState, useMemo } from 'react';
import { posts as postItems } from '../../common/posts/posts';
import cl from '../../assets/styles/main.module.scss';
import { PostFilter } from '../PostFilter/PostFilter';

const Form = () => {
  const [posts, setPosts] = useState(postItems);
  const [post, setPost] = useState({
    id: Date.now(),
    title: '',
    body: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const deletePostHandler = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

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

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

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
