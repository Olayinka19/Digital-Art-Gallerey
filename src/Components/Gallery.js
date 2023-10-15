import React from 'react';
import ArtPiece from './ArtPiece';

function Gallery({ artPieces }) {
  return (
    <div className="gallery">
    
      {artPieces.map((art, index) => (
        <ArtPiece key={index} {...art} />
      ))}
      <iframe src="https://chitchatter.im/public/886345ce-9ded-4c3e-a259-bb2d5596df8a?embed=1" allow="camera;microphone;display-capture;fullscreen" width="800" height="800" />
      <h1 className='gallery-art'>Art Gallery Project By: Kehinde Oladipupo</h1></div>
   
  );
}

export default Gallery;
