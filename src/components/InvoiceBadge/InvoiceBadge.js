import React from 'react';

import './InvoiceBadge.scss';

const STATUS = ['draft', 'pending', 'paid'];

const InvoiceBadge = ({ status }) => {
  const checkBadgeStatus = STATUS.includes(status) ? status : STATUS[0];

  return (
    <span className={`badge ${checkBadgeStatus}`}>
      <span className={`badge__dot ${checkBadgeStatus}`}></span>
      {status[0].toUpperCase() + status.substring(1).toLowerCase()}
    </span>
  );
};

export default InvoiceBadge;
