import React, { Suspense } from 'react';
import routes from '@/routes/index';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const element = useRoutes(routes);
  console.log(element);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
    </>
  );
};

export default App;
