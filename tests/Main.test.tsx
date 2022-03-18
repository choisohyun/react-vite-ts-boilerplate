import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Main from '../src/pages/main';

let container: Element;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

test("h1 태그에 'Github' 문자열이 들어가야 함", () => {
  act(() => {
    render(<Main />, container);
  });
  expect(container.querySelector('h1')?.textContent).toBe('Github');
});
