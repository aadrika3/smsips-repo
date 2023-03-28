/* import logo from "./logo.jpg";
import pdfFile from "./pdfFile.pdf";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Shri Maa Sharda International Public School.</p>
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

export default App; */
import React from "react";

function App() {
  return (
    <div>
      <header>
        <img src="%PUBLIC_URL%/logo192.png" alt="School Logo" />
        <h1>Shri Maa Sharda International Public School</h1>
      </header>
      <main>
        <p>
          Welcome to our CBSE school website! Here you can find information
          about our curriculum, faculty, extracurricular activities, and more.
          We are committed to providing a quality education and nurturing the
          whole student. Explore our site to learn more.
        </p>
      </main>
      <footer>
        <p>
          © 2023 Shri Maa Sharda International Public School. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
