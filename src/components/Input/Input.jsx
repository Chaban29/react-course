import * as React from 'react';
import cl from '../../assets/main.module.scss';
import { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');
  return (
    <div className={cl.input__block}>
      <input
        type='text'
        name='input'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h4>{value}</h4>
    </div>
  );
};


export { Input };