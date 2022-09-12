import React from "react";

import House1 from "../../assets/house1.jpg";
import Bed1 from "../../assets/bed1.jpg";
import Bed2 from "../../assets/bed2.jpg";
import Kitchen from "../../assets/kitchen.jpg";
import Bathroom from "../../assets/bath1.jpg";

import House2 from "../../assets/house2.jpg";
import Bed3 from "../../assets/bed1.jpg";
import Bed4 from "../../assets/bed4.jpg";
import LivingRoom from "../../assets/living-room.jpg";
import Bathroom2 from "../../assets/bath2.jpg";

import s from "./Featured.module.css";

const Featured = () => {
  return (
    <div className={s.featured}>
      <h1 className={s.featuredText}>Top Featured Listings</h1>
      <p className={s.featuredText}>
        Selected listings by City, State, & Zip based on views.
      </p>
      <div className={s.container}>
        <img
          src={House1}
          alt="img"
          className={`${s.spanThree} ${s.imgGridRowTwo}`}
        />
        <img src={Bed1} alt="img" />
        <img src={Bed2} alt="img" />
        <img src={Kitchen} alt="img" />
        <img src={Bathroom} alt="img" />
        <div className={`${s.spanThree} ${s.imgDetails}`}>
          <div className={s.top}>
            <h2>123 Acme st. Texas, TL</h2>
            <p>House for sale</p>
            <p className={s.price}> $2,322,000</p>
          </div>
          <div className={s.infoGrid}>
            <div>
              <div className={s.info}>
                <p className={s.bold}>Bedrooms:</p>
                <p>5</p>
              </div>
              <div className={s.info}>
                <p className={s.bold}>Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className={s.info}>
                <p className={s.bold}>Square Feet:</p>
                <p>8.167</p>
              </div>
              <div className={s.info}>
                <p className={s.bold}>Est Payment:</p>
                <p>$15,456</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${s.spanTwo} ${s.rightImgDetails}`}>
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas.Including media room
            workout facility, and build-in sauna.
          </p>
          <button className={s.btn}>View Listing</button>
        </div>
      </div>

      <div className={s.container}>
        <img className={s.orderTwo} src={House2} alt="img" />
        <img className={s.orderThree} src={Bed3} alt="img" />
        <img
          className={`${s.spanThree} ${s.imgGridRowTwo} ${s.orderOne}`}
          src={Bed4}
          alt="img"
        />
        <img className={s.orderFour} src={LivingRoom} alt="img" />
        <img className={s.orderFive} src={Bathroom2} alt="img" />

        <div className={`${s.spanTwo} ${s.rightImgDetails} ${s.orderSeven}`}>
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas.Including media room
            workout facility, and build-in sauna.
          </p>
          <button className={s.btn}>View Listing</button>
        </div>

        <div className={`${s.spanThree} ${s.imgDetails} ${s.orderSix}`}>
          <div className={s.top}>
            <h2>123 Acme st. Texas, TL</h2>
            <p>House for sale</p>
            <p className={s.price}> $2,322,000</p>
          </div>
          <div className={s.infoGrid}>
            <div>
              <div className={s.info}>
                <p className={s.bold}>Bedrooms:</p>
                <p>5</p>
              </div>
              <div className={s.info}>
                <p className={s.bold}>Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className={s.info}>
                <p className={s.bold}>Square Feet:</p>
                <p>8.167</p>
              </div>
              <div className={s.info}>
                <p className={s.bold}>Est Payment:</p>
                <p>$15,456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
