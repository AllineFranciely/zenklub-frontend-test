import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock("axios");

test("renders App component without crashing", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
