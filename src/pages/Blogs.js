// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import userprofile from "../assets/user-profie.png";
// import viewAllBlogs from "../assets/Path.png";


// const testimonial = [
//     {
//         id: "1",
//         image: userprofile,
//         name: "Josh Brollins",
//         description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"
//     },
//     {
//         id: "2",
//         image: userprofile,
//         name: "Josh Brollins",
//         description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"
//     }
// ];

// const Blogs = () => {
//     const [blog, setBlog] = useState([]);
//     const [showAll, setShowAll] = useState(false);

//     useEffect(() => {
//         axios.get('http://3.7.81.243:3253/api/blog/')
//             .then(response => {
//                 console.log('API response data:', response.data.data);
//                 setBlog(response.data.data);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const blogsToShow = showAll ? blog : blog.slice(0, 3);

//     const isoDateString = '2022-11-18T06:21:24.000Z';
//     const date = new Date(isoDateString);
    
//     const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//     console.log(formattedDate); 
    
//     return (
//         <div className='blogs'>
//             <div className="our_process">
//                 <h1>Testimonial</h1>
//                 <div className="testimonial_container">
//                     {testimonial.map((item) => (
                        
//                         <div className="testimonial_content" key={item.id}>
//                             <div className="testimonial">
//                                 <img src={item.image} alt="banner" className="profile" height={35} />
//                                 <h3>{item.name}</h3>
//                             </div>
//                             <p>{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="our_process">
//                 <div className="blog">
//                     <h1>Blogs</h1>
//                     <button className="viewblog" onClick={() => setShowAll(!showAll)}>
//                         {showAll ? 'Show Less' : 'View All'}
//                         <img src={viewAllBlogs} alt="arrow" className="profile" height={10} />
//                     </button>
//                 </div>
//                 <div className="blogs_content">
//                     {blogsToShow.map((item, index) => {
//                          const date = new Date(isoDateString);
    
//                          const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                        
//                         return (
//                             <div className="blog_container" key={item.id || index}>
                          
//                                 <img src={item.image_url} alt="banner" />
//                                 <h3>{item.name}</h3>
//                                 <p>{formattedDate} by {item.writer_name}</p>
                            
//                             <p>{item.short_description}</p>
//                         </div>
//                         )
//                     }
                        
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Blogs;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userprofile from "../assets/user-profie.png";
import vi