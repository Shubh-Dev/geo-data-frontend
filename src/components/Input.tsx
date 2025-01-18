// /src/components/Input.tsx
// A reusable input component that supports dynamic configuration.
import React from 'react';

interface InputProps {
  id: string; // unique identifier for the input element
  type: string; // type of imput example: email, password
  label: string; // label text optional
  placeholder: string; // placeholder text for the input
  value: string; // current value of the input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // function to handle changes in th input
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label || ''}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-3 px-3 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
      />
    </div>
  );
};

export default Input;
