import { render, screen } from '@testing-library/react';
import App from './App';

test('Render greetings a new users', () => {
  render(<App />);
  const linkElement = screen.getByText(/Greetings, my dear friends/i);
  expect(linkElement).toBeInTheDocument;
});

