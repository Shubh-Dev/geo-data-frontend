// /src/pages/auth/reset.tsx: the  reset page
import React from 'react';
import Form from '@/components/Form';

const Reset = () => {
  // reset handler function
  const handleSubmit = () => {
    console.log('Submitting');
  };
  return (
    <div>
      <Form formType="reset" onSubmit={handleSubmit} />
    </div>
  );
};

export default Reset;
