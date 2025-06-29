import React from 'react';

const AuroraBackground: React.FC = () => {
  return (
    <div className="aurora-container fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      {/* <div className="aurora-blob aurora-blob-3" /> */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
};

export default AuroraBackground;