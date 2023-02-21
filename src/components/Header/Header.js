import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <NavLink to="/" className={(nav) => (nav.isActive ? "site-header__link site-header__link--active" : "site-header__link")}>
        Home
      </NavLink>
      <NavLink to="/about" className={(nav) => (nav.isActive ? "site-header__link site-header__link--active" : "site-header__link")}>
        About
      </NavLink>
    </header>
  );
};


export default Header;