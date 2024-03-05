import * as React from 'react';

const MyInput = React.forwardRef(({ ...props }, ref) => {
  return <input ref={ref} {...props} />;
});

export { MyInput };
