import React from 'react';

const Main = () => {
  return (
    <>
      <h2>Hello World</h2>
      <p>{import.meta.env.VITE_TEST}</p>
    </>
  );
};

export default Main;
