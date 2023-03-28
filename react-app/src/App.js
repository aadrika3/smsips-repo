import logo from "./logo.svg";
import pdfFile from "./pdfFile.pdf";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SMSIPS</p>
        <a
          className="App-link"
          href="https://www.facebook.com/people/Shri-maa-sharda-international-public-school/100067381647049/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Link
        </a>
        <br></br>
        <br></br>

        <a href={pdfFile}>CBSE Mandatory Disclosure</a>
      </header>
    </div>
  );
}

export default App;
