/* import pdfFile from "./pdfFile.pdf";
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
import logo from "./logo.jpg";
import "./App.css";
import pdfFile from "./pdfFile.pdf";

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="School Logo" />
        <h1>Shri Maa Sharda International Public School</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#CBSEMandatoryDisclosure">Disclosure</a>
            </li>
            <li>
              <a href="#academics">Academics</a>
            </li>
            <li>
              <a href="#admissions">Admissions</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>
            Shri Maa Sharda International Public School is a premier CBSE school
            located in the heart of India. We are committed to providing a
            quality education that emphasizes academic excellence, character
            development, and community engagement.
          </p>
          <p>
            Our school has state-of-the-art facilities, a dedicated faculty, and
            a wide range of extracurricular activities to help students discover
            their passions and develop their talents.
          </p>
        </section>
        <section id="CBSEMandatoryDisclosure">
          <h2>CBSE Mandatory Disclosure</h2>
          <p>
            <a href={pdfFile}>CBSE Mandatory Disclosure PDF</a>
          </p>
        </section>
        <section id="academics">
          <h2>Academics</h2>
          <p>
            Our school offers a rigorous academic program that prepares students
            for success in college and beyond. We offer a wide range of courses
            in the arts, sciences, and humanities, and our faculty are committed
            to helping students develop critical thinking skills, creativity,
            and a lifelong love of learning.
          </p>
        </section>
        <section id="admissions">
          <h2>Admissions</h2>
          <p>
            We welcome students of all backgrounds and abilities to apply to our
            school. Our admissions process is designed to identify students who
            will thrive in our rigorous academic program and who share our
            commitment to community service and character development.
          </p>
          <p>
            To learn more about our admissions process, please visit our
            admissions page or contact our admissions office.
          </p>
        </section>
        <section id="events">
          <h2>Events</h2>
          <p>
            We host a variety of events throughout the school year to promote
            community engagement and showcase our students' talents. From music
            and theater performances to athletic competitions and academic
            competitions, there is always something exciting happening at Shri
            Maa Sharda International Public School.
          </p>
        </section>
        <section id="Careers">
          <h2>Careers</h2>
          <p>Careers</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or would like to learn more about our
            school, please don't hesitate to contact us. You can reach us by
            phone, email, or by filling out the contact form on our website.
          </p>
        </section>
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
