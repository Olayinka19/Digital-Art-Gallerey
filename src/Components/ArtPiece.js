import React from 'react';

function ArtPiece({ image, title, artist }) {
  return (
    <div className="art-piece">
      <img className='art' src={image} alt={title} />
      <h3>{title}</h3>
      <p>By {artist}</p>
      
    </div>
  );
}

export default ArtPiece;
