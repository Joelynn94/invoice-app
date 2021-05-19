import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';
import InvoiceBadge from '../InvoiceBadge/InvoiceBadge';
import InvoiceViewButtons from '../InvoiceViewButtons/InvoiceViewButtons';

import './StatusCard.scss';

const StatusCard = ({ invoice }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { currentInvoice } = useContext(AppContext);

  return (
    <div className='status-card' style={{ backgroundColor: theme.cardBg }}>
      <p className='status-card__status-text'>Status</p>
      <InvoiceBadge status={currentInvoice.status} />
      <InvoiceViewButtons
        invoice={invoice}
        style={{
          backgroundColor: theme.cardBg,
          color: theme.text,
        }}
      />
    </div>
  );
};

export default StatusCard;
