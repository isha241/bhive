import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/assets/background-image.png')",
        }}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative p-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">
              Host your meeting with world-class amenities.
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Starting at <span className="text-primary-dark">₹199/-</span>
            </p>
          </div>
          <div>
            <video className="w-6/12" autoPlay muted loop playsInline>
              <source src="/assets/workspace-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
