import React from "react";

import waterAbout from "../images/water_about.jpg";

import styles from "./blocks.module.css";

function AboutUs() {
  return (
    <div>
      <div class={styles.about_div}>
        <div class={styles.about_top_div}>
          <h1>About Exsys Components</h1>
          <h2>Our Background</h2>
        </div>
        <div class={styles.about_text_div}>
          <p>
            Exsys Components is a leading manufacturer and trader of water
            treatment components. Our products are used in a wide variety of
            applications, including water filtration, water softening, waste
            water treatment, pharmaceutical manufacturing, and industrial boiler
            systems.
          </p>
          <p>
            We are committed to providing our customers with high-quality
            products that meet their specific needs. Our vessels are made from
            the highest-grade materials and are rigorously tested to ensure
            their durability and performance. We also offer a wide range of
            mechanical control valves to ensure that your system is properly
            controlled.
          </p>
          <p>
            In addition to our high-quality products, we also offer a wide range
            of services, including:
          </p>
          <ul>
            <li>Custom design and engineering</li>
            <li>Project management</li>
            <li>Installation and commissioning</li>
            <li>On-site training</li>
          </ul>
          <p>
            We are proud to be a part of the water treatment industry and are
            committed to providing our customers with the best possible products
            and services. We believe that clean water is essential for a healthy
            and sustainable future, and we are dedicated to helping our
            customers purify water for a better tomorrow.
          </p>
          <ul>
            <li>
              Exsys Components is a family-owned and operated business, founded
              in 2012.
            </li>
            <li>
              The company is headquartered in Faridabad, India, and has a team
              of experienced engineers and technicians.
            </li>
            <li>
              Exsys Components is committed to social responsibility, and
              donates a portion of its profits to different type of charities.
            </li>
            <li>
              The company's products are backed by a satisfaction guarantee.
            </li>
          </ul>
        </div>
      </div>

      <img src={waterAbout} alt="" className={styles.water_about} />
    </div>
  );
}

export default AboutUs;
