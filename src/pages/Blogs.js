import React, { useEffect, useState } from "react";
import axios from "axios";
import userprofile from "../assets/user-profie.png";
import viewAllBlogs from "../assets/Path.png";

const testimonials = [
  {
    id: "1",
    image: userprofile,
    name: "Josh Brollins",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
  },
  {
    id: "2",
    image: userprofile,
    name: "Josh Brollins",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
  },
];

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://3.7.81.243:3253/api/blog/");
        setBlog(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const blogsToShow = showAll ? blog : blog.slice(0, 3);

  return (
    <div className="blogs">
      <div className="blogs_header">
        <h1>Testimonial</h1>
        <div className="testimonial_container">
          {testimonials.map((item) => (
            <div className="testimonial_content" key={item.id}>
              <div className="testimonial">
                <img
                  src={item.image}
                  alt="banner"
                  className="profile"
                  height={35}
                />
                <h2>{item.name}</h2>
              </div>
              <p className="desciption">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="blog_second_content">
        <div className="blog_view_header">
          <h1>Blogs</h1>
          <button className="viewblog" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All"}
            <img
              src={viewAllBlogs}
              alt="arrow"
              className="profile"
              height={10}
            />
          </button>
        </div>
        <div className="blogs_content">
          {blogsToShow.map((item, index) => {
            const date = new Date(item.createdAt);

            const formattedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            return (
              <div className="blog_container" key={item.id || index}>
                <img src={item.image_url} alt="banner" height={100} />
                <h2>{item.name}</h2>
                <p className="desciption">
                  {formattedDate} by {item.writer_name}
                </p>
                <p className="desciption">{item.short_description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
