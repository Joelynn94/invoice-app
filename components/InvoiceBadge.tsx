import React from "react";
import "./InvoiceBadge.css";

const STATUS = ["draft", "pending", "paid"];

const getDefaultStatus = (arr: string[]): string => {
  return arr[0][0].toUpperCase() + arr[0].substring(1).toLowerCase();
};

interface InvoiceBadgeProps {
  status: string;
}

const InvoiceBadge: React.FC<InvoiceBadgeProps> = ({ status }) => {
  const checkBadgeStatus = STATUS.includes(status) ? status : STATUS[0];

  return (
    <span className={`badge badge--${checkBadgeStatus} text-sm`}>
      <span className={`badge__dot ${checkBadgeStatus}`}></span>
      {status
        ? status[0].toUpperCase() + status.substring(1).toLowerCase()
        : getDefaultStatus(STATUS)}
    </span>
  );
};

export default InvoiceBadge;
