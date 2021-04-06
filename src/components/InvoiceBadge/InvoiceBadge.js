import React from 'react';

import './InvoiceBadge.scss';

const STATUS = ['draft', 'pending', 'paid'];
const THEME = ['light', 'dark'];

const getDefaultStatus = (arr) => {
  return arr[0][0].toUpperCase() + arr[0].substring(1).toLowerCase();
};

const InvoiceBadge = ({ status, theme }) => {
  const checkBadgeStatus = STATUS.includes(status) ? status : STATUS[0];

  const checkThemeStatus = THEME.includes(theme) ? theme : THEME[0];

  return (
    <span className={`badge badge-${checkBadgeStatus} ${checkThemeStatus}`}>
      <span
        className={`badge__dot ${checkBadgeStatus} ${checkThemeStatus}`}
      ></span>
      {status
        ? status[0].toUpperCase() + status.substring(1).toLowerCase()
        : getDefaultStatus(STATUS)}
    </span>
  );
};

export default InvoiceBadge;
