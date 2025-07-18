import React from 'react';


function Sidebar() {
  return (
    <div className="d-none d-md-flex flex-column justify-content-between vh-100 sidebar">

      <div>
        <img className="instalogo-text mb-4" src="/instgramtext.png" alt="Instagram Logo" />


        <p className="sidebar-item"><i className="bi bi-house-door-fill me-3"></i> come</p>
        <p className="sidebar-item"><i className="bi bi-search me-3"></i> Search</p>
        <p className="sidebar-item"><i className="bi bi-compass-fill me-3"></i> Explore</p>
        <p className="sidebar-item"><i className="bi bi-youtube me-3"></i> Reels</p>
        <p className="sidebar-item"><i className="bi bi-chat-dots-fill me-3"></i> Messages</p>
        <p className="sidebar-item"><i className="bi bi-heart me-3"></i> Notifications</p>
        <p className="sidebar-item"><i className="bi bi-plus-square me-3"></i> Create</p>
      </div>


      <div>
        <p className="sidebar-item"><i className="bi bi-person-circle me-3"></i> Profile</p>
        <p className="sidebar-item"><i className="bi bi-grid-3x3-gap me-3"></i> More</p>
      </div>
    </div>
  );
}

export default Sidebar;
