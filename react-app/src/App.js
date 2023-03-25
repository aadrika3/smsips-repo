import logo from "./logo.svg";
import pic_trulli from "./pic_trulli.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SMS<br></br> IPS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <br></br>
        <img src={pic_trulli} alt="Italian Trulli"></img>
      </header>
    </div>
  );
}

export default App;
