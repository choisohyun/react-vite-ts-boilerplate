import React, { useCallback, useState } from 'react';

const Main = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(x => x + 1), []);

  return (
    <>
      <h2 className="test">Hello Vite + React!</h2>
      {/*<p>{import.meta.env.VITE_TEST}</p>*/}
      <button type="button" onClick={increment}>
        count is: {count}
      </button>
    </>
  );
};

export default Main;
