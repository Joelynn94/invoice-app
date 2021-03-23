import { render, screen } from '@testing-library/react';
import Heading from './Heading';

it('should render a heading h1', () => {
  render(<Heading variant='h1' />);

  const heading = screen.getByRole('heading', { level: 1 });

  expect(heading).toBeInTheDocument();
});

it('should render a heading from h2', () => {
  render(<Heading variant='h2' />);

  const heading = screen.getByRole('heading', { level: 2 });

  expect(heading).toBeInTheDocument();
});

it('should render a heading from h3', () => {
  render(<Heading variant='h3' />);

  const heading = screen.getByRole('heading', { level: 3 });

  expect(heading).toBeInTheDocument();
});

it('should render a heading from h4', () => {
  render(<Heading variant='h4' />);

  const heading = screen.getByRole('heading', { level: 4 });

  expect(heading).toBeInTheDocument();
});
