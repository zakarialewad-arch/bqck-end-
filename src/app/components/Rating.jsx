import React from 'react';

const Rating = ({ value }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={`text-2xl ${index < value ? 'text-amber-500' : 'text-gray-300'}`}>
      ★
    </span>
  ));

  return (
    <div className="flex justify-center my-2">
      {stars}
    </div>
  );
};

export default Rating;