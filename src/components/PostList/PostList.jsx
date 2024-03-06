import * as React from 'react';
import cl from '../../assets/styles/main.module.scss';
import { PostItem } from '../Post/PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../assets/styles/animation.css';

const PostList = ({ title, posts, remove }) => {
  return (
    <div className={cl.postList}>
      <div className={cl.post__title}>
        <h1 className={cl.post__capture}>{title}</h1>
      </div>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames='animation'>
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
              delete='Delete'
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export { PostList };
