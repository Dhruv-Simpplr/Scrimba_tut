import Header from './Header';
import Footer from './Footer';
import Page from './Page';
import '@picocss/pico';
import './style.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
