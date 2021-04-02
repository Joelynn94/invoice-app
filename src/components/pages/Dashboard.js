import React from 'react';
import Button from '../Button/Button';
import InvoicesBar from '../InvoicesBar/InvoicesBar';

const Dashboard = () => {
  return (
    <main>
      <InvoicesBar />
      {/* <Button type='button' variant='primary' size='lg'>
        Mark as Paid
      </Button>
      <Button type='button' variant='light' size='lg'>
        Mark as Paid
      </Button>
      <Button type='button' variant='dark' size='lg'>
        Mark as Paid
      </Button>
      <Button type='button' variant='edit-dark' size='lg'>
        Mark as Paid
      </Button>
      <Button type='button' variant='edit-light' size='lg'>
        Mark as Paid
      </Button> */}
    </main>
  );
};

export default Dashboard;
