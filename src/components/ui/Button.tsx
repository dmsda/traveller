import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B3D] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-xl gap-2",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#FF5B3D] text-white hover:bg-[#E84D2F] shadow-sm hover:shadow-coral-glow",
    secondary:
      "bg-[#FFF8F2] text-[#FF5B3D] hover:bg-[#FFECE0] border border-[#FF5B3D]/20",
    outline:
      "bg-transparent text-[#251613] border border-[#EDE7E2] hover:border-[#FF5B3D] hover:text-[#FF5B3D]",
    ghost:
      "bg-transparent text-[#251613] hover:text-[#FF5B3D] hover:bg-[#FFF8F2]/60",
    white:
      "bg-white text-[#251613] hover:bg-[#FFF8F2] shadow-sm hover:shadow-md",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
