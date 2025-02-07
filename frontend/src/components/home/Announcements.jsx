import { useState, useEffect } from "react";
import { CardAnn } from "./CardAnn";
import axios from "axios";

import "../../styles/Loader.css"

const Announcements = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/events");
        setEvents(data);
      } catch (err) {
        setError("Error while fetching event data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="announcements-section">
      <div className="announcements-container">
        <div className="section-header">
          <h2>Latest Updates</h2>
          <div className="header-line"></div>
        </div>

        {loading ? (
          <div className="loader"></div>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <div className="announcements-grid">

            {events.length > 0 ?
            (
              events.map((item, index) => <CardAnn key={index} {...item} />)
            ) : (
              <p>No announcements available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Announcements;
