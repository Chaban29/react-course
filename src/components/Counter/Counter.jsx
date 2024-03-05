import * as React from 'react';
import cl from '../../assets/main.module.scss';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prev) => prev + 1);
  };

  const Decrement = () => {
    if (count < 1) return;
    setCount((prev) => prev - 1);
  };
  return (
    <div className={cl.counter}>
      <div className={cl.count__block}>
        <h3>{count}</h3>
      </div>
      <button type='button' onClick={Increment}>
        Increment
      </button>
      <button type='button' onClick={Decrement}>
        Decrement
      </button>
    </div>
  );
};

export { Counter };
