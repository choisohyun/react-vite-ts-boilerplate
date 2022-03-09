import React from 'react';
import routes from '@/routes/index';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default App;
