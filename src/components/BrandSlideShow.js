import React from "react";
import Slider from "react-infinite-logo-slider";
import styles from "./blocks.module.css";

import Exsys from "../images/exsys_tp.png";
import EXFLO from "../images/Logos/EXFLO.jpg";
import UKL from "../images/Logos/UKL.jpg";
import Initiative from "../images/Logos/initiative.png";
import Aster from "../images/Logos/aster.jpg";
import criPump from "../images/Logos/criPump.jpg";
import Pentair from "../images/Logos/pentair.png";
import Toray from "../images/Logos/Toray.png";
import Alfa from "../images/Logos/alfa.png";
import Engineering from "../images/Logos/initiativeEngineering.png";

function BrandSlideShow() {
  return (
    <div className={styles.brandSlider}>
      <div className={styles.headingContainer}>
        <h1 className={styles.brandHeading}>Channel Partners</h1>
      </div>
      <Slider
        width="300px"
        duration={40}
        pauseOnHover={false}
        blurBorders={false}
        blurBoderColor={"#fff"}
        // className={styles.brandSlideShow}
      >
        <Slider.Slide>
          <img src={Exsys} alt="Exsys" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={EXFLO} alt="EXFLO" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={Aster} alt="Aster" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={criPump} alt="CRI Pump" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={UKL} alt="UKL" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={Pentair} alt="Pentair" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={Toray} alt="Toray" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={Alfa} alt="Alfa" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={Initiative} alt="Initiative" className={styles.brandImg} />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Engineering}
            alt="Engineering"
            className={styles.brandImg}
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
}

export default BrandSlideShow;
