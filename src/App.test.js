import { render, screen } from '@testing-library/react';
import App from './App';

test('Render greetings a new users', () => {
  render(<App />);
  const linkElement = screen.getByText(/Какой-то текст для проверки чего-то/i);
  expect(linkElement).toBeInTheDocument;
});

