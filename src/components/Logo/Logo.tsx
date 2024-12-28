import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/assets/bhive.svg"
        alt="BHIVE Workspaces"
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;
