import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Gallery from './Components/Gallery';
import img1 from './assets/img1.png'

const artPieces = [
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F0whbc38ljj011.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D81ea991942c55deff1ce0665f35785991fdeed90&f=1&nofb=1&ipt=4f44bcd3c3d71ce9c5d45dd180297b6192aaebb845d692b94086a96ae4e1b51b&ipo=images',
    title: 'Art Piece 1',
    artist: 'Artist 1',
  },
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fb2h3x3f6.stackpathcdn.com%2Fassets%2Flanding%2Fimg%2Fgallery%2F5.jpg&f=1&nofb=1&ipt=359db5504cbc8d11f0c84cd521e20f471ddacfa6b82d9ac32f1dd24701642a13&ipo=images',
    title: 'Art Piece 2',
    artist: 'Artist 2',
  },
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pcmag.com%2Fimagery%2Farticles%2F03a3gbCKfH8dDJnjhHLuHDf-1.fit_lim.size_1600x900.v1665523315.png&f=1&nofb=1&ipt=14d213ece8c994e4b6e49b2ba644c965bdc4169177500e5539fd6eebab47010e&ipo=images',
    title: 'Art Piece 3',
    artist: 'Artist 3',
  },
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmpost.io%2Fwp-content%2Fuploads%2Fimage-74-7.jpg&f=1&nofb=1&ipt=cc9ef96b71e162ad4073aa1f264640404abae38e21bfc1d7c2f00825ebe2a0b3&ipo=images',
    title: 'Art Piece 4',
    artist: 'Artist 4',
  },
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2F05e7be13887469.5a5d542a12c9b.png&f=1&nofb=1&ipt=aa4f157ebceac2f3ae0b45584a1b30d5b91ca23fc10ab9967baa70fda92cb2ef&ipo=images',
    title: 'Art Piece 5',
    artist: 'Artist 5',
  },
  // Add more art pieces
];

function App() {
  return (
    <div className="app">
      <Navigation />
      <Gallery artPieces={artPieces} />
    </div>
  );
}

export default App;
