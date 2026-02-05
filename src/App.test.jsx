import { render, screen } from '@testing-library/react';
import App from './App';
import { test,expect } from 'vitest';

test('renders title', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /vite \+ react/i })
    ).toBeInTheDocument();
  });
