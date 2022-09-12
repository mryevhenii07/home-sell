import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

import s from "./NavBar.module.css";
const NavBar = () => {
  const [click, setClick] = useState(false);

  const handelClick = () => {
    setClick(!click);
  };
  return (
    <div className={s.navbar}>
      <div className={s.container}>
        <h1>
          <span>
            <BsFillHouseFill />
            Real
          </span>
          Estate
        </h1>
        <button className={s.btn}>Sign In</button>
        <ul className={click ? `${s.navMenu} ${s.active}` : `${s.navMenu}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className={s.hamburger} onClick={handelClick}>
          {click ? (
            <FaRegTimesCircle className={s.icon} />
          ) : (
            <HiOutlineMenuAlt4 className={s.icon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
