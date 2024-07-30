import aboutBanner from "../assets/about-banner.png";
import { OurProcess } from "./OurProcessData";
const About = () => {
  return (
    <div>
      <div className="about_container">
        <div className="about">
          <h1>About Us</h1>
          <p className="desciption">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
          <button className="about_btn">About Us</button>
        </div>
        <div>
          <img src={aboutBanner} alt="bannar" height={250} />
        </div>
      </div>
      <div className="our_process">
        <h1>Our Process</h1>
        <div className="process_step">
          {OurProcess.map((item) => {
            return (
              <div className="image_circle">
                <img src={item.image} alt="banner" height={250} />
                <div className="overlay_text">
                  <p>Step {item.id}</p>
                  <p>{item.data}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default About;
