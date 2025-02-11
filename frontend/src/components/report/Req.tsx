import React, { useEffect, useState } from "react";
import "../../styles/Req.css";

const Req = () => {
  const [rootRequests, setRootRequests] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/req");
        const data = await response.json();
        
        setRootRequests(data.rootRequests);
      } catch (error) {
        console.error("Error fetching request data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to animate counting effect
  function animateCounter(id, target) {
    let count = 0;
    const step = Math.max(1, Math.ceil(target / 100)); // Ensure step is at least 1
    const counterElement = document.getElementById(id);

    if (!counterElement) return;

    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      counterElement.textContent = count.toString();
    }, 25);
  }

  // Run animation when values change
  useEffect(() => {
    animateCounter("rootCounter", rootRequests);
  }, [rootRequests]);

  return (
    <div className="req-body">
          <div className="req-container">
      <h1 className="req-h1">Express Server Request Tracker</h1>

      <div className="counter-box">
        <div className="counter-title">Requests to the Root Route (Home page)</div>
        <div id="rootCounter" className="counter-number">{rootRequests}</div>
      </div>

      <footer className="req-footer">
        <p><i>Built with ❤️ using Express.js by Twahir Sudy</i></p>
      </footer>
    </div>
    </div>
  );
};

export default Req;
