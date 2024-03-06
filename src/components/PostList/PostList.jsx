import * as React from 'react';
import cl from '../../assets/styles/main.module.scss';
import { PostItem } from '../Post/PostItem';

const PostList = ({ title, posts, remove }) => {
  return (
    <div className={cl.postList}>
      <div className={cl.post__title}>
        <h1 className={cl.post__capture}>{title}</h1>
      </div>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          key={post.id}
          number={index + 1}
          post={post}
        />
      ))}
    </div>
  );
};

export { PostList };
