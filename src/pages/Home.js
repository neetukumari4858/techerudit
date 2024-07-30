
import React, { useRef } from 'react';
import { Header } from "../Components";
import banner from "../assets/banner.png";
import { About, Services, Blogs, Contact } from '../pages';
import { Footer } from '../Components/index';
const Home = () => {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div className="home_container">
      <Header 
        scrollToServices={() => servicesRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToBlogs={() => blogsRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
      />
        <div className="content_container">
          <div className="content">
            <div>
              <h1>HOW MUCH </h1>
              <h1>COULD YOU SAVE? </h1>
            </div>
            <div>
              <p className="desciption">
                Answer the questions below to get a fixed price quotation for us
                to take your accountancy hassles away from you.
              </p>
            </div>
            <div className="turnover_cotent">
              <p className="turnover_decs">
                Is your turnover expected to be more than £85k?
              </p>
              <div className="turnover_btn_container">
                <button className="turnover_btn">yes</button>
                <button className="turnover_btn">No</button>
              </div>
            </div>
            <p className="desciption">Takes less than 30 seconds</p>
          </div>
          <div className="banner_container">
            <img src={banner} alt="banner" className="banner" />
          </div>
        </div>
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={blogsRef}>
        <Blogs />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer scrollToServices={() => servicesRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToBlogs={() => blogsRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}/>
    </>
  );
};

export default Home;
