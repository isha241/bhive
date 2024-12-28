import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import PriceButton from "../PriceButton/PriceButton";
import { Space } from "../../store/types";
import { item, resolveImagePath, getBadgeColor } from "./SpaceCard";

export const SpaceCard: React.FC<Space> = ({
  name,
  address,
  google_maps_url,
  day_pass_price,
  day_pass_discounts_percentage,
  images,
  type = "Honeykomb",
}) => {
  const discountedPrice =
    day_pass_price *
    10 *
    (1 - (day_pass_discounts_percentage["10"]?.value || 0) / 100);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="relative aspect-video">
        <img
          src={resolveImagePath(images[0])}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`
            px-4 py-2 rounded-full text-sm font-medium
            // ${getBadgeColor("Honeykomb")}                       Honeykomb
            ${type === "Platinum" ? "text-black" : "text-white"}
          `}
          >
            {type}
          </span>
        </div>
        <a
          href={google_maps_url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-white text-gray-700 px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-gray-100 transition-colors"
        >
          <MapPin className="w-4 h-4" />
          <span>5 Kms</span>
        </a>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-text mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{address}</p>
        <div className="flex justify-between items-center">
          {/* <div>
              <div className="text-sm text-gray-500">Day Pass</div>
              <div className="font-semibold">₹{day_pass_price}/Day</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Bulk Pass</div>
              <div className="font-semibold text-primary-dark">₹{discountedPrice}/10 Days</div>
            </div> */}
          <PriceButton
            label="Day Pass"
            price={day_pass_price}
            unit="/ Day"
            variant="secondary"
          />
          <PriceButton
            label="Bulk Pass"
            price={discountedPrice}
            unit="/ 10 Days"
            variant="primary"
            discount="20% Discount"
          />
        </div>
        {day_pass_discounts_percentage["10"] && (
          <div className="mt-2 bg-yellow-50 text-yellow-800 text-xs p-2 rounded">
            {day_pass_discounts_percentage["10"].message}
          </div>
        )}
      </div>
    </motion.div>
  );
};
