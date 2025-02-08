import Hero from "../components/home/Hero";
import Announcements from "../components/home/Announcements"
import WhyChoose from "../components/home/Why-choose";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import Youtube from "../components/home/Youtube";
import Contact from "../components/home/Contact";
import Map from "../components/home/Map";

import { useEffect } from "react";

// styles 
import "../styles/Index.css";

export const HomePage = () => {
  useEffect(() => {
    // Send a request to increment rootRequests
    fetch("http://localhost:3000/", { method: "GET" })
      .catch((error) => console.error("Error sending request:", error));
  }, []);

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
