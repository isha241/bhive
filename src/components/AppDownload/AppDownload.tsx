import React from "react";

const AppDownload: React.FC = () => {
  const handleGooglePlayClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.bhive.workspace",
      "_blank"
    );
  };

  const handleAppStoreClick = () => {
    window.open(
      "https://apps.apple.com/in/app/bhive-workspace/id1234567890",
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-text mb-4">
              Download our app now
            </h2>
            <p className="text-text-secondary mb-8">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex gap-4">
              <button onClick={handleGooglePlayClick}>
                <img src="/assets/google-play.svg" />
              </button>
              <button onClick={handleAppStoreClick}>
                <img src="/assets/app-store.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/download.svg"
              alt="BHIVE Workspace App"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
