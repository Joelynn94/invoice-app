import { render, screen } from '@testing-library/react';
import Button from './Button';

it('should render a button', () => {
  render(<Button />);

  // const invoiceButton = screen.getByTestId('ok-button');
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
