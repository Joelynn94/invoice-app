import { render, screen } from '@testing-library/react';
import Button from './Button';

it('should render a button', () => {
  render(<Button />);

  const invoiceButton = screen.getByTestId('ok-button');

  expect(invoiceButton).toBeInTheDocument();
});
