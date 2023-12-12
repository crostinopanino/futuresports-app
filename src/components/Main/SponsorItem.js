
import React from 'react';

const SponsorItem = ({ imageName, alt }) => {
  const imagePath = `/images/${imageName}`; // Construct the path based on the file name passed as a prop

  return (
    <div className="sponsor-item">
      <img src={imagePath} alt={alt} />
    </div>
  );
};

export default SponsorItem;