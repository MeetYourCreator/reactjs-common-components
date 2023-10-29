import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SplitViewPanels component', () => {
  render(<App />);
  const divider = screen.getByText(/:::/i);
  expect(divider).toBeInTheDocument();
});
