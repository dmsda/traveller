import React from "react";

interface StoreButtonProps {
  store: "apple" | "google";
  variant?: "light" | "dark" | "outline" | "white";
  onClick?: () => void;
  className?: string;
}

export const StoreButton: React.FC<StoreButtonProps> = ({
  store,
  variant = "light",
  onClick,
  className = "",
}) => {
  const isApple = store === "apple";

  const variantClasses = {
    light:
      "bg-white text-[#251613] border border-[#EDE7E2] shadow-sm hover:shadow-md hover:border-[#FF5B3D]/30",
    white:
      "bg-white text-[#251613] shadow-md hover:shadow-lg hover:scale-102 border border-transparent",
    dark:
      "bg-[#251613] text-white hover:bg-black shadow-sm",
    outline:
      "bg-white/90 backdrop-blur-sm text-[#251613] border border-white/50 hover:bg-white shadow-sm",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-left select-none active:scale-[0.98] ${variantClasses[variant]} ${className}`}
      aria-label={isApple ? "Download on the Apple App Store" : "Get it from Google Play Store"}
    >
      {isApple ? (
        <svg
          className="w-5 h-5 flex-shrink-0 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.66 1.38-.56.64-1.05 1.71-.92 2.74 1.05.08 2.07-.53 2.66-1.25z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 flex-shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285F4"
            d="M3.6 2.4C3.2 2.8 3 3.4 3 4.2v15.6c0 .8.2 1.4.6 1.8l9.4-9.6L3.6 2.4z"
          />
          <path
            fill="#FBBC04"
            d="M16.5 8.5l-3.5 3.5 3.5 3.5 4.1-2.3c1.2-.7 1.2-1.8 0-2.5l-4.1-2.2z"
          />
          <path
            fill="#EA4335"
            d="M3.6 2.4l9.4 9.6 3.5-3.5-10.7-6c-.8-.4-1.6-.4-2.2-.1z"
          />
          <path
            fill="#34A853"
            d="M3.6 21.6c.6.3 1.4.3 2.2-.1l10.7-6-3.5-3.5-9.4 9.6z"
          />
        </svg>
      )}
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] text-[#6E6462] font-medium tracking-tight">
          {isApple ? "Download on the" : "Get it from"}
        </span>
        <span className="text-[13px] font-bold text-[#251613]">
          {isApple ? "Apple Store" : "Google Play"}
        </span>
      </div>
    </button>
  );
};
