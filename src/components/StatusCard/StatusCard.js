import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import InvoiceBadge from '../InvoiceBadge/InvoiceBadge';
import InvoiceViewButtons from '../InvoiceViewButtons/InvoiceViewButtons';

import './StatusCard.scss';

const StatusCard = ({ invoice }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='status-card' style={{ backgroundColor: theme.cardBg }}>
      <p className='status-card__status-text'>Status</p>
      <InvoiceBadge status={invoice.status} />
      <InvoiceViewButtons
        style={{
          backgroundColor: theme.cardBg,
          color: theme.text,
        }}
      />
    </div>
  );
};

export default StatusCard;
