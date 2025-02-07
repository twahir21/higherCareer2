import { fairyDustCursor } from "./Lib/Cursor.js";
import Footer from "./components/includes/Footer.jsx";
import Navbar from "./components/includes/Navbar.jsx";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage.jsx";

import { ToastContainer } from "react-toastify";


const App = () => {

  // initialize cursor after components rendered
  useEffect(() => {
    new fairyDustCursor();
  }, []);


  return (
    <>
    <Navbar/>
    <ToastContainer position="top-right" autoClose={3000} />
    
    <HomePage />

    <Footer/>
    </>
  )
}

export default App