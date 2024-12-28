import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">
              Host your meeting with world-class amenities.
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Starting at <span className="text-primary-dark">₹199/-</span>
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/meeting-illustration.svg"
              alt="Meeting illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
