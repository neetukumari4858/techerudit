import { Routes, Route } from "react-router-dom";
import { About, Blogs, Contact, Home, Services } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
