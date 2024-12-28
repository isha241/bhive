import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/bhive-logo.svg" alt="BHIVE Workspaces" className="h-8 w-auto" />
      <span className="font-semibold text-text text-lg hidden sm:inline">BHIVE Workspaces</span>
    </div>
  );
}

export default Logo;