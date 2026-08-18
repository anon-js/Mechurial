import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-xl bg-brand px-8 py-3 text-sm font-medium text-white transition hover:bg-brand/90 disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
