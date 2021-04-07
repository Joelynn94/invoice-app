import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import InvoiceBadge from '../InvoiceBadge/InvoiceBadge';
import Button from '../Button/Button';

import './InvoiceSummary.scss';

const InvoiceSummary = ({ invoice }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className='invoice-summary' style={{ backgroundColor: theme.cardBg }}>
      <div className='invoice-summary__id'>
        <h3>
          <span className='invoice-summary__hash'>#</span>
          {invoice.id}
        </h3>
      </div>
      <div
        className='invoice-summary__client-name'
        style={{ color: theme.textAccent }}
      >
        <p>{invoice.clientName}</p>
      </div>
      <div className='invoice-summary__wrap'>
        <div
          className='invoice-summary__due-date'
          style={{ color: theme.textAccent }}
        >
          <p>
            <span className='invoice-summary__due-txt'>Due</span>
            {invoice.paymentDue}
          </p>
        </div>
        <div className='invoice-summary__total'>
          <h3>
            <span className='invoice-summary__symbol'>$</span>
            {invoice.total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </h3>
        </div>
      </div>
      <div
        className='invoice-summary__due-date'
        style={{ color: theme.textAccent }}
      >
        <p>
          <span className='invoice-summary__due-txt'>Due</span>
          {invoice.paymentDue}
        </p>
      </div>
      <div className='invoice-summary__total'>
        <h3>
          <span className='invoice-summary__symbol'>$</span>
          {invoice.total.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </h3>
      </div>
      <div className='invoice-summary__badge'>
        <InvoiceBadge
          status={invoice.status}
          theme={isLightTheme ? 'light' : 'dark'}
        />
      </div>
      <div className='invoice-summary__arrow'>
        <Button>
          <Link to='view-inovice'>
            <img src='./assets/icon-arrow-right.svg' alt='' />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InvoiceSummary;
