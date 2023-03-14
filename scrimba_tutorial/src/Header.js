import logo from './science.png';
import './style.css';
function Header() {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="React Logo" width="40px" />
        </nav>
        <ul className="nav-list">
          <li>Price</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
