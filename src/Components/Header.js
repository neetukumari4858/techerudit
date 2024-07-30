import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/Bitmaplogo.png";

const Header = ({
  scrollToServices,
  scrollToAbout,
  scrollToBlogs,
  scrollToContact,
}) => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="btn_container">
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="header_btn"
          onClick={scrollToServices}
        >
          Service
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="header_btn"
          onClick={scrollToAbout}
        >
          About Us
        </Link>

        <Link
          to="blogs"
          smooth={true}
          duration={500}
          className="header_btn"
          onClick={scrollToBlogs}
        >
          Blogs
        </Link>
        <button
          to="contact"
          smooth={true}
          duration={500}
          onClick={scrollToContact}
          className="contact-btn"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Header;
