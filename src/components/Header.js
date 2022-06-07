import './style.css';
import Troll from 'https://toppng.com/uploads/thumbnail/troll-face-vector-download-free-115741753031c8udcdgkw.png';

const Header = () => (
  <header className="header">
    <div className="header--logo">
      <img src={Troll} alt="Troll Face" className="header--troll" />
      <h2>Meme Generator</h2>
    </div>
    <h3>React Course - Project 3</h3>
  </header>
);

export default Header;
