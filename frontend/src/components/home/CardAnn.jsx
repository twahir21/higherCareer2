import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export const CardAnn = ({ tag, date, month, title, description, timeAgo}) => {

  // Dynamically assign a class based on the tag
  const className =
  tag === "Event" ? "event" :
  tag === "Academic" ? "academic" : "";
  
  return (
    <div className={`announcement-card ${className}`}>
      <div className={`card-tag ${className}`}>{tag}</div>
      <div className="card-date">
        <span className="day">{date}</span>
        <span className="month">{month}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-meta">
        <span className="time">
          <FontAwesomeIcon icon={faClock} /> {timeAgo}
        </span>
      </div>
    </div>
  );
};

// **PropTypes Validation**
CardAnn.propTypes = {
  tag: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  className: PropTypes.string
};

// **Default Props (Optional)**
CardAnn.defaultProps = {
  className: ""
};
