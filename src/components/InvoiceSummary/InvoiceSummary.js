import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import InvoiceBadge from '../InvoiceBadge/InvoiceBadge';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import changeToCurrency from '../../utils/changeToCurrency';
import formatDate from '../../utils/formatDate';

import './InvoiceSummary.scss';

const InvoiceSummary = ({ invoice }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <>
      {invoice && (
        <Link
          className='invoice-summary__link'
          to={`/invoice/${invoice.id}`}
          style={{ color: theme.text }}
        >
          <div
            className='invoice-summary'
            style={{ backgroundColor: theme.cardBg }}
          >
            <div className='invoice-summary__id'>
              <Heading variant='h4'>
                <span className='invoice-summary__hash'>#</span>
                {invoice.id}
              </Heading>
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
                  {formatDate(invoice.paymentDue)}
                </p>
              </div>
              <div className='invoice-summary__total'>
                <Heading variant='h3'>
                  <span className='invoice-summary__symbol'>$</span>
                  {changeToCurrency(invoice.total)}
                </Heading>
              </div>
            </div>
            <div
              className='invoice-summary__due-date'
              style={{ color: theme.textAccent }}
            >
              <p>
                <span className='invoice-summary__due-txt'>Due</span>
                {formatDate(invoice.paymentDue)}
              </p>
            </div>
            <div className='invoice-summary__total'>
              <Heading variant='h3'>
                <span className='invoice-summary__symbol'>$</span>
                {changeToCurrency(invoice.total)}
              </Heading>
            </div>
            <div className='invoice-summary__badge'>
              <InvoiceBadge
                status={invoice.status}
                theme={isLightTheme ? 'light' : 'dark'}
              />
            </div>
            <div className='invoice-summary__arrow'>
              <Button>
                <img
                  src='./assets/icon-arrow-right.svg'
                  alt='right arrow icon'
                />
              </Button>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default InvoiceSummary;
