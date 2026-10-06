import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio call to action', () => {
  render(<App />);
  const linkElement = screen.getByText(/view projects/i);
  expect(linkElement).toBeInTheDocument();
});
