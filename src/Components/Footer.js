import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-scroll";
import logo from "../assets/Bitmaplogo.png";
const Footer = ({
  scrollToServices,
  scrollToAbout,
  scrollToBlogs,
  scrollToContact,
}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getSettings = async () => {
      try {
        const response = await axios.get(
          "http://3.7.81.243:3253/api/settings/fetch-frontend-details"
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSettings();
  }, []);
  return (
    <div className="footer_content">
      <div className="footer">
        <div className="footer-description">
          <p className="desciption">
            Tagline will go here. Lorem ipsum d oler sit amet…
          </p>
          <h2>{data.inquiry_mail}</h2>
        </div>
        <div className="footer-description">
          <h2>Address:</h2>
          <p className="desciption">{data.address}</p>
        </div>
        <div className="footer-description">
          <h2>Contact Us: </h2>
          <p className="desciption">{data.contact_no}</p>
        </div>
      </div>
      <div className="footer_link">
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
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="header_btn"
            onClick={scrollToContact}
          >
            Contact Us
          </Link>
        </div>
        <p>￼© 2022. All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
