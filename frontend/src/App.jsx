import { fairyDustCursor } from "./JavaScript/Lib/Cursor.js";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage.jsx";

const App = () => {

  // initialize cursor after components rendered
  useEffect(() => {
    new fairyDustCursor();
  }, []);


  return (
    <>
    <Navbar/>
    
    <HomePage />

    <Footer/>
    </>
  )
}

export default App