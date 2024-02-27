import React, { useState, useEffect } from 'react';

import WaterImg from "../images/water_home.jpg";
import I1 from "../images/slide_pic_2.jpg";
import I2 from "../images/slide_pic_1.png";
import I3 from "../images/slide_pic_3.png";
import ArrowBack from '../images/back.png';
import ArrowForward from '../images/right.png';

import styles from "./blocks.module.css";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [I1, I2, I3];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <div>
      <div className={styles.slider}>
        <img src={images[currentSlide]} className={styles.slideImage} alt="Slide" />
        <button onClick={nextSlide} className={styles.nextArrow}>❯</button>
        <button onClick={prevSlide} className={styles.prevArrow}>❮</button>
      </div>

      <div className={styles.contact}>
        <div class={styles.info}>
          <h1>Be in touch with us</h1>
          <p>
            <b>Office: </b>BH 506, Puri Business Hub, 81- High Street, Sector
            81, Faridabad- 121004
          </p>
          <p>
            <b>Works: </b>Plot No. 1, Khedi Enclave - Part 1, Ballabgarh - Sohna
            Road, Faridabad - 121004
          </p>
          <p>
            <b>Email: </b>exsyscomponents@gmail.com ; info@exsysgroup.com
          </p>
          <p>
            <b>Phone No.: </b>+91-9911117791 ; +91-8743951372
          </p>
        </div>

        <div className={styles.message}>
          <form
            action="https://formsubmit.co/exsyscomponents@gmail.com"
            method="post"
            name="MessageForm"
            className={styles.msgformclass}
          >
            <label for="name">
              <b>Name*</b>
            </label>
            <input type="text" name="name" id="name" placeholder="Enter Name" />

            <label for="email">
              <b>Email*</b>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />

            <label for="phonenumber">
              <b>Phone Number</b>
            </label>
            <input
              type="number"
              name="phone"
              id="pno"
              placeholder="Enter Phone Number"
            />

            <label for="address">
              <b>Address</b>
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Address"
            />

            <label for="subject">
              <b>Subject</b>
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter Subject"
            />

            <label for="message">
              <b>Leave us a message</b>
            </label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Type your message here..."
            />

            <button
              type="submit"
              name="sbmt_btn"
              id="sbmt_btn"
              value="Submit"
              className={styles.message_btn}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Blank Div */}
      <div className={styles.blank_div} />

      {/* Google Map */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1476.0718903864044!2d77.25219294321842!3d28.367604226463037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe221dca050053f09!2zMjjCsDIyJzAzLjciTiA3N8KwMTUnMDguNyJF!5e0!3m2!1sen!2sin!4v1676522229276!5m2!1sen!2sin"
        width="100%"
        height="500px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Timings */}
      <div className={styles.timings}>
        <h2>
          <b>Opening Hours</b>
        </h2>
        <p className={styles.timing_quote}>
          You are more than welcome to talk to us druing the working hours.
        </p>
        <p>Monday-Saturday: 9 a.m. - 6 p.m.</p>
        <p>Sunday Closed</p>
      </div>

      {/* About Us */}
      <div className={styles.about_us}>
        <h1>About Us</h1>
        <div className={styles.about_text}>
          <p>
            Exsys Components was established in the year 2012 for manufacturing
            and trading quality products related to water treatment industries.
            Our products are for various water filteration, water softening, RO
            plants, Effluent Treatment Plants (ETP), Sewage Treatment Plants
            (STP), rainwater harvesting, industrial boiler and such filteration
            systems.
          </p>
        </div>
      </div>

      <img src={WaterImg} className={styles.water_home} />
    </div>
  );
}

export default HomePage;
