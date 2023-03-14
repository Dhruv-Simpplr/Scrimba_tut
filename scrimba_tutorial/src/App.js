import logo from './science.png';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="React Logo" width="40px" />
        </nav>
      </header>
      <h1>This is Component</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <small>© 2023 Scrimba_tu development. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
