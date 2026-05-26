import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// THE CRITICAL FIX: Import the bootstrap module directly to enable the auto-cycle
import * as bootstrap from 'bootstrap'; 
import './App.css';

import SideBar from './components/SideBar';

function App() {
  const [activePage, setActivePage] = useState('Home');
  const [isStreetView, setIsStreetView] = useState(false);
  const [timelineYear, setTimelineYear] = useState(2024);

  // AUTOMATED SLIDESHOW TRIGGER
  // This logic runs every time the user switches to the 'Events' page
  useEffect(() => {
    if (activePage === 'Events') {
      const carouselElList = document.querySelectorAll('.carousel');
      carouselElList.forEach(carouselEl => {
        const carousel = new bootstrap.Carousel(carouselEl, {
          interval: 3000, // Requirement: 3 seconds
          ride: 'carousel', // Requirement: Start automatically
          pause: false, // Requirement: Continuous (won't stop on hover)
          wrap: true // Requirement: Loop back to start
        });
        carousel.cycle(); // Force the animation to begin
      });
    }
  }, [activePage]);

  const getPartnersByYear = (year) => {
    const data = {
      2004: [{ name: "Emerson Network Power", projects: ["Rectifier-Battery Installation", "Load Migration"] }, { name: "Ericsson Phils", projects: ["2G Installation North Luzon"] }],
      2008: [{ name: "Emerson Network Power", projects: ["Rectifier-Battery Installation"] }, { name: "Ericsson-Digicel PNG", projects: ["MSC Load Migration", "2G-3G Installation"] }],
      2014: [{ name: "Emerson Network Power / Ericsson Phils", projects: ["Rectifier-Battery Installation", "MSC Load Migration", "IMS Project"] }, { name: "Nokia / ZTE", projects: ["2G-3G Installation"] }, { name: "Advancenet Technology Phils", projects: ["Project Support"] }],
      2018: [{ name: "Vertiv Phils / Ericsson Phils", projects: ["Rectifier-Battery Installation", "LTE/4G Installation"] }, { name: "Eltek Power Inc", projects: ["Infrastructure Support"] }],
      2023: [{ name: "Vertiv Phils. Inc / Ericsson Phils", projects: ["Rectifier-Battery Installation", "Rectifier-Inverter System"] }, { name: "Orissa Wicomm / Unity Infrastructure", projects: ["Data Center", "LTE-5G Installation"] }, { name: "AWS / AMTI", projects: ["Cloud Infrastructure Monitoring"] }],
      2024: [{ name: "Vertiv / Ericsson / PhilTower", projects: ["Rectifier-Battery Installation", "ATP-MW Installation"] }, { name: "Edgepoint Towers Inc / SMSGT", projects: ["Infrastructure Management"] }, { name: "Exicom Power Solutions", projects: ["Warehousing"] }],
      2025: [{ name: "Vertiv Phils. Inc / Ericsson Phils", projects: ["Rectifier-Battery Installation"] }, { name: "MIDC", projects: ["MW Installation"] }],
      2026: [{ name: "Globe Telecom.", projects: ["DC System Installation"] }]
    };
    return data[year] || [];
  };

  return (
  <div className="app-wrapper">
    <div className="d-flex w-100">
      
      {/* 1. Sidebar on the left */}
      <SideBar activePage={activePage} setActivePage={setActivePage} />

      {/* 2. Main content wrapper on the right */}
      <div className="flex-grow-1 w-100">
        
        {/* Put your actual <main> tag INSIDE this div */}
        <main className="main-content w-100">
          
          {/* HOME PAGE */}
          {activePage === 'Home' && (
             // ... the rest of your page code stays exactly the same
            <div className="container py-5">
              {/* HERO SECTION */}
              <div className="text-center mb-5 pb-4">
                <h1 className="display-2 fw-bold text-dark mb-2" style={{ fontFamily: "'Nexa Slab', serif", fontWeight: '700' }}>JAHS</h1>
                <h3 className="text-primary text-uppercase fw-bold mb-4" style={{ letterSpacing: '4px', fontSize: '1.2rem' }}>Electronics and Electrical Services</h3>
                <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
                  A premier technical solution provider for the telecommunications industry, specializing in DC power systems, network infrastructure, and nationwide logistics.
                </p>
                <div className="mt-4">
                  <span className="badge rounded-pill bg-light text-dark border px-3 py-2 me-2">Est. 2004</span>
                  <span className="badge rounded-pill bg-primary px-3 py-2 me-2">Certified Engineering</span>
                  <span className="badge rounded-pill bg-dark px-3 py-2">Nationwide Coverage</span>
                </div>
              </div>

              {/* CORE SERVICES */}
              <div className="row g-4 mb-5">
                {[
                  { title: "Warehousing & Logistics", icon: "bi-truck", desc: "Comprehensive logistics management and warehousing services." },
                  { title: "DC Power Systems", icon: "bi-lightning-charge-fill", desc: "Installation and commissioning of Rectifier and Inverter systems." },
                  { title: "Network Infrastructure", icon: "bi-reception-4", desc: "Installation of BTS, MW, BSC, MSC, RNC, and Wireless network servers." },
                  { title: "Engineering & Surveys", icon: "bi-pencil-square", desc: "Technical Site Surveys (TSS) and Radio Frequency Interference Testing." },
                  { title: "Upgrade & Modification", icon: "bi-gear-fill", desc: "RAN upgrades, transmission modifications, and equipment relocation." },
                  { title: "System Maintenance", icon: "bi-shield-check", desc: "Dedicated maintenance and technical support for telecom equipments." }
                ].map((svc, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="h-100 p-4 bg-white shadow-sm rounded-5 border-bottom border-primary border-3 transition-hover">
                      <i className={`bi ${svc.icon} text-primary fs-2 mb-3 d-block`}></i>
                      <h5 className="fw-bold">{svc.title}</h5>
                      <p className="small text-muted mb-0">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* MASTER LOGISTICS & INFRASTRUCTURE GALLERY */}
<div className="mb-5 mt-5">
  
  {/* --- SECTION 1: FLEET & TRANSPORT (log1 - log2) --- */}
  <div className="d-flex align-items-center mb-4">
    <div className="bg-dark p-3 rounded-4 me-3 shadow-sm">
      <i className="bi bi-truck-front-fill text-white fs-4"></i>
    </div>
    <div>
      <h3 className="fw-bolder text-dark mb-0" style={{ fontFamily: "'Nexa Slab', serif" }}>
        Supply Chain & Fleet Operations
      </h3>
      <p className="text-muted mb-0 small">Secure transport and staging for telecom infrastructure</p>
    </div>
  </div>

  <div className="row g-4 mb-5">
    {[1, 2].map((num) => (
      <div className="col-md-6" key={`fleet-${num}`}>
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">
          <div className="position-relative">
            <img 
              src={`/log${num}.png`} 
              className="w-100" 
              style={{ height: '300px', objectFit: 'cover' }} 
              alt={`JAHS Heavy Transport Unit ${num}`} 
            />
            <div className="position-absolute top-0 start-0 m-3">
              <span className="badge bg-dark bg-opacity-75 px-3 py-2 shadow border border-secondary">
                <i className="bi bi-geo-alt-fill text-danger me-2"></i> Active Dispatch
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* --- SECTION 2: STAGED INVENTORY (box1 - box5) --- */}
  <div className="d-flex align-items-center mb-3">
    <i className="bi bi-boxes text-primary me-2 fs-5"></i>
    <h5 className="fw-bold text-dark mb-0">Staged Asset Inventory</h5>
  </div>
  
  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 mb-5">
    {[1, 2, 3, 4, 5].map((num) => (
      <div className="col" key={`inventory-${num}`}>
        <div className="card border border-light shadow-sm rounded-4 overflow-hidden h-100 transition-hover">
          <img 
            src={`/box${num}.png`} 
            className="w-100" 
            style={{ height: '180px', objectFit: 'cover' }} 
            alt={`Secured Telecom Inventory ${num}`} 
          />
          <div className="card-footer bg-white border-top-0 text-center py-2">
            <small className="fw-bold text-muted" style={{ fontSize: '0.70rem', letterSpacing: '1px' }}>
              <i className="bi bi-upc-scan me-1"></i> SECURE BATCH-0{num}
            </small>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* --- SECTION 3: FACILITY OVERVIEW (war1 - war6) --- */}
  <div className="d-flex align-items-center mb-3">
    <i className="bi bi-building-gear text-primary me-2 fs-5"></i>
    <h5 className="fw-bold text-dark mb-0">Inside Our Facilities</h5>
  </div>

  <div className="row g-3">
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <div className="col-lg-4 col-md-6" key={`war-${num}`}>
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden transition-hover h-100">
          <img 
            src={`/war${num}.png`} 
            className="w-100" 
            style={{ height: '220px', objectFit: 'cover' }} 
            alt={`JAHS Operational Facility ${num}`} 
          />
          <div className="card-img-overlay d-flex align-items-end p-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}>
            <span className="text-white small fw-bold p-3">Facility View 0{num}</span>
          </div>
        </div>
      </div>
    ))}
  </div>

</div>

               {/* MAJOR PROJECTS SECTION */}
<div className="bg-dark text-white p-5 rounded-5 shadow-lg overflow-hidden position-relative">
  
  {/* ADJUSTED: Smaller, more subtle broadcast icon */}
  <div className="position-absolute top-0 end-0 opacity-25" 
       style={{ 
         fontSize: '4rem', 
         transform: 'translate(-20%, 20%)',
         color: 'rgba(255, 255, 255, 0.1)' 
       }}>
    <i className="bi bi-broadcast"></i>
  </div>

  <div className="row position-relative" style={{ zIndex: 1 }}>
    <div className="col-lg-12 mb-4">
      <h2 className="fw-bold text-primary" style={{ fontFamily: "'Nexa Slab', serif" }}>Some Major Projects</h2>
      <div className="bg-primary opacity-50" style={{ height: '3px', width: '60px' }}></div>
    </div>

                  {/* Highlights Column */}
                  <div className="col-lg-3">
                    <div className="d-flex flex-column gap-3">
                      <div className="p-3 bg-white bg-opacity-10 rounded-4 border-start border-primary border-4">
                        <h4 className="mb-0 fw-bold">600+ Sites</h4>
                        <p className="extra-small text-primary text-uppercase fw-bold mb-0">Globe Lithium Ion Phase 1-5</p>
                      </div>
                      <div className="p-3 bg-white bg-opacity-10 rounded-4 border-start border-primary border-4">
                        <h4 className="mb-0 fw-bold">250+ Sites</h4>
                        <p className="extra-small text-primary text-uppercase fw-bold mb-0">Smart LTE Rectifier Project</p>
                      </div>
                      <div className="p-3 bg-white bg-opacity-10 rounded-4 border-start border-primary border-4">
                        <h4 className="mb-0 fw-bold">40 Sites</h4>
                        <p className="extra-small text-primary text-uppercase fw-bold mb-0">ETPI R3, R4 Projects</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Lists - Text set to solid black */}
    <div className="col-lg-9 mt-4 mt-lg-0">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="p-4 h-100 bg-white rounded-4 shadow-sm border border-light">
            <h6 className="fw-bold text-primary mb-3 text-uppercase">Power & Data Centers</h6>
            <ul className="extra-small list-unstyled lh-lg mb-0 text-black">
              <li>• <strong>Globe Copenhagen 1,2,3:</strong> 120kW Rectifiers/Load Migration</li>
              <li>• <strong>Globe Cabanatuan IMS:</strong> 120kW Rectifier, 80kW Inverters</li>
              <li>• <strong>Globe Davao CLS:</strong> 120kW Rectifier, 80kW Inverters, 8 PDF Cabinets</li>
              <li>• <strong>Globe PDF Project:</strong> TFND, DAVID, GALACTUS 1&2, ZAP</li>
              <li>• <strong>AWS-Converge:</strong> Davao iCLS Project</li>
              <li>• <strong>Vertiv-Converge:</strong> Bauang La Union DC</li>
              <li>• <strong>Fusion Module 2000:</strong> Smart Small Data Center</li>
              <li>• <strong>Vertiv-Local:</strong> DCPDF Systems for Globe MSC (Nationwide)</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 h-100 bg-white rounded-4 shadow-sm border border-light">
            <h6 className="fw-bold text-primary mb-3 text-uppercase">Wireless & Infrastructure</h6>
            <ul className="extra-small list-unstyled lh-lg mb-0 text-black">
              <li>• <strong>Ericsson-Smart:</strong> 4G/LTE/5G Installation & Testing</li>
              <li>• <strong>DMPI Phase 6:</strong> VisMin Projects (BSC, BTS & MW)</li>
              <li>• <strong>Globe IMS:</strong> Tiaong, Ormoc, and Talavera</li>
              <li>• <strong>Edgepoint:</strong> New Sites/Coloc DC Installations & Battery Changeouts</li>
              <li>• <strong>Orissa/Vertiv:</strong> Rectifier & Battery Changeouts (Nationwide)</li>
              <li>• <strong>Globe:</strong> Battery Changeout using Sodium Batteries</li>
              <li>• <strong>Edotco/Unified Tower:</strong> Outdoor Rectifier & Cabinet Installation</li>
              <li>• <strong>Vertiv-POI Project:</strong> DC Systems for Globe-Infinivan-ETPI</li>
            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

              {/* ABOUT US PAGE */}
{activePage === 'About Us' && (
  <div className="container py-5">
    <div className="text-center mb-5">
      <h1 className="display-4 fw-bold text-dark mb-2">About Us</h1>
      <div className="mx-auto bg-primary opacity-25 mb-4" style={{ height: '4px', width: '80px' }}></div>
      <p className="lead text-muted">Excellence in Electronic and Electrical Infrastructure</p>
    </div>

    {/* VISION & MISSION SECTION */}
    <div className="row g-4 justify-content-center mb-5">
      <div className="col-lg-6">
        <div className="h-100 p-5 bg-white shadow-lg rounded-5 border-top border-primary border-4">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded-4 me-3">
              <i className="bi bi-eye-fill text-primary fs-3"></i>
            </div>
            <h2 className="fw-bold mb-0 text-dark">Our Vision</h2>
          </div>
          <p className="text-secondary lh-lg" style={{ textAlign: 'justify', fontSize: '1.05rem' }}>
            We aspire to work achieving the highest benchmark of quality and excellence in solutions service competitiveness in the ever-growing arena of technology and telecommunications, delivering total customer satisfaction locally and internationally.
          </p>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="h-100 p-5 bg-white shadow-lg rounded-5 border-top border-primary border-4">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded-4 me-3">
              <i className="bi bi-rocket-takeoff-fill text-primary fs-3"></i>
            </div>
            <h2 className="fw-bold mb-0 text-dark">Our Mission</h2>
          </div>
          <p className="text-secondary mb-3 lh-lg" style={{ textAlign: 'justify', fontSize: '1.05rem' }}>
            Commitment to provide mutually viable and growing business relations with our telecommunications partners, as a certified and competent solution provider.
          </p>
          <p className="text-secondary lh-lg" style={{ textAlign: 'justify', fontSize: '1.05rem' }}>
            Continuous enhancement and development synchronous with the changing technological environment, hand in hand with team oriented principles and goals.
          </p>
        </div>
      </div>
    </div>

    {/* SAFETY COMMITMENT BANNER */}
    <div className="card border-0 bg-danger bg-opacity-10 rounded-5 shadow-sm mb-5">
      <div className="card-body p-5 text-center">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <i className="bi bi-shield-fill-check text-danger fs-3 me-2"></i>
          <h5 className="text-uppercase fw-bold text-danger mb-0" style={{ letterSpacing: '1px' }}>
            Our Core Philosophy
          </h5>
        </div>
        <h2 className="display-6 fw-bold text-dark my-3 tracking-tight">
          "SAFETY Starts with 'S' but Begins with 'YOU'"
        </h2>
        <p className="text-secondary mx-auto mb-0 lh-lg" style={{ maxWidth: '750px', fontSize: '1.05rem' }}>
          Whether staging telecom infrastructure, optimizing data centers, or deploying field teams, operational integrity relies on individual accountability. We ensure every team member returns home safely.
        </p>
      </div>
    </div>

    {/* QUALITY POLICY SECTION */}
    <div className="row g-4 mb-5">
      <div className="col-12">
        <div className="p-5 bg-light rounded-5 border-start border-primary border-5 shadow-sm">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold text-dark mb-4">The Quality Policy</h2>
              <p className="text-secondary mb-4">
                The objective of <strong>JAHS Electronics and Electrical Services</strong> is to provide quality services in a timely, effective, and efficient manner. We create and sustain profitable relationships while ensuring corporate goals and shareholder expectations are met.
              </p>
              <p className="text-secondary mb-4 italic">
                "Management and staff, through continuous improvement, commit to ensure that Quality Management Systems are everyone’s task."
              </p>
              <div className="p-3 bg-white rounded-4 border">
                <p className="small text-muted mb-0">
                  <i className="bi bi-shield-check text-primary me-2"></i>
                  Top Management ensures the successful maintenance of this program through accountability and a full understanding of QMS objectives.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h5 className="fw-bold text-primary mb-3">Quality Objectives</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                    <span className="small">Timely, effective, and efficient service delivery.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                    <span className="small">Consistently meeting customer expectations.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                    <span className="small">Continuous improvement of products and processes.</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                    <span className="small">Quality as a collective responsibility.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* COMPANY PROFILE DETAILS SECTION */}
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="p-5 bg-dark text-white shadow-lg rounded-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <h6 className="text-primary text-uppercase fw-bold mb-3 small" style={{ letterSpacing: '1px' }}>Organization</h6>
              <p className="mb-1 fw-bold">Single Proprietorship</p>
              <p className="text-muted small">Est. Sept 14, 2004</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="text-primary text-uppercase fw-bold mb-3 small" style={{ letterSpacing: '1px' }}>Contact Details</h6>
              <p className="mb-1 small"><i className="bi bi-telephone-fill me-2 text-primary"></i>+63 923 736 1130</p>
              <p className="mb-0 small"><i className="bi bi-telephone-fill me-2 text-primary"></i>+63 927 220 9126</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="text-primary text-uppercase fw-bold mb-3 small" style={{ letterSpacing: '1px' }}>Business Identity</h6>
              <p className="mb-1 small"><strong>TIN:</strong> 162-988-540-000</p>
              <p className="mb-0 small"><strong>SSS:</strong> 33-1695975-8</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="text-primary text-uppercase fw-bold mb-3 small" style={{ letterSpacing: '1px' }}>Accreditation</h6>
              <div className="d-inline-block p-2 bg-primary bg-opacity-25 rounded border border-primary border-opacity-50">
                <p className="mb-0 fw-bold small">PCAB License: 56269</p>
              </div>
            </div>
          </div>
          
          <hr className="my-4 opacity-25" />
          
          <div className="d-flex align-items-center text-primary">
            <i className="bi bi-geo-alt-fill me-2 fs-5"></i>
            <span className="fw-bold me-1" style={{ fontSize: '13px', textTransform: 'uppercase' }}>Registered Office Address:</span>
            <span className="fw-bold" style={{ fontSize: '13px' }}>#424 Balubad Bulakan, Bulakan, Philippines 2017</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

{/* EVENTS PAGE */}
{activePage === 'Events' && (
  <div className="container py-5">
    <div className="text-center mb-5">
      <h1 className="display-4 fw-bold text-dark mb-2">Events & Highlights</h1>
      <div className="mx-auto bg-primary opacity-25 mb-4" style={{ height: '4px', width: '80px' }}></div>
    </div>

    <div className="row g-4 justify-content-center">
      <div className="col-lg-6">
        <div className="bg-white p-4 rounded-5 shadow-lg border-top border-primary border-5 h-100">
          <div className="d-flex align-items-center mb-4">
            <i className="bi bi-mortarboard-fill text-primary fs-3 me-3"></i>
            <h4 className="fw-bold mb-0">OJT Program 2025</h4>
          </div>
          <div id="ojtCarousel" className="carousel slide carousel-fade">
            <div className="carousel-inner rounded-4 shadow-sm">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`ojt-${num}`}>
                  <img src={`/ojt${num}.png`} className="d-block w-100" style={{ height: '380px', objectFit: 'cover' }} alt={`OJT ${num}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="bg-white p-4 rounded-5 shadow-lg border-top border-success border-5 h-100">
          <div className="d-flex align-items-center mb-4">
            <i className="bi bi-people-fill text-success fs-3 me-3"></i>
            <h4 className="fw-bold mb-0">Team Engagement</h4>
          </div>
          <div id="engagementCarousel" className="carousel slide carousel-fade">
            <div className="carousel-inner rounded-4 shadow-sm">
              {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`hl-${num}`}>
                  <img src={`/hl${num}.png`} className="d-block w-100" style={{ height: '380px', objectFit: 'cover' }} alt={`Engagement ${num}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
        {activePage === 'Personnel' && (
  <div className="container py-5">
    
    {/* SECTION TITLE */}
    <div className="mb-5 text-center">
      <h2 className="fw-bolder text-dark" style={{ fontFamily: "'Nexa Slab', serif" }}>Executive Leadership & Corporate Support</h2>
      <div className="bg-primary mx-auto mt-2" style={{ height: '3px', width: '60px' }}></div>
    </div>

    {/* 1. GENERAL MANAGER (Alex) */}
    <div className="card border-0 shadow-lg rounded-5 overflow-hidden mb-5 transition-hover cursor-pointer position-relative">
      <div className="row g-0 align-items-center">
        <div className="col-md-5 bg-dark text-center p-5">
          <img src="/Gen.png" alt="General Manager Alex" className="img-fluid rounded-circle border border-5 border-primary mb-3 shadow-lg" style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
          <h3 className="text-white fw-bold mb-0">Jose Alexander H. Santos</h3>
          <p className="text-primary small mb-0 text-uppercase tracking-wider">General Manager</p>
        </div>
        <div className="col-md-7 p-5 bg-white position-relative">
          <i className="bi bi-quote text-light fs-1 position-absolute top-0 end-0 m-3 opacity-50"></i>
          <p className="lead text-secondary fst-italic mb-3 lh-base">
            "Integrates technical oversight with business leadership, ensuring the company’s telecom services meet both operational and financial goals."
          </p>
          <div className="d-inline-flex align-items-center p-2 bg-light rounded-3 mt-2">
          </div>
        </div>
      </div>
    </div>

    {/* 2. ADMINISTRATION & FINANCE (Spotlight Cards) */}
    <div className="d-flex align-items-center mb-4 mt-5">
      <i className="bi bi-building-fill-check text-primary fs-4 me-2"></i>
      <h4 className="fw-bold text-dark mb-0">Corporate Administration & Finance</h4>
    </div>
    
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 justify-content-center">
      
      {/* Glaiza - Head of Admin & Finance */}
      <div className="col">
        <div className="card border-0 shadow rounded-5 p-4 text-center h-100 transition-hover cursor-pointer bg-white">
          <img src="/Glaiza.png" alt="Glaiza Finance" className="rounded-circle mx-auto mb-3 shadow-sm border border-2 border-light" style={{ width: '110px', height: '110px', objectFit: 'cover' }} />
          <h5 className="fw-bold text-dark mb-1">Glaiza P. Santos</h5>
          <p className="text-primary extra-small mb-3 fw-bold text-uppercase tracking-wide">Accounting Head</p>
          <p className="extra-small text-muted mb-0 lh-base border-top pt-2">Financial reporting, audits, controls, and HR leadership.</p>
        </div>
      </div>

      {/* Pamela - HR & Records Manager */}
      <div className="col">
        <div className="card border-0 shadow rounded-5 p-4 text-center h-100 transition-hover cursor-pointer bg-white">
          <img src="/Pam.png" alt="Pamela HR" className="rounded-circle mx-auto mb-3 shadow-sm border border-2 border-light" style={{ width: '110px', height: '110px', objectFit: 'cover' }} />
          <h5 className="fw-bold text-dark mb-1">Pamela V. Fuentes</h5>
          <p className="text-primary extra-small mb-3 fw-bold text-uppercase tracking-wide">HR Assistant / Records</p>
          <p className="extra-small text-muted mb-0 lh-base border-top pt-2">Recruitment, training, employee relations, and comprehensive record management.</p>
        </div>
      </div>
      
      {/* Trizia - Finance Officer */}
      <div className="col">
        <div className="card border-0 shadow rounded-5 p-4 text-center h-100 transition-hover cursor-pointer bg-white">
          <img src="/Trizia.png" alt="Trizia Finance" className="rounded-circle mx-auto mb-3 shadow-sm border border-2 border-light" style={{ width: '110px', height: '110px', objectFit: 'cover' }} />
          <h5 className="fw-bold text-dark mb-1">Trizia R. Santos </h5>
          <p className="text-primary extra-small mb-3 fw-bold text-uppercase tracking-wide">Finance Officer</p>
          <p className="extra-small text-muted mb-0 lh-base border-top pt-2">Dedicated financial operations, accounts payable/receivable, and cash management.</p>
        </div>
      </div>

    </div>

    {/* 3. CORE DIVISIONS */}
    <div className="bg-light p-5 rounded-5 border mt-5">
      <div className="text-center mb-5">
        <h4 className="fw-bold text-dark mb-1">Our Dedicated Workforce</h4>
        <p className="text-muted small">Supporting our leadership is a nationwide network of specialists.</p>
      </div>
      
      <div className="row g-4 text-center">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 transition-hover bg-white cursor-pointer">
            <div className="bg-primary bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
              <i className="bi bi-tools text-primary fs-3"></i>
            </div>
            <h6 className="fw-bold text-dark">Implementation Engineers</h6>
            <p className="text-muted small mb-0">Certified experts in high-voltage DC systems and active equipment integration.</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 transition-hover bg-white cursor-pointer">
            <div className="bg-primary bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
              <i className="bi bi-truck text-primary fs-3"></i>
            </div>
            <h6 className="fw-bold text-dark">Logistics & Fleet Teams</h6>
            <p className="text-muted small mb-0">Coordinating nationwide material staging, secure transport, and site delivery.</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 transition-hover bg-white cursor-pointer">
            <div className="bg-primary bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
              <i className="bi bi-shield-check text-primary fs-3"></i>
            </div>
            <h6 className="fw-bold text-dark">Quality & Safety Officers</h6>
            <p className="text-muted small mb-0">Ensuring all site operations exceed Tier-1 telco safety protocols.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
)}
 {/* BLOG PAGE */}
{activePage === 'Blog' && (
  <div className="container py-5">
    <div className="text-center mb-5">
      <h1 className="display-4 fw-bold text-dark mb-2">Technical Insights & Operations</h1>
      <div className="mx-auto bg-primary opacity-25 mb-4" style={{ height: '4px', width: '80px' }}></div>
      <p className="lead text-secondary">Expertise in DC systems, infrastructure, and real-time operational updates.</p>
    </div>

    <div className="row g-5">
      
      {/* LATEST TECHNOLOGIES COLUMN */}
      <div className="col-lg-8">
        <div className="d-flex align-items-center mb-4">
          <i className="bi bi-cpu-fill text-primary fs-4 me-2"></i>
          <h4 className="fw-bold text-dark mb-0">Latest Technologies</h4>
        </div>

        {/* Article 1: Energy & Telecom */}
        <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden transition-hover">
          <div className="card-body p-4">
            <span className="badge bg-primary bg-opacity-10 text-primary border border-primary mb-3 px-3 py-2 rounded-pill">Telecom Infrastructure</span>
            <h5 className="fw-bold text-dark mb-3">The Shift to High-Efficiency Lithium-Ion Systems in Cell Sites</h5>
            <p className="text-muted small mb-4 lh-lg" style={{ textAlign: 'justify' }}>
              Modern telecom sites are rapidly migrating from traditional VRLA batteries to advanced Lithium-Ion solutions. This transition offers higher energy density, faster recharge rates, and longer lifespans, drastically reducing maintenance overhead for nationwide network operators and ensuring uninterrupted power during grid failures.
            </p>
            <a href="#read-more" className="text-primary fw-bold text-decoration-none small text-uppercase tracking-wider">
              Read Full Report <i className="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>

        {/* Article 2: Network Engineering */}
        <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden transition-hover">
          <div className="card-body p-4">
            <span className="badge bg-dark bg-opacity-10 text-dark border border-dark mb-3 px-3 py-2 rounded-pill">Network Engineering</span>
            <h5 className="fw-bold text-dark mb-3">IPv6 Adoption: Future-Proofing Next-Gen Network Layers</h5>
            <p className="text-muted small mb-4 lh-lg" style={{ textAlign: 'justify' }}>
              With the aggressive expansion of IoT devices and 5G network deployments, the exhaustion of IPv4 addresses mandates a definitive shift to IPv6. Mastering protocol headers, complex subnetting, and efficient router interface assignments is now critical for engineering robust, scalable data centers that can handle next-generation data loads.
            </p>
            <a href="#read-more" className="text-dark fw-bold text-decoration-none small text-uppercase tracking-wider">
              Read Full Report <i className="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
        
        {/* Article 3: Web & System Architecture */}
        <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden transition-hover">
          <div className="card-body p-4">
            <span className="badge bg-success bg-opacity-10 text-success border border-success mb-3 px-3 py-2 rounded-pill">System Architecture</span>
            <h5 className="fw-bold text-dark mb-3">Modernizing Enterprise Portals with Headless CMS</h5>
            <p className="text-muted small mb-4 lh-lg" style={{ textAlign: 'justify' }}>
              Transitioning from monolithic legacy platforms to headless architectures provides unprecedented operational flexibility. Decoupling content management systems from modern front-end frameworks like React and Bootstrap ensures much faster, responsive delivery of corporate data and real-time operational dashboards.
            </p>
            <a href="#read-more" className="text-success fw-bold text-decoration-none small text-uppercase tracking-wider">
              Read Full Report <i className="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>

      {/* WEATHER FORECAST & ALERTS COLUMN */}
      <div className="col-lg-4">
        <div className="d-flex align-items-center mb-4">
          <i className="bi bi-cloud-sun-fill text-primary fs-4 me-2"></i>
          <h4 className="fw-bold text-dark mb-0">Operations Weather</h4>
        </div>

        {/* Professional Weather Widget */}
        <div className="card border-0 shadow-lg rounded-5 overflow-hidden bg-dark text-white mb-4">
          <div className="card-header border-0 bg-transparent p-4 pb-0 d-flex justify-content-between align-items-start">
            <div>
              <h6 className="text-uppercase fw-bold text-primary mb-1" style={{ letterSpacing: '2px', fontSize: '0.75rem' }}>Active Sector</h6>
              <h4 className="fw-bold mb-0">Bulakan</h4>
              <p className="small text-white-50">Bulacan, Philippines</p>
            </div>
            <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
          </div>
          
          <div className="card-body p-4 text-center">
            {/* Current Weather: Sunny */}
            <i className="bi bi-sun-fill text-warning display-1 mb-3 d-block drop-shadow"></i>
            <h1 className="display-2 fw-bolder mb-0" style={{ fontFamily: "'Nexa Slab', serif" }}>32°C</h1>
            <p className="lead fw-bold text-white-50 mb-4">Sunny</p>
            
            <div className="row g-2 text-center border-top border-secondary pt-4">
              <div className="col-4">
                <i className="bi bi-droplet-half text-primary mb-2 fs-5"></i>
                <p className="small text-white-50 mb-0">Humidity</p>
                <span className="fw-bold">65%</span>
              </div>
              <div className="col-4 border-start border-end border-secondary">
                <i className="bi bi-wind text-primary mb-2 fs-5"></i>
                <p className="small text-white-50 mb-0">Wind</p>
                <span className="fw-bold">5 km/h</span>
              </div>
              <div className="col-4">
                <i className="bi bi-eye text-primary mb-2 fs-5"></i>
                <p className="small text-white-50 mb-0">Visibility</p>
                <span className="fw-bold">10 km</span>
              </div>
            </div>
          </div>
          
          {/* Dynamic Weekly Forecast Outlook */}
          <div className="bg-white bg-opacity-10 p-4">
            <h6 className="text-uppercase text-white-50 fw-bold mb-3 small" style={{ letterSpacing: '1px' }}>Weekly Forecast</h6>
            
            {[
              { day: 'Monday', temp: '31°C', icon: 'bi-sun-fill text-warning' },
              { day: 'Tuesday', temp: '32°C', icon: 'bi-cloud-sun-fill text-warning' },
              { day: 'Wednesday', temp: '29°C', icon: 'bi-cloud-rain-heavy-fill text-info' },
              { day: 'Thursday', temp: '30°C', icon: 'bi-cloud-lightning-rain-fill text-info' },
              { day: 'Friday', temp: '33°C', icon: 'bi-sun-fill text-warning' },
              { day: 'Saturday', temp: '34°C', icon: 'bi-sun-fill text-warning' },
              { day: 'Sunday', temp: '32°C', icon: 'bi-cloud-fill text-white-50' }
            ].map((item, index, arr) => (
              <div 
                key={index} 
                className={`d-flex justify-content-between align-items-center ${
                  index !== arr.length - 1 ? 'mb-3 pb-3 border-bottom border-secondary border-opacity-25' : ''
                }`}
              >
                <span className="fw-bold">{item.day}</span>
                <div className="d-flex align-items-center">
                  <i className={`bi ${item.icon} me-3 fs-5`}></i>
                  <span className="fw-bold">{item.temp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Weather Alert */}
        <div className="card border-0 bg-primary bg-opacity-10 rounded-4 shadow-sm">
          <div className="card-body p-4 d-flex align-items-start">
            <div className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm me-3" style={{ width: '45px', height: '45px', flexShrink: 0 }}>
              <i className="bi bi-info-circle-fill text-primary fs-5"></i>
            </div>
            <div>
              <h6 className="fw-bold text-dark mb-2">Logistics Advisory</h6>
              <p className="small text-muted mb-0 lh-lg" style={{ textAlign: 'justify' }}>
                Clear conditions expected for outdoor MW and BTS staging operations in local sectors. Safe for dispatch.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)}

             {/* LOCATIONS PAGE */}
          {activePage === 'Locations' && (
            <div className="container py-5">
              <div className="bg-white p-5 rounded-5 shadow-lg border-start border-primary border-5">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <h2 className="fw-bold mb-0" style={{ fontFamily: "'Nexa Slab', serif" }}>Our Office</h2>
                    <p className="text-muted mb-0">Bulakan, Bulacan, Philippines</p>
                  </div>
                  <button 
                    className={`btn ${isStreetView ? 'btn-dark' : 'btn-primary'} rounded-pill px-4`}
                    onClick={() => setIsStreetView(!isStreetView)}
                  >
                    <i className={`bi ${isStreetView ? 'bi-map' : 'bi-eye'} me-2`}></i>
                    {isStreetView ? 'Show Map' : 'Street View'}
                  </button>
                </div>

                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="p-4 bg-light rounded-4 h-100">
                      <h6 className="fw-bold text-primary text-uppercase small mb-3">Location Details</h6>
                      <p className="small mb-2"><strong>Address:</strong> 424 Balubad, Bulakan, Bulacan, 2017</p>
                      <p className="small mb-0"><strong>GPS:</strong> 14.807046, 120.870986</p>
                      <hr />
                      <p className="extra-small text-muted mb-0">
                        Our central hub for engineering operations and logistics management across the Luzon region.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-8">
                    <div className="rounded-4 overflow-hidden shadow-sm border" style={{ height: '400px', backgroundColor: '#f8f9fa' }}>
                      {isStreetView ? (
                        <iframe
                          title="Street View"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          src="https://www.google.com/maps/embed?pb=!4v1731671983057!6m8!1m1!1svCB3aiiuMq2e4e2Po5fJBQ!2m2!1d14.80718501198905!2d120.8709230537446!3f240!4f0!5f0.7820865974627469"
                        ></iframe>
                      ) : (
                        <iframe
                          title="Office Map"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1377.9472655554316!2d120.87042571253026!3d14.807094254877395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653a92383861d%3A0xe764724a4d623547!2sJAHS%20Electronics%20and%20Electrical%20Services!5e1!3m2!1sen!2sph!4v1731672589088!5m2!1sen!2sph"
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

              {/* PARTNERSHIP PAGE */}
              {activePage === 'Partnership' && (
                <div className="container py-5">
                  <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-dark mb-2">TWO DECADES OF INNOVATION</h1>
                    <p className="lead text-secondary">Strategic milestones from 2004 to 2026.</p>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="list-group shadow-sm rounded-4 overflow-hidden">
                        {[2004, 2008, 2014, 2018, 2023, 2024, 2025, 2026].map((year) => (
                          <button key={year} onClick={() => setTimelineYear(year)} className={`list-group-item list-group-item-action py-3 fw-bold border-0 ${timelineYear === year ? 'bg-primary text-white' : 'text-muted'}`}>
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="p-4 bg-white shadow-lg rounded-5 border-start border-primary border-4">
                        <h2 className="fw-bold text-primary mb-4">{timelineYear} Milestone</h2>
                        <div className="row row-cols-1 g-3">
                          {getPartnersByYear(timelineYear).map((partner, idx) => (
                            <div key={idx} className="p-3 bg-light rounded-4">
                              <h5 className="fw-bold mb-1">{partner.name}</h5>
                              <ul className="small text-muted mb-0">
                                {partner.projects.map((p, pi) => <li key={pi}>{p}</li>)}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
           </main>
      </div> {/* Closes flex-grow-1 */}
    </div> {/* Closes d-flex */}
  </div>
  );
};

    export default App;