import React from 'react';
// import Button from '../Button/Button';
import InvoicesBar from '../InvoicesBar/InvoicesBar';
import InvoiceSummary from '../InvoiceSummary/InvoiceSummary';

const Dashboard = () => {
  return (
    <main>
      <InvoicesBar />
      <InvoiceSummary />
    </main>
  );
};

export default Dashboard;
