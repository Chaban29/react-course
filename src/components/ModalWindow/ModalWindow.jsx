import * as React from 'react';
import cl from '../../assets/styles/main.module.scss';

const ModalWindow = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.modal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  const changeModalClosed = () => {
    setVisible(false);
  };

  return (
    <div className={rootClasses.join(' ')} onClick={changeModalClosed}>
      <div
        className={cl.modal__content}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export { ModalWindow };
