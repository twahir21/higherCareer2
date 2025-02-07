import { CardAnn } from "./CardAnn";
const Announcements = () => {
  const announcementsData = [
    {
      tag: "Important",
      date: "15",
      month: "Mar",
      title: "New Semester Registration Open",
      description: "Registration for the new semester is now open. All students must complete their registration by March 30th.",
      timeAgo: "2 days ago",
      className: "important"
    },
    {
      tag: "Event",
      date: "18",
      month: "Mar",
      title: "Annual Sports Day",
      description: "Join us for our annual sports day celebration. Various competitions and exciting prizes to be won!",
      timeAgo: "1 day ago",
      className: "event"
    },
    {
      tag: "Academic",
      date: "20",
      month: "Mar",
      title: "Mid-Term Examination Schedule",
      description: "The mid-term examination schedule has been released. Check your exam dates and prepare accordingly.",
      timeAgo: "5 hours ago",
      className: "academic"
    }
  ];

  return (
    <section className="announcements-section">
      <div className="announcements-container">
        <div className="section-header">
          <h2>Latest Updates</h2>
          <div className="header-line"></div>
        </div>

        <div className="announcements-grid">
          {announcementsData.map((item, index) => (
            <CardAnn key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
