import React from "react";
import logo from "./SMSIPS_logo.png";
import aboutImage1 from "./Assets/Images/Image_01.JPG";
import aboutImage11 from "./Assets/Images/Image_11.JPG";
import aboutImage3 from "./Assets/Images/Image_03.png";
import aboutImage4 from "./Assets/Images/Image_04.JPG";
import aboutImage5 from "./Assets/Images/Image_05.JPG";
import aboutImage6 from "./Assets/Images/Image_06.JPG";
import aboutImage7 from "./Assets/Images/Image_07.JPG";
import aboutImage8 from "./Assets/Images/Image_08.JPG";
import aboutImage9 from "./Assets/Images/Image_09.JPG";
import aboutImage10 from "./Assets/Images/Image_10.JPG";

import pdf1 from "./Assets/Documents/Mandatory_Public_Disclosure.pdf";
import pdf2 from "./Assets/Documents/AFFILATION_LETTER.pdf";
import pdf3 from "./Assets/Documents/Trust Deed.pdf";
import pdf4 from "./Assets/Documents/NOC state board.pdf";
import pdf9 from "./Assets/Documents/RECOGNITION CERTIFICATE.pdf";
import pdf5 from "./Assets/Documents/Building safety certificate.pdf";
import pdf6 from "./Assets/Documents/Fire Safety 001.pdf";
import pdf10 from "./Assets/Documents/DEO CERTIFICATE.pdf";
import pdf7 from "./Assets/Documents/hearth and Sanitation  certificate.pdf";

import pdf8 from "./Assets/Documents/Fee Structure.pdf";
import pdf11 from "./Assets/Documents/ANNUAL ACADEMIC CALENDAR.pdf";
import pdf12 from "./Assets/Documents/LIST OF SCHOOL MANAGEMENT COMMITTEE.pdf";
import pdf13 from "./Assets/Documents/LIST OF PARENTS TEACHERS ASSOCIATION MEMBERS.pdf";
import pdf14 from "./Assets/Documents/Board Examination Result.pdf";

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
                    mandatory_public_disclosure_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>AFFILIATION/UPGRADATION LETTER</td>
                <td>
                  <a href={pdf2} target="_blank" rel="noreferrer">
                    affiliation_letter_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE
                </td>
                <td>
                  <a href={pdf3} target="_blank" rel="noreferrer">
                    trust_deed_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>NO OBJECTION CERTIFICATE - NOC</td>
                <td>
                  <a href={pdf4} target="_blank" rel="noreferrer">
                    noc_state_board_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>RECOGNITION CERTIFICATE</td>
                <td>
                  <a href={pdf9} target="_blank" rel="noreferrer">
                    rocognition_certificate_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>BUILDING SAFETY CERTIFICATE</td>
                <td>
                  <a href={pdf5} target="_blank" rel="noreferrer">
                    building_safety_certificate_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR
                  AFFILIATION/UPGRADATION/EXTENSION{" "}
                </td>
                <td>
                  <a href={pdf10} target="_blank" rel="noreferrer">
                    deo_certificate_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>FIRE SAFETY CERTIFICATE</td>
                <td>
                  <a href={pdf6} target="_blank" rel="noreferrer">
                    fire_safety_certificate_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>WATER, HEALTH AND SANITATION CERTIFICATE</td>
                <td>
                  <a href={pdf7} target="_blank" rel="noreferrer">
                    health&Sanitation_certificate_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>School Fee Structure</td>
                <td>
                  <a href={pdf8} target="_blank" rel="noreferrer">
                    fee_structure_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>ANNUAL ACADEMIC CALENDAR</td>
                <td>
                  <a href={pdf11} target="_blank" rel="noreferrer">
                    annual_academic_calender_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>LIST OF SCHOOL MANAGEMENT COMMITTEE</td>
                <td>
                  <a href={pdf12} target="_blank" rel="noreferrer">
                    smc_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>LIST OF PARENTS TEACHERS ASSOCIATION MEMBERS</td>
                <td>
                  <a href={pdf13} target="_blank" rel="noreferrer">
                    pta_smsips
                  </a>
                </td>
              </tr>
              <tr>
                <td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION</td>
                <td>
                  <a href={pdf14} target="_blank" rel="noreferrer">
                    X_board_result_smsips
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
              <strong>Email ID:</strong> connect@smsips.com
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
