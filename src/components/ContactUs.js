import React from "react";

import officeImg from "../images/office_vector1.jpg";
import factoryImg from "../images/factory_vector.jpg";

import styles from "./blocks.module.css";

function ContactUs() {
  const officeMap =
    "https://www.google.com/maps/dir/?api=1&destination=Puri+Business+Hub,+Puri+High+Street,+Real+Estate+Road,+Sector+81,+Faridabad,+Haryana&travelmode=driving&dir_action=navigate";
  const factoryMap =
    "https://www.google.com/maps/dir/?api=1&destination=28.367654, 77.252303&travelmode=driving&waypoints=28.366681,%2077.257544&dir_action=navigate";

  return (
    <div>
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
          <form className={styles.msgformclass}>
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
      <div className={styles.locations}>
        <a href={officeMap} target="_blank" rel="noopener noreferrer">
          <div className={styles.office_div}>
            <img src={officeImg} alt="" />
            <h2>Office</h2>
          </div>
        </a>
        <a href={factoryMap} target="_blank" rel="noopener noreferrer">
          <div className={styles.factory_div}>
            <img src={factoryImg} alt="" />
            <h2>Factory</h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
