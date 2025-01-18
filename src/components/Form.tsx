// src/components/Form.tsx
// A reusable form component that supports dynamic configuration and event handling.

import React, { useState } from 'react';
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';

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
  const buttonText =
    formType === 'login'
      ? 'Log In'
      : formType === 'signup'
        ? 'Sign Up'
        : 'Reset Password';
  return (
    <div className="w-full p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white  px-6 py-12 rounded-lg shadow-lg sm:w-full md:w-5/6 lg:w-2/6 xl:1/6 mx-auto  mt-24"
      >
        <h2 className="text-2xl text-[#4672F4] font-bold text-center mb-6 capitalize">
          {formType}
        </h2>

        <div className="text-center">
          <Input
            id="email"
            type="email"
            label=""
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            id="password"
            type="password"
            label=""
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
        <div className="mt-12">
          <PrimaryButton children={buttonText} onClick={handleSubmit} />
        </div>
        {formType == 'signup' && (
          <Link href="/auth/login">
            <p className="text-center text-sm mt-6 text-[#4672F4]">
              Already have an account?
            </p>
          </Link>
        )}

        {formType == 'login' && (
          <div>
            <Link href="/auth/reset">
              <p className="text-center text-sm mt-6 text-[#4672F4]">
                Forgot Your password?
              </p>
            </Link>
            <hr className="border-t-1 border-gray-200 my-4" />
            <Link href="/auth/signup">
              <button
                type="button"
                className={`bg-[#e5e7eb] text-gray-600 py-2 mt-4 rounded-sm hover:text-gray-400 transition duration-200 w-full`}
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}

        {formType == 'reset' && (
          <Link href="/auth/login">
            <p className="text-center text-sm mt-6 text-[#4672F4]">
              Go back to Login
            </p>
          </Link>
        )}
      </form>
    </div>
  );
};

export default Form;
