import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AmenityCardProps {
  name: string;
  Icon: LucideIcon;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ name, Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
    >
      <Icon className="w-8 h-8 text-primary-dark mb-2" />
      <span className="text-sm font-medium text-text text-center">{name}</span>
    </motion.div>
  );
};

export default AmenityCard;