import Hero from "../components/home/Hero";
import Announcements from "../components/home/Announcements"
import WhyChoose from "../components/home/Why-choose";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import Youtube from "../components/home/Youtube";
import Contact from "../components/home/Contact";
import Map from "../components/home/Map";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// styles 
import "../styles/Index.css";

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      if (location.hash) {
        const sectionId = location.hash.replace("#", ""); // Remove #
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
          setTimeout(() => {
            sectionElement.scrollIntoView({ behavior: "smooth" });
          }, 100); // Delay to allow rendering
        }
      }
    };

    // Send a request to increment rootRequests
    fetch("http://localhost:3000/", { method: "GET" })
      .catch((error) => console.error("Error sending request:", error));

    // Run the scroll function once when the component mounts
    handleScroll();
  }, [location.key, location.hash]); // `location.key` changes on every new route ent

  return (
    <div>

        <Hero />
        <Announcements />
        <WhyChoose /> 
        <Stats />
        <Features />
        <Youtube />
        <Contact />
         <Map />

    </div>
  )
}
