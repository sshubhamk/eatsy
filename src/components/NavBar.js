import './NavBar.css';
import logo from '../assets/images/logo.svg';

const NavBar = () => {
  // const nav_menu = ['Home', 'Restaurants', 'About Us', 'Contact'];
  return (
    <div className="nav-container">
      <div className="logo-block">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <a href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='/offers-near-me'>
              Offers
            </a>
          </li>
          <li>
            <a href='/contact'>
              Contact
            </a>
          </li>
          <li>
            <a href='/cart'>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;