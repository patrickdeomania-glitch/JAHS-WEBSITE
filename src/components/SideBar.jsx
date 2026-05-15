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
    <div className="sidebar-container shadow-lg">
      {/* BRANDING SECTION */}
      <div 
        className="d-flex flex-column align-items-center justify-content-center pt-5 pb-4 border-bottom" 
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <img 
          src="/Jahs.jpg" 
          alt="JAHS Logo" 
          style={{ 
            height: '60px', 
            width: '60px', 
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '15px'
          }} 
        />
        <h2 
          className="mb-0 text-white" 
          style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontWeight: '600', 
            letterSpacing: '3px', 
            fontSize: '1.8rem',
            textTransform: 'uppercase'
          }}
        >
          JAHS
        </h2>
      </div>

      {/* NAVIGATION */}
      <ul className="nav nav-pills flex-column pt-3 px-2">
        {menu.map((item) => (
          <li className="nav-item" key={item.name}>
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, item.name)}
              className={`nav-link d-flex align-items-center py-3 px-4 mb-1 rounded-3 ${activePage === item.name ? 'active bg-primary' : 'text-white-50'}`}
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