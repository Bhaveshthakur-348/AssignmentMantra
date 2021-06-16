import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon1"
          src="https://i.pinimg.com/originals/da/81/9b/da819b1c3040075c535efb2dde00d914.jpg"
          alt=""
        />
      </Link>

      <Link to="/Contact">
        <img
          className="header__icon2"
          src="https://thumbs.dreamstime.com/b/black-contact-us-icon-logo-call-contact-us-contacts-email-message-black-contact-us-icon-logo-call-contact-us-contacts-email-130941121.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Header;
