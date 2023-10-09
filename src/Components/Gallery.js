import React from 'react';
import ArtPiece from './ArtPiece';

function Gallery({ artPieces }) {
  return (
    <div className="gallery">
      {artPieces.map((art, index) => (
        <ArtPiece key={index} {...art} />
      ))}
      <h1 className='gallery-art'>Art Gallery Project By: Kehinde Oladipupo</h1></div>
   
  );
}

export default Gallery;
