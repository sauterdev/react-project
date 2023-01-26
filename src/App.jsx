import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is so cool!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>First React Project</h1>
        <p>This will be updated over the rest of the course</p>
        <ul>
           <li>bears</li>
           <li>beets</li>
           <li>battlestar galactica</li>   

        </ul>
      </header>
    </div>
  );
}

export default App;
