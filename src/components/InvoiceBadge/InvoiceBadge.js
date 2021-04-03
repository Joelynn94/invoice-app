import React from 'react';

import './InvoiceBadge.scss';

const STATUS = ['draft', 'pending', 'paid'];

const getDefaultStatus = (arr) => {
  return arr[0][0].toUpperCase() + arr[0].substring(1).toLowerCase();
};

const InvoiceBadge = ({ status }) => {
  const checkBadgeStatus = STATUS.includes(status)
    ? status
    : getDefaultStatus(STATUS);

  return (
    <span className={`badge ${checkBadgeStatus}`}>
      <span className={`badge__dot ${checkBadgeStatus}`}></span>
      {status
        ? status[0].toUpperCase() + status.substring(1).toLowerCase()
        : getDefaultStatus(STATUS)}
    </span>
  );
};

export default InvoiceBadge;
