import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'ghost' | 'solid';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'solid', size = 'medium', className, ...props }) => {
  const baseStyles = 'border rounded-md transition-all duration-300 focus:outline-none focus:ring-2';
  let variantStyles = '';
  let sizeStyles = '';

  // Define styles for different variants
  switch (variant) {
    case 'outline':
      variantStyles = 'bg-white text-green-600 border-green-600 hover:bg-green-50 hover:shadow-lg focus:ring-green-500';
      break;
    case 'ghost':
      variantStyles = 'bg-transparent text-green-600 border-transparent hover:bg-green-50 hover:shadow-lg focus:ring-green-500';
      break;
    case 'solid':
    default:
      variantStyles = 'bg-green-600 text-white border-transparent hover:bg-green-700 hover:shadow-lg focus:ring-green-500';
      break;
  }

  // Define styles for different sizes
  switch (size) {
    case 'small':
      sizeStyles = 'px-2 py-1 text-sm';
      break;
    case 'large':
      sizeStyles = 'px-6 py-3 text-lg';
      break;
    case 'medium':
    default:
      sizeStyles = 'px-4 py-2 text-base';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    />
  );
};

export default Button;
