import React, { useState } from 'react';

const SideBar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <style>
        {`
          /* 1. Desktop View (Normal always-visible sidebar) */
          @media (min-width: 768px) {
            .responsive-sidebar {
              width: 280px !important;
              min-width: 280px !important;
              min-height: 100vh;
              background-color: #212529 !important;
              position: sticky !important;
              top: 0;
              display: flex !important;
            }
          }

          /* 2. Mobile View (Hidden off-screen until burger is clicked) */
          @media (max-width: 767.98px) {
            .responsive-sidebar {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              width: 280px !important;
              height: 100vh !important;
              background-color: #212529 !important;
              z-index: 1045 !important;
              transform: translateX(-100%) !important;
              transition: transform 0.3s ease-in-out !important;
              overflow-y: auto;
            }
            .responsive-sidebar.open {
              transform: translateX(0) !important;
            }
          }
        `}
      </style>

      {/* Mobile Burger Button */}
      <button
        className="btn btn-dark d-md-none position-fixed top-0 start-0 m-3"
        onClick={() => setIsOpen(!isOpen)}
        style={{ zIndex: 1050 }}
      >
        <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'} fs-4`}></i>
      </button>

      {/* Mobile Dark Overlay Backdrop */}
      {isOpen && (
        <div
          className="d-md-none position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <div className={`responsive-sidebar ${isOpen ? 'open' : ''} d-flex flex-column`}>
        {/* LOGO AND TEXT SECTION */}
        <div
          className="d-flex align-items-center justify-content-center pt-4 pb-4 border-bottom mt-5 mt-md-0"
          style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'transparent' }}
        >
          <img
            src="/logo.png"
            alt="JAHS Logo"
            style={{
              height: '45px',
              width: 'auto',
              backgroundColor: 'transparent'
            }}
            className="me-3"
          />
          <h2
            className="mb-0 text-white"
            style={{
              fontFamily: "'Montserrat', serif",
              fontWeight: '385',
              letterSpacing: '2px',
              fontSize: '2.1rem',
              textTransform: 'uppercase'
            }}
          >
            JAHS
          </h2>
        </div>
        
        {/* NAVIGATION LINKS */}
        <ul className="nav nav-pills flex-column pt-2 mb-auto">
          {menu.map((item) => (
            <li className="nav-item" key={item.name}>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, item.name)}
                className={`nav-link d-flex align-items-center py-3 ${activePage === item.name ? 'active' : ''}`}
                style={{ transition: 'all 0.3s ease', color: 'white' }}
              >
                <i className={`bi ${item.icon} me-3 fs-5`}></i>
                <span className="fw-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;