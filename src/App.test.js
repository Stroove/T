import { render, screen } from '@testing-library/react';
import SocialNetwork from './App';
import React from 'react'

test('renders learn react link', () => {
  render(<SocialNetwork />);
  const linkElement = screen.getByRole(/main/i);
  expect(linkElement).toBeInTheDocument();
});
