import React from 'react';

// Card component
const Card = ({ emoji, id, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <img src={`https://emojicdn.elk.sh/${emoji}`} alt="emoji" />
    </div>
  );
};

export default Card;
