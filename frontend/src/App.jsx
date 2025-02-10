import { fairyDustCursor } from "./Lib/Cursor.js";
import Footer from "./components/includes/Footer.jsx";
import Navbar from "./components/includes/Navbar.jsx";
import { useEffect } from "react";


import { HomePage } from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";

import { ToastContainer } from "react-toastify";
import NotFound from "./components/errors/NotFound.jsx";
import Req from "./components/report/Req.jsx";
import Faq from "./pages/Faq.jsx";
import Vision from "./pages/Vision.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import ParentRegister from "./pages/ParentRegister.jsx";
import NurseryFees from "./pages/NurseryFees.jsx";
import PrimaryFees from "./pages/PrimaryFees.jsx";
import Login from "./pages/Login.jsx";
import JoinNursery from "./pages/JoinNursery.jsx";
import Admin from "./pages/Admin.jsx";


const App = () => {

  // initialize cursor after components rendered
  useEffect(() => {
    new fairyDustCursor();
  }, []);


  return (
    <>
    <Navbar/>
    <ToastContainer position="top-right" autoClose={3000} />
    
    <Routes>
        {/* Pages for all people  */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/req" element={<Req />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/vision" element={<Vision />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/privacy-policy" element={<Privacy />}></Route>
        <Route path="/parent-register" element={<ParentRegister />}></Route>
        <Route path="/nursery-fees" element={<NurseryFees />}></Route>
        <Route path="/primary-fees" element={<PrimaryFees />}></Route>
        <Route path="/nursery-join" element={<JoinNursery />}></Route>


        {/* Authentication routes  */}
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>


        <Route path="*" element={<NotFound />}></Route>
    </Routes>

    <Footer/>
    </>
  )
}

export default App