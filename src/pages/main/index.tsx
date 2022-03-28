import React from 'react';
import { useCounter } from '@/hooks/useCounter';

const Main = () => {
  const { count, increment } = useCounter();

  return (
    <>
      <h2 className="test">Hello Vite + React!</h2>
      <p className="env">
        {import.meta.env.VITE_TEST || process.env.NODE_ENV === 'test' ? 'development' : 'production'}
      </p>
      <button type="button" onClick={increment}>
        count is: {count}
      </button>
    </>
  );
};

export default Main;
