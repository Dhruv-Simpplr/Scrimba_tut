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
            <li>
              <h2 style={{ margin: '2px', padding: '2px', display: 'flex' }}>
                ReactFacts
              </h2>
            </li>
          </ul>
          <h5>React Course - Project 1</h5>
        </nav>
      </header>
    </div>
  );
}

export default Header;
