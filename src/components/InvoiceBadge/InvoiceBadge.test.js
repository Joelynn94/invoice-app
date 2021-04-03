import { render, screen } from '@testing-library/react';
import InvoiceBadge from './InvoiceBadge';

it('should render a badge with a default status of draft', () => {
  render(<InvoiceBadge />);

  const badge = screen.getByText('Draft');

  expect(badge).toBeInTheDocument();
});

it('should render a badge with a status of draft', () => {
  render(<InvoiceBadge status='draft' />);

  const badge = screen.getByText('Draft');

  expect(badge).toBeInTheDocument();
});

it('should render a badge with a status of pending', () => {
  render(<InvoiceBadge status='pending' />);

  const badge = screen.getByText('Pending');

  expect(badge).toBeInTheDocument();
});

it('should render a badge with a status of paid', () => {
  render(<InvoiceBadge status='paid' />);

  const badge = screen.getByText('Paid');

  expect(badge).toBeInTheDocument();
});
