import "../../styles/Calendar.css";

export const Calendar = () => {
  return (
    <div>
      {/* <!-- Calendar --> */}
      <div className="col-md-12">
        <h3 style={{ textAlign: "center" }}>Event Management</h3>
        <div className="card">
          <div className="calendar">
            <div className="header">
              <button id="prevBtn">
                <i className="fa-solid fa-left-long"></i>
              </button>

              <div className="monthYear" id="monthYear"></div>

              <button id="nextBtn">
                <i className="fa-solid fa-right-long"></i>
              </button>
            </div>

            <div className="days">
              <div className="day">Mon</div>
              <div className="day">Tue</div>
              <div className="day">Wed</div>
              <div className="day">Thur</div>
              <div className="day">Fri</div>
              <div className="day">Sat</div>
              <div className="day">Sun</div>
            </div>

            <div className="dates" id="dates"></div>
          </div>

          <div className="events">
            <h2>Events</h2>
            <div className="info-event">
              <h3 className="current-day"></h3>
              <p className="current-date"></p>
              <button className="add-event" id="openPopup">
                + Add Event
              </button>
            </div>
            <div className="overlay" id="overlay"></div>

            <div className="popup" id="popup">
              <div className="popup-header">
                <h2>Add Event</h2>
                <button id="closePopup" className="close-btn">
                  &times;
                </button>
              </div>
              <div className="popup-content">
                <form id="eventForm">
                  <div className="form-group">
                    <label htmlFor="eventTitle">Event Title</label>
                    <input
                      type="text"
                      id="eventTitle"
                      placeholder="Enter event title"
                      required
                      className="input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDescription">Event Description</label>
                    <textarea
                      id="eventDescription"
                      placeholder="Enter event description"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                      type="date"
                      id="startDate"
                      required
                      disabled
                      className="input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input
                      type="date"
                      id="endDate"
                      required
                      className="input"
                    />
                  </div>
                  <div className="form-actions">
                    <button type="button" id="cancelButton" className="cancel-btn">
                      Cancel
                    </button>
                    <button type="submit" id="saveButton" className="save-btn">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="events-container">
              {/* <!--Events will be added here --> */}
            </div>
            {/* <script src="/js/calendar.js"></script> */}
          </div>
        </div>
      </div>
    </div>
  );
};
