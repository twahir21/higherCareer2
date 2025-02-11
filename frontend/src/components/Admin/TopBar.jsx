import  { useState } from "react";
import ProfileDropdown from './ProfileDropdown.jsx'
import "../../styles/TopBar.css";

const TopBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="topbar">
      <div className="profile-section" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
      </div>
      {dropdownOpen && <ProfileDropdown />}
    </div>
  );
};

export default TopBar;
