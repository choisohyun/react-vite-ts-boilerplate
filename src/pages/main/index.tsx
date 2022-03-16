import React from 'react';

const Main = () => {
  return (
    <>
      <h2 className="test">Hello World</h2>
      <p>{import.meta.env.VITE_TEST}</p>
    </>
  );
};

export default Main;
