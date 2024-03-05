import * as React from 'react';
import cl from './assets/styles/main.module.scss';
import { Form } from './components/Form/Form';

const App = () => {
  return (
    <div className={cl.app}>
      <Form />
    </div>
  );
};

export { App };
