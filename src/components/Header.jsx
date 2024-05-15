import { Link } from 'react-router-dom';
import '../App.css';
import arrow from '../images/icon-hamburger.svg';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <header>
      <nav className={menuOpen ? 'open' : ''}>
        <ul className="flex gap-10 text-white">
          <li className='logo'><Link to="/">Supreme</Link></li>
          <div className='sep'>
            <li>About</li>
            <li>Services</li>
            <li><Link to="/FAQ">FAQ</Link></li> 
            <li><Link to="/contact">Contact Us</Link></li>
          </div>
          <div className='buttons'>
            <button className='btn1'><Link to="/signup">Sign Up</Link></button>
            <button className='btn2'><Link to="/login">Log In</Link></button>
          </div>
          <div className='hamburger-menu' >
            <div className='arrow'>
              <img src={arrow} alt="" className='arrow1'onClick={toggleMenu}/>
            </div>
          </div>
        </ul>
      </nav> 
    </header>
  );
}

export default Header;
