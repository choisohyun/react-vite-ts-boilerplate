import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from './test-utils';
import Main from '../src/pages/main';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<Main />);
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeCalled();
  });

  it('should increment count on click', async () => {
    render(<Main />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is: 1/i)).toBeCalled();
  });

  it('env 값은 개발일 경우 development', () => {
    const main = render(<Main />);
    const p = main.container.querySelector('.env');
    expect(p?.textContent).toBe('development');
  });
});
