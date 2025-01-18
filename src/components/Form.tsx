// Form.tsx
// A reusable form component that supports dynamic configuration and event handling.

import React, { useState } from 'react';
import Input from './Input';

interface formProps {
  formType: 'login' | 'signup' | 'reset'; // type of forms
  onSubmit: (data: {
    email: string;
    password?: string;
    confirmPassword?: string;
  }) => void; // submission handler
}

const Form: React.FC<formProps> = ({ formType, onSubmit }) => {
  const [email, setEmail] = useState(''); // stores the email input
  const [password, setPassword] = useState(''); // stores the password input
  const [confirmPassword, setConfirmPassword] = useState(''); // stores the confirm password input

  // Handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: {
      email: string;
      password?: string;
      confirmPassword?: string;
    } = { email };

    // Add password and confirm password if the form type requires them
    if (formType == 'login' || formType == 'signup' || formType == 'reset')
      formData.password = password;
    if (formType == 'signup' || formType == 'reset')
      formData.confirmPassword = confirmPassword;

    onSubmit(formData); // pass the form data to the submit handler
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg border border-red-600"
      >
        <h2 className="text-2xl font-bold text-center mb-6 capitalize">
          {formType}
        </h2>
        <div>
          <Input
            id="email"
            type="email"
            label=""
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            id="password"
            type="password"
            label=""
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          {(formType == 'signup' || formType == 'reset') && (
            <Input
              id="confirmPassword"
              type="confirmPassord"
              label=""
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
