import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  hasAccentBar?: boolean;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  children,
  align = "left",
  className = "",
  hasAccentBar = false,
}) => {
  const alignClass = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] text-[#9B918F] uppercase">
        {children}
      </span>
      {hasAccentBar && (
        <span
          className={`h-[3px] w-8 bg-[#FF5B3D] rounded-full mt-2.5 ${
            align === "center" ? "mx-auto" : ""
          }`}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
