import * as React from 'react';
import cl from '../../assets/styles/main.module.scss';
import { Button } from '../UIComponents/Button/Button';

const PostItem = (props) => {
  return (
    <div className={cl.post}>
      <div className={cl.post__content}>
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <Button className={cl.delete} type='button'>
        {props.post.textButton}
      </Button>
    </div>
  );
};

export { PostItem };
