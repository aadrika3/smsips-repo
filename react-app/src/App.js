import React from "react";
import logo from "./SMSIPS_logo.png";
import aboutImage1 from "./Image_01.JPG";
import aboutImage11 from "./Image_11.JPG";
import aboutImage3 from "./Image_03.png";
import aboutImage4 from "./Image_04.JPG";
import aboutImage5 from "./Image_05.JPG";
import aboutImage6 from "./Image_06.JPG";
import aboutImage7 from "./Image_07.JPG";
import aboutImage8 from "./Image_08.JPG";
import aboutImage9 from "./Image_09.JPG";
import aboutImage10 from "./Image_10.JPG";

import pdf1 from "./Mandatory_Public_Disclosure.pdf";
import pdf2 from "./AFFILATION_LETTER.pdf";
import pdf3 from "./Trust Deed.pdf";
import pdf4 from "./NOC state board.pdf";
import pdf5 from "./Building safety certificate.pdf";
import pdf6 from "./Fire Safety 001.pdf";
import pdf7 from "./hearth and Sanitation  certificate.pdf";
import pdf8 from "./Fee Structure.pdf";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="School Logo" />
          <div className="school-info">
            <h1>Shri Maa Sharda International Public School</h1>
            <p className="affiliation">
              Affiliated to CBSE New Delhi, Affiliation Number: 2133305
            </p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#cbse">CBSE Mandatory Disclosure</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#admissions">Apply Now</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="about-image">
          <img src={aboutImage1} alt="About School" />
          <img src={aboutImage11} alt="About School" />
          <img src={aboutImage6} alt="About School" />
          <img src={aboutImage4} alt="About School" />
          <img src={aboutImage5} alt="About School" />
        </div>
        <div className="about-image">
          <img src={aboutImage3} alt="About School" />
          <img src={aboutImage7} alt="About School" />
          <img src={aboutImage8} alt="About School" />
          <img src={aboutImage9} alt="About School" />
          <img src={aboutImage10} alt="About School" />
        </div>
        <section id="about">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Shri Maa Sharda International Public School is an educational
              institution committed to providing high-quality education to its
              students. Our mission is to create a nurturing and challenging
              learning environment that promotes academic excellence,
              creativity, and character development.
            </p>
            <p>
              Our dedicated and experienced faculty is committed to helping each
              student reach their full potential. We offer a well-rounded
              education that emphasizes not only academic achievement but also
              personal growth, social responsibility, and community involvement.
            </p>
            <p>
              Our school provides a variety of opportunities for students to
              explore their interests and develop their talents, including
              extracurricular activities, clubs, and sports teams. We also offer
              a range of resources to support students in their academic
              pursuits, such as a well-stocked library, computer lab, and
              science lab.
            </p>
            <p>
              At Shri Maa Sharda International Public School, we are proud of
              our commitment to providing a quality education to all students.
              We strive to foster a love of learning and prepare our students
              for success in the 21st century."
            </p>
          </div>
        </section>
        <section id="cbse">
          <h2>CBSE Mandatory Disclosure</h2>
          <table>
            <tbody>
              <tr>
                <td>SMSIPS Mandatory Public Disclosure</td>
                <td>
                  <a href={pdf1} target="_blank" rel="noreferrer">
                    Mandatory Public Disclosure
                  </a>
                </td>
              </tr>
              <tr>
                <td>AFFILIATION/UPGRADATION LETTER</td>
                <td>
                  <a href={pdf2} target="_blank" rel="noreferrer">
                    AFFILATION LETTER
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE
                </td>
                <td>
                  <a href={pdf3} target="_blank" rel="noreferrer">
                    Trust Deed
                  </a>
                </td>
              </tr>
              <tr>
                <td>NO OBJECTION CERTIFICATE - NOC</td>
                <td>
                  <a href={pdf4} target="_blank" rel="noreferrer">
                    NOC state board
                  </a>
                </td>
              </tr>
              <tr>
                <td>BUILDING SAFETY CERTIFICATE</td>
                <td>
                  <a href={pdf5} target="_blank" rel="noreferrer">
                    Building Safety certificate
                  </a>
                </td>
              </tr>
              <tr>
                <td>FIRE SAFETY CERTIFICATE</td>
                <td>
                  <a href={pdf6} target="_blank" rel="noreferrer">
                    Fire Safety certificate
                  </a>
                </td>
              </tr>
              <tr>
                <td>WATER, HEALTH AND SANITATION CERTIFICATE</td>
                <td>
                  <a href={pdf7} target="_blank" rel="noreferrer">
                    Health and Sanitation certificate
                  </a>
                </td>
              </tr>
              <tr>
                <td>School Fee Structure</td>
                <td>
                  <a href={pdf8} target="_blank" rel="noreferrer">
                    Fee Structure
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>
              <strong>Address:</strong> SHRI MAA SHARDA INTERNATIONAL PUBLIC
              SCHOOL <br />
              NEAR AIT BILAYAN TOLL PLAAZA, NH 27 JHANSI KANPUR HIGHWAY AIT{" "}
              <br />
              UTTAR PRADESH, JALAUN, 285201
            </p>
            <p>
              <strong>Email ID:</strong> smsipsb@gmail.com
            </p>
            <p>
              <strong>Contact Number:</strong> +91-8962560564 / +91-8765550925
            </p>
          </div>
        </section>
        <section id="admissions">
          <h2>Admissions and Job Application</h2>
          <p>
            To apply for school admission or a job at our campus - Teaching,
            Management and Other staff, please fill out and submit the Google
            Form, or contact us directly using the information provided. For
            more information about our admission and job application process, we
            invite you to visit our campus.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Admissions open for playgroup to 12th grade.</td>
                <td>
                  <a
                    href="https://forms.gle/oJ1oiff87eXCL8cq5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    School Admission Google Form Link
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Job vacancies available for teaching, management, and ground
                  staff.
                </td>
                <td>
                  <a
                    href="https://forms.gle/Mc7ZeYnnsF4nczUZ9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Job Application Google Form Link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <footer>
        <p>
          © 2023 Shri Maa Sharda International Public School. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
