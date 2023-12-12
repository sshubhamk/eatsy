import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { Routes } from '../constants/routes';

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-block">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          {Routes.map((item) => (
            <li key={item.id}>
              <Link className='nav-title' to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;