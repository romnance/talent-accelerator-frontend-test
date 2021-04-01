import './App.css';
import logo from './StarWarsLogo.png';
import GetNames from './GetNames.js';


function App() {
  return (
  <>
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="StarWarsLogo" />
        <h1 className="header">Characters</h1>
      </header>
    <GetNames />
    </div>
  </>
  );
}

export default App;
