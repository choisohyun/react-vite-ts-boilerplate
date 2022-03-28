import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from './test-utils';
import Main from '../src/pages/main';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<Main />);
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<Main />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  });
});
