import { render, screen } from '@testing-library/react';
import TranscriptApp from './TranscriptService';

test('renders learn react link', () => {
  render(<TranscriptApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
