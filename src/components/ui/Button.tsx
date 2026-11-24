import React from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "whatsapp";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-md font-bold transition";
  
  const variants = {
    primary: "bg-brand-orange px-4 py-3 text-xs text-white hover:bg-orange-500",
    secondary: "bg-brand-blue px-4 py-3 text-xs text-white hover:bg-sky-600",
    whatsapp: "bg-brand-green px-5 py-3 text-xs text-white hover:brightness-110"
  };

  return (
    <a className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
