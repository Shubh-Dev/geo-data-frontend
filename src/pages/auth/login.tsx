// login.tsx: the login page
import React, { useState } from 'react';
import Form from '@/components/Form';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null); // storing error messages
  // login handler function
  const handleSubmit = async (data: { email: string; password?: string }) => {
    try {
      const response = await fetch(
        'https://geo-data-backend-sirq.onrender.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log('Response:', responseData);
       if (responseData.token) {
      localStorage.setItem('authToken', responseData.token);
    }
      router.push('/');
    } catch (error) {
      setError('An unexpected error occured');
      console.error(error);
    }
  };
  return (
    <div>
      <Form formType="login" onSubmit={handleSubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
