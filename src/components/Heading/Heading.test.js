import { render, screen } from '@testing-library/react';
import Heading from './Heading';

it('should render a heading from h1 to h6', () => {
  render(<Heading variant='h1' />);

  const heading = screen.getByRole('heading', { level: 1 });

  expect(heading).toBeInTheDocument();
});
