import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import { BrowserRouter } from "react-router-dom";

function HomeCards() {
  return (
    <>
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://img.freepik.com/free-photo/rural-life-lifestyle-growing-rabbits_23-2149232292.jpg?w=1380&t=st=1705918044~exp=1705918644~hmac=c26bd1d423ba554eca0be54df41a9b2589b0481944cd91bd7be2a5b37da61671" alt="" />
            </figure>
            <div className="article-body">
              <h2>Safety and Devotion</h2>
              <p>
                Keep your pets in peak health with Pet-Care's thorough
                check-ups. Our skilled veterinarians provide comprehensive
                examinations, vaccinations, and preventive care, ensuring your
                furry friends stay happy and healthy.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://img.freepik.com/free-photo/low-section-woman-standing-green-grass-with-her-tabby-cat_23-2148045682.jpg?w=1380&t=st=1705917992~exp=1705918592~hmac=397732d4526dd09a7b049a651e3a8746deeb1e909c21efdc920c95f7b0c61fe6" alt="" />
            </figure>
            <div className="article-body">
              <h2>Thorough Examination Process</h2>
              <p>
                Address your pet's health concerns effectively with Pet-Care's
                specialized treatments. Our experienced team uses advanced
                diagnostics to create targeted treatment plans, whether managing
                chronic conditions or addressing acute illnesses.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" alt="" />
            </figure>
            <div className="article-body">
              <h2>Fun Time Included!</h2>
              <p>
                Treat your pets to a spa day at Pet-Care with our professional
                grooming services. From baths and haircuts to nail trims and ear
                cleaning, our skilled groomers ensure your pets look and feel
                their best, leaving them refreshed and adorable.
              </p>
            </div>
          </div>
        </article>
      </section>

      <div>
        <br />
      </div>
      <hr />
      <div>
        <br />
      </div>
      <div className="booking-button">
        <h1>
          Feel Ready To Give Your Pet The Best Experience?
          {/* <MDBBadge className="ms-2">NEW</MDBBadge> */}
        </h1>
        <hr/>
        <a href="/contact">
        <button className="btn-raised">Book With Us Today!</button>
        </a>
      </div>
    </>
  );
}

export default HomeCards;
