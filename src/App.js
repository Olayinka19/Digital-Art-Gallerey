import React from 'react';
import Navigation from './Components/Navigation';
import Gallery from './Components/Gallery';


const artPieces = [
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-yNNJsxfXzTI%2FYRmYIIqz57I%2FAAAAAAABYlQ%2Fz0cfWV8mcN0TX9X2JxyahtmWnbF0P1PnACLcBGAsYHQ%2Fs1340%2Fiammohbadnews_20210811_69.png&f=1&nofb=1&ipt=ff429c5f2e408841f10f5c5314646e14de1664472942ad7c7e15770547041df7&ipo=images',
    title: 'Art Piece 1',
    artist: 'Imole',
  },
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fb2h3x3f6.stackpathcdn.com%2Fassets%2Flanding%2Fimg%2Fgallery%2F5.jpg&f=1&nofb=1&ipt=359db5504cbc8d11f0c84cd521e20f471ddacfa6b82d9ac32f1dd24701642a13&ipo=images',
    title: 'Art Piece 2',
    artist: 'Kehinde',
  },
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pcmag.com%2Fimagery%2Farticles%2F03a3gbCKfH8dDJnjhHLuHDf-1.fit_lim.size_1600x900.v1665523315.png&f=1&nofb=1&ipt=14d213ece8c994e4b6e49b2ba644c965bdc4169177500e5539fd6eebab47010e&ipo=images',
    title: 'Art Piece 3',
    artist: 'Adam Smith',
  },
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmpost.io%2Fwp-content%2Fuploads%2Fimage-74-7.jpg&f=1&nofb=1&ipt=cc9ef96b71e162ad4073aa1f264640404abae38e21bfc1d7c2f00825ebe2a0b3&ipo=images',
    title: 'Art Piece 4',
    artist: 'Olamide',
  },
  {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2F05e7be13887469.5a5d542a12c9b.png&f=1&nofb=1&ipt=aa4f157ebceac2f3ae0b45584a1b30d5b91ca23fc10ab9967baa70fda92cb2ef&ipo=images',
    title: 'Art Piece 5',
    artist: 'Paul',
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
