import React from 'react';
import './style.css';
import memesData from './constants/MemeDB';

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
    imageAlt: 'Drake Hotline Bling',
  });

  const [allMemeImage, setAllMemeImage] = React.useState(memesData);

  function getNewMeme() {
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    const name = memesArray[randomNumber].name;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      imageAlt: name,
    }));
  }

  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button onClick={getNewMeme} className="form--button">
          Get a new meme image 🖼
        </button>
      </form>
      <img src={meme.randomImage} alt={meme.imageAlt} className="meme-image" />
    </main>
  );
}

export default Meme;
