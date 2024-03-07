import * as React from 'react';
import { PostList } from '../PostList/PostList';
import { Button } from '../UIComponents/Button/Button';
import { MyInput } from '../Input/myInput';
import { useState, useEffect } from 'react';
import cl from '../../assets/styles/main.module.scss';
import { PostFilter } from '../PostFilter/PostFilter';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { usePosts } from '../../hooks/usePost/usePost';
import { PostService } from '../../API/PostService/PostService';
import { Loader } from '../UIComponents/Loader/Loader';
import { useFetching } from '../../hooks/useFetching/useFetching';
import { getPageCount, getPagesArray } from '../../utils/pages';
import { Pagination } from '../Pagination/Pagination';

const Form = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    id: Date.now(),
    title: '',
    body: '',
  });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  let pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

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
    <div className='app__items'>
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
        {isPostsLoading === true ? (
          <Loader />
        ) : (
          <PostList
            remove={deletePostHandler}
            title='Posts'
            posts={sortedAndSearchedPosts}
          />
        )}
        {postError && <h1>Posts Error...</h1>}
      </div>
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};

export { Form };
