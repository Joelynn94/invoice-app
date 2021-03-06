import { render, screen } from '@testing-library/react';
import Button from './Button';

it('should render a button', () => {
  render(<Button />);

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});

it('should render a button with a size prop', () => {
  render(<Button size='sm' />);

  const button = screen.getByRole('button');

  expect(button).toHaveClass('btn-sm');
});

it('should render a button with a disabled attribute', () => {
  render(<Button disabled='disabled' />);

  const button = screen.getByRole('button');

  expect(button).toBeDisabled();
});

it('should render a button with a variant prop', () => {
  render(<Button variant='primary' />);

  const button = screen.getByRole('button');

  expect(button).toHaveClass('btn-primary');
});

it('should render a button with an icon', () => {
  render(<Button icon='moon' />);

  const button = screen.getByRole('button');
  const img = screen.getByRole('img');

  expect(button).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
