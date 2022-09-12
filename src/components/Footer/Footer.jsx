import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.social}>
        <FaFacebook className={s.icon} />
        <FaInstagram className={s.icon} />
        <FaTwitter className={s.icon} />
        <FaGithub className={s.icon} />
      </div>
      <div className={s.container}>
        <div className={s.col}>
          <h3>About</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className={s.col}>
          <h3>Company</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className={s.col}>
          <h3>Legal</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className={s.col}>
          <h3>Information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
