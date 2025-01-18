// src/components/PrimaryButton.tsx

import React from 'react';

interface PrimaryButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Function to handle button click
  children: React.ReactNode; // Button content (e.g., text)
  className?: string; // Optional additional classes
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  children,
  className = '',
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`bg-[#4674F4] text-white py-2  rounded-sm hover:bg-[#365aa3] transition duration-200 w-full ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
