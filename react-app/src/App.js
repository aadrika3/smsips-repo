import logo from "./logo.svg";
import pic_trulli from "./pic_trulli.png";
import pdfFile from "./pdfFile.pdf";
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

        <a href="./pdfFile.pdf">hello</a>
      </header>
    </div>
  );
}

export default App;
