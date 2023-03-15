import logo from './science.png';
function Header() {
  return (
    <div className="nav-bar">
      <header>
        <nav>
          <ul>
            <li>
              <img src={logo} alt="React Logo" width="40px" />
            </li>
          </ul>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
