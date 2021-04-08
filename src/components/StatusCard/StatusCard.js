import React from 'react';
import InvoiceBadge from '../InvoiceBadge/InvoiceBadge';

import './StatusCard.scss';

const StatusCard = ({ invoice }) => {
  return (
    <div className='status-card'>
      <p className='status-card__status-text'>Status</p>
      <InvoiceBadge status={invoice.status} />
    </div>
  );
};

export default StatusCard;
