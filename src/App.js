import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Newsrooms from "./pages/Newsrooms";
import Room from "./pages/Room";
import Blogs from "./pages/Blogs";
import ViewBlog from "./pages/ViewBlog";
import Solutions from "./pages/Solutions";
import Prodcuts from "./pages/Prodcuts";
import { Routes, Route } from 'react-router-dom'
import Documentaion from "./pages/Documentaion";
import Career from "./pages/Career";
import About from "./pages/About";
import CareerFrom from "./pages/CareerFrom";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
    khaled
      <Main />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/room" element={<Room />} />
        <Route path="/newsrooms" element={<Newsrooms />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/viewBlog" element={<ViewBlog />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/prodcuts" element={<Prodcuts />} />
        <Route path="/documentaion" element={<Documentaion />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<CareerFrom />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
