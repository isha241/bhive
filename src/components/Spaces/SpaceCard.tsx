import React from "react";
import { motion } from "framer-motion";
import { useSpaceSelection } from "../../hooks/useSpaceSelection";
import PriceButton from "../PriceButton/PriceButton";
import { Space } from "../../store/types";

// interface SpaceCardProps {
//   id: string;
//   name: string;
//   address: string;
//   latitude: number;
//   longitude: number;
//   google_maps_url?: string;
//   city: string;
//   state: string;
//   country: string;
//   postal_code: string;
//   description: null;
//   rules: null;
//   amenities?: string[];
//   images: string[];
//   working_hours_start: string;
//   working_hours_end: string;
//   contact_person_name?: string;
//   facilities: null;
//   is_active: boolean;
//   is_day_pass_enabled: boolean;
//   day_pass_price: number;
//   day_pass_discounts_percentage: any;
//   manager_id: null;
// }
const resolveImagePath = (imagePath: string) => {
  try {
    return "src/assets/" + imagePath;
  } catch (error) {
    console.error("Image not found:", imagePath);
    return "/placeholder.jpg"; // Fallback image
  }
};
const SpaceCard: React.FC<Space> = ({
  id,
  name,
  day_pass_price,
  day_pass_discounts_percentage,
  images,
  is_active,
}) => {
  const { selectedSpace, handleSpaceSelect } = useSpaceSelection();
  const isSelected = selectedSpace === id;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        borderColor: isSelected ? "#FFD800" : "transparent",
      }}
      className="bg-white rounded-lg overflow-hidden shadow-sm border-2 cursor-pointer"
      onClick={() => handleSpaceSelect(id)}
    >
      <div className="relative h-48">
        <img
          src={resolveImagePath(images[0])}
          alt={name}
          className="w-full h-full object-cover"
        />
        {is_active && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-2 right-2 bg-primary text-text px-2 py-1 rounded text-sm font-medium"
          >
            Available
          </motion.span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-text mb-2">{name}</h3>
        <div className="flex items-center gap-2">
          {/* <span className="text-sm text-gray-3">Day Pass</span>
          <span className="text-text font-medium">₹{price}</span> */}
          <PriceButton
            label="Day Pass"
            price={day_pass_price}
            unit="/ Day"
            variant="secondary"
          />
          <PriceButton
            label="Bulk Pass"
            price={day_pass_discounts_percentage["10"].value}
            unit="/ 10 Days"
            variant="primary"
            discount="20% Discount"
          />
          {/* <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary-dark font-medium"
          >
            ₹{discountedPrice}/month
          </motion.span> */}
        </div>
      </div>
    </motion.div>
  );
};

export default SpaceCard;
