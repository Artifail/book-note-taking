import { render, screen } from '@testing-library/react';
import App from './App';

test('Render greetings a new users', () => {
  render(<App />);
  const linkElement = screen.getByText(/Book-note-taking/i);
  expect(linkElement).toBeInTheDocument;
});

