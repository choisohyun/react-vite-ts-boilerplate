import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const getRouteConfig = (path: string, componentPath: string) => {
  return {
    path,
    component: getComponent(componentPath),
  };
};

const getComponent = (componentPath: string) => {
  return lazy(() => import(/* webpackChunkName: "contents" */ `@/pages/${componentPath}`));
};

const Main = getComponent('main');

export default [
  {
    ...getRouteConfig('/', 'layout'),
    children: [{ index: true, element: <Main /> }],
  },
] as RouteObject[];
