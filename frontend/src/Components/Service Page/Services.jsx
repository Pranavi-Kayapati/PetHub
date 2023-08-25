import React, { useEffect } from "react";
import "./services.css"; // Import the CSS file
import ScrollReveal from "scrollreveal"; // Import ScrollReveal library
import { Link } from "react-router-dom";
import petsImage from "./images/pets.png";
function Services() {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal("#s1", {
      delay: 75,
      duration: 1500,
      opacity: 0,
      distance: "50%",
      origin: "left",
      reset: true,
    });

    sr.reveal("#s2", {
      delay: 125,
      duration: 1500,
      opacity: 0,
      distance: "50%",
      origin: "right",
      reset: true,
    });

    sr.reveal("#s3", {
      delay: 175,
      duration: 1500,
      opacity: 0,
      distance: "50%",
      origin: "left",
      reset: true,
    });
  }, []);

  return (
    <div className="services-main-container">
      {/* Header */}
      <div className="banner">
        <div className="banner-content">
          <h2>Our Pawesome Services</h2>
          <p>
            From cozy lodging and expert training to heartwarming adoptions,
            we're here to cater to all your pet's needs. Explore our range of
            services designed with love, care, and wagging tails in mind
          </p>
        </div>
      </div>
      <div>
        <div className="services-container">
          {/* Main Content */}
          {/* Section 1 */}
          <section className="section" id="s1">
            <div className="img1"></div>
            <article>
              <h2>Boarding and Lodging</h2>
              <p>
                Our Boarding and Lodging service offers a secure, comfortable
                environment for pets when their owners are away. With various
                lodging options, including private suites and communal spaces,
                we cater to individual preferences. Our attentive staff ensures
                cleanliness and engages pets with activities. Your furry friends
                will receive the care they deserve in our home away from home.
              </p>
              <button className="boarding">Book Pets Boarding</button>
            </article>
          </section>

          <section className="section" id="s2">
            <article>
              <h2>Pet Adoption: Find Your Furry Companion</h2>
              <p>
                Welcome to our Pet Adoption Center, where hearts and paws
                connect. Discover a diverse range of lovable animals eagerly
                waiting to join your family. Our adoption process is designed to
                ensure the perfect match, with each pet fully vaccinated and
                vetted. Give a forever home and experience the joy of adoption
                today..
              </p>
              <button className="adopt">
                <Link to="/petPage">Adopt A Pet</Link>
              </button>
            </article>
            <div className="img2"></div>
          </section>
          {/* End Section 2 */}

          {/* Section 3 */}
          <section className="section" id="s3">
            <div className="img3"></div>
            <article>
              <h2> Pet Training: Nurturing Bonds, Shaping Behavior</h2>
              <p>
                Experience the magic of Companion's Charm Pet Training, where we
                craft well-mannered pets and foster unbreakable human-animal
                bonds. Our expert-led classes and hands-on workshops empower
                your pets with good behavior and essential commands. Join us to
                embark on a transformative journey of mutual understanding and
                lifelong companionship.
              </p>
              <button className="training">Book Slot</button>
            </article>
          </section>
          {/* End Section 3 */}
          {/* Footer */}
          <footer></footer>
        </div>
      </div>
    </div>
  );
}

export default Services;
