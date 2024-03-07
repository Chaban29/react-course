import * as React from 'react';
import cl from '../../assets/styles/main.module.scss';
import { Button } from '../UIComponents/Button/Button';

const PostItem = (props) => {
  return (
    <div className={cl.post}>
      <div className={cl.post__content}>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <Button
        onClick={() => props.remove(props.post)}
        className={cl.delete}
        type='button'
      >
        {props.delete}
      </Button>
    </div>
  );
};

export { PostItem };
