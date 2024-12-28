import React from 'react';
import { amenities } from '../../data/amenities';
import AmenityCard from './AmenityCard';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text mb-8">Why Choose us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map((amenity) => (
            <AmenityCard
              key={amenity.id}
              name={amenity.name}
              Icon={amenity.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;