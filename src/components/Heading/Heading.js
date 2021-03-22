import React from 'react';

import './Heading.scss';

const headingLevels = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const Heading = (props) => {
  const { children, variant } = props;

  return React.createElement(headingLevels[variant], props, children);
};

export default Heading;
