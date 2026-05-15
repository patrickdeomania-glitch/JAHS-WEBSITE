import React from 'react';

const SideBar = ({ activePage, setActivePage }) => {
  const menu = [
    { name: 'Home', icon: 'bi-house' },
    { name: 'Blog', icon: 'bi-journal-text' },
    { name: 'Events', icon: 'bi-calendar-event' },
    { name: 'Personnel', icon: 'bi-people' }, 
    { name: 'Locations', icon: 'bi-geo-alt' },
    { name: 'Partnership', icon: 'bi-hand-thumbs-up' },
    { name: 'About Us', icon: 'bi-info-circle' },
  ];
  const handleNavClick = (e, pageName) => {
    e.preventDefault();
    setActivePage(pageName);
  };

  return (
    <div className="sidebar-container">
      {/* LOGO AND TEXT SECTION */}
   {/* LOGO AND TEXT SECTION */}
<div 
  className="d-flex align-items-center justify-content-center pt-4 pb-4 border-bottom" 
  style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'transparent' }}
>
  <img 
    src="/logo.png" 
    alt="JAHS Logo" 
    style={{ 
      height: '45px', // Slightly adjusted for balance
      width: 'auto', 
      backgroundColor: 'transparent' 
    }} 
    className="me-3" 
  />
  <h2 
    className="mb-0 text-white" 
    style={{ 
      /* CHOOSE ONE: 'Montserrat', 'Space Grotesk', 'IBM Plex Sans', or 'Nexa Slab' */
      fontFamily: "'Montserrat', serif", 
      fontWeight: '385', 
      letterSpacing: '2px', // Increased for a more "Logo" feel
      fontSize: '2.1rem',
      textTransform: 'uppercase' // Optional: Makes the logo text feel more "official"
    }}
  >
    JAHS
  </h2>
</div>
      <ul className="nav nav-pills flex-column pt-2">
        {menu.map((item) => (
          <li className="nav-item" key={item.name}>
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, item.name)}
              className={`nav-link d-flex align-items-center py-3 ${activePage === item.name ? 'active' : ''}`}
              style={{ transition: 'all 0.3s ease' }}
            >
              <i className={`bi ${item.icon} me-3 fs-5`}></i>
              <span className="fw-medium">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;