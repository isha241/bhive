import React from "react";

interface PriceButtonProps {
  label: string;
  price: number;
  unit: string;
  variant: "primary" | "secondary";
  discount?: string;
}

export const PriceButton: React.FC<PriceButtonProps> = ({
  label,
  price,
  unit,
  variant,
  discount,
}) => {
  return (
    <button
      className={`
        group relative flex-1 rounded-xl p-4 text-left transition-all hover:scale-[1.02]
        ${variant === "primary" ? "bg-[#FFD800]" : "bg-gray-50"}
      `}
    >
      <div className="space-y-1">
        <p className="text-[#1E1E1E] text-base font-medium">{label}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-[#1E1E1E] text-xl font-semibold">₹</span>
          <span className="text-[#1E1E1E] text-xl font-semibold">{price}</span>
          <span className="text-[#1E1E1E] text-sm font-normal">{unit}</span>
        </div>
      </div>

      {discount && (
        <div className="absolute -top-3 right-4 bg-[#1E1E1E] text-white text-xs px-3 py-1 rounded-md">
          {discount}
        </div>
      )}

      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-[2px]">
        <span className="text-lg transform transition-transform group-hover:translate-x-1">
          ›
        </span>
        <span className="text-lg transform transition-transform group-hover:translate-x-1 delay-75">
          ›
        </span>
        <span className="text-lg transform transition-transform group-hover:translate-x-1 delay-150">
          ›
        </span>
      </div>
    </button>
  );
};

export default PriceButton;
