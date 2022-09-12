import React from "react";

import s from "./Best.module.css";
import Apt1 from "../../assets/apt1.jpeg";
import Apt2 from "../../assets/apt2.jpeg";
import Apt3 from "../../assets/apt3.jpeg";

const Best = () => {
  return (
    <div className={s.best}>
      <h1>Find Best Rated Properties</h1>
      <div>
        <p>
          <span className={s.bold}>All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className={s.container}>
        <img src={Apt1} alt="/" />
        <img src={Apt2} alt="/" />
        <img src={Apt3} alt="/" />
      </div>
      <button className={s.btn}>View All</button>
    </div>
  );
};

export default Best;
