// /src/pages/auth/signup.tsx: the signup page
import React from 'react';
import Form from '@/components/Form';

const Signup = () => {
  // signup handler function
  const handleSubmit = () => {
    console.log('Submitting');
  };
  return (
    <div>
      <Form formType="signup" onSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
