import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.content}>
        <h1>Find the perfect place</h1>
        <p className={s.searchText}>
          Search the largest selection of luxury high-rice
          apartments,multi-family homes, and luxury homes.
        </p>
        <form action="" className={s.search}>
          <div>
            <input type="text" placeholder="Enter Key" />
          </div>
          <div className={s.radio}>
            <input type="radio" checked />
            <label htmlFor="">Buy</label>
            <input type="radio" />
            <label htmlFor="">Rent</label>
            <button type="submit">
              <AiOutlineSearch className={s.icon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
