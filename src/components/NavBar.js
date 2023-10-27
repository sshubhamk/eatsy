import './nav-bar.css';
import logo from '../assets/images/logo.svg';


export const NavBar = () => {
  // const nav_menu = ['Home', 'Restaurants', 'About Us', 'Contact'];
  return (
    <div className="nav-container">
      <div className="logo-block">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> Restaurants </li>
          <li> Contact </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  );
}