import './App.css';
import { Body } from './components/Body';
import { NavBar } from './components/NavBar';
import { RestaurantCards } from './components/RestaurantCards';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      <NavBar />
      <Body />
      {/* </header> */}
    </div >
  );
}

export default App;
