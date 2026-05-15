import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import SideBar from './components/SideBar';

function App() {
  const [activePage, setActivePage] = useState('Home');
  const [isStreetView, setIsStreetView] = useState(false);
  const [timelineYear, setTimelineYear] = useState(2024);

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
      <div className="d-flex">
        <SideBar activePage={activePage} setActivePage={setActivePage} />
        
        <main className="main-content w-100">
          
          {/* HOME PAGE */}
          {activePage === 'Home' && (
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
                        
                        {/* FIXED: SINGLE BLUE LINE ADDRESS */}
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

              {/* PERSONNEL PAGE */}
{activePage === 'Personnel' && (
  <div className="container py-5">
    <div className="text-center mb-5">
      {/* Changed "Our Team" to "Our Personnel" for consistency */}
      <h1 className="display-4 fw-bold text-dark mb-2">Our Personnel</h1>
      <div className="mx-auto bg-primary opacity-25 mb-4" style={{ height: '4px', width: '80px' }}></div>
      <p className="lead text-secondary">A certified team of experts driving telecom excellence since 2004.</p>
    </div>

                  {/* LEADERSHIP - GENERAL MANAGER */}
                  <div className="row justify-content-center mb-5">
                    <div className="col-lg-8">
                      <div className="p-4 p-md-5 bg-white shadow-lg rounded-5 border-top border-primary border-4 text-center">
                        <img src="/Gen.png" className="rounded-circle border border-primary border-3 shadow-sm mb-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} alt="GM" />
                        <h3 className="fw-bold text-dark mb-1">Jose Alex H. Santos</h3>
                        <p className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>General Manager</p>
                        <div className="bg-light p-3 rounded-4 mx-auto" style={{ maxWidth: '600px' }}>
                          <p className="small text-secondary mb-0">
                            Integrates technical oversight with business leadership, ensuring the company’s telecom services meet both operational and financial goals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4">
                    {/* OPERATIONS & IMPLEMENTATION */}
                    <div className="col-lg-6">
                      <div className="h-100 p-4 bg-white shadow-sm rounded-5 border-top border-primary border-4">
                        <h5 className="fw-bold mb-4 d-flex align-items-center">
                          <i className="bi bi-gear-wide-connected text-primary me-2"></i> Operations & Implementation
                        </h5>
                        
                        <div className="d-flex align-items-start mb-4">
                          <img src="/Dennis.png" className="rounded-circle me-3 border shadow-sm" style={{ width: '55px', height: '55px', objectFit: 'cover' }} alt="Dennis" />
                          <div>
                            <h6 className="fw-bold mb-1">Jose Dennis H. Cruz</h6>
                            <p className="text-primary extra-small fw-bold text-uppercase mb-2">Implementation Head</p>
                            <p className="extra-small text-muted mb-0">Oversees multiple projects, sets goals, manages teams, and ensures technical compliance.</p>
                          </div>
                        </div>

                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="d-flex align-items-center p-2 border rounded-4">
                              <img src="/Dave.png" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} alt="Dave" />
                              <div>
                                <p className="mb-0 fw-bold extra-small">Dave E. Manlapaz</p>
                                <p className="text-muted extra-small mb-0">Implementation</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center p-2 border rounded-4">
                              <img src="/Simon.png" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} alt="Simon" />
                              <div>
                                <p className="mb-0 fw-bold extra-small">Simon Paul S. Tapia</p>
                                <p className="text-muted extra-small mb-0">Project Coordinator</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="extra-small text-muted mt-3 ps-2 border-start">
                          <strong>Coordinator Role:</strong> Scheduling, documentation, communication, and reporting.
                        </p>
                      </div>
                    </div>

                    {/* ADMIN & HR */}
                    <div className="col-lg-6">
                      <div className="h-100 p-4 bg-white shadow-sm rounded-5 border-top border-primary border-4">
                        <h5 className="fw-bold mb-4 d-flex align-items-center">
                          <i className="bi bi-person-badge text-primary me-2"></i> Administration & Finance
                        </h5>

                        <div className="d-flex align-items-start mb-4">
                          <img src="/Glaiza.png" className="rounded-circle me-3 border shadow-sm" style={{ width: '55px', height: '55px', objectFit: 'cover' }} alt="Glaiza" />
                          <div>
                            <h6 className="fw-bold mb-1">Glaiza P. Santos</h6>
                            <p className="text-primary extra-small fw-bold text-uppercase mb-2">Accounting Head</p>
                            <p className="extra-small text-muted mb-0">Financial reporting, audits, controls, and team leadership.</p>
                          </div>
                        </div>

                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="d-flex align-items-center p-2 border rounded-4 h-100">
                              <img src="/Pam.png" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} alt="Pam" />
                              <div>
                                <p className="mb-0 fw-bold extra-small">Pamela V. Fuentes</p>
                                <p className="text-muted extra-small mb-0">HR Assistant</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="p-2 border rounded-4 h-100">
                              <p className="mb-0 fw-bold extra-small">HR Head Role</p>
                              <p className="text-muted extra-small mb-0 small">Recruitment, training, and employee relations.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ENGINEERING & SUPPORT SECTION */}
                    <div className="col-md-4">
                      <div className="h-100 p-4 bg-white shadow-sm rounded-5 border-top border-primary border-4">
                        <h5 className="fw-bold mb-4 small text-uppercase">Engineering & Support</h5>
                        <div className="d-flex align-items-center mb-4">
                          <img src="/John.png" className="rounded-circle me-3 shadow-sm border" style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt="John" />
                          <div>
                            <p className="mb-0 fw-bold small">John Deniel Lava</p>
                            <p className="text-primary extra-small fw-bold mb-0">Implementation Engineer</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <img src="/Edgardo.png" className="rounded-circle me-3 shadow-sm border" style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt="Edgardo" />
                          <div>
                            <p className="mb-0 fw-bold small">Edgardo Nacar Jr.</p>
                            <p className="text-primary extra-small fw-bold mb-1">Support Engineering Technician</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* LOGISTICS & WAREHOUSE */}
                    <div className="col-md-4">
                      <div className="h-100 p-4 bg-white shadow-sm rounded-5 border-top border-primary border-4">
                        <h5 className="fw-bold mb-4 small text-uppercase">Logistics & Records</h5>
                        <div className="d-flex align-items-center mb-4">
                          <img src="/Ramon.png" className="rounded-circle me-3 shadow-sm border" style={{ width: '45px', height: '45px', objectFit: 'cover' }} alt="Ramon" />
                          <div>
                            <p className="mb-0 fw-bold small">Ramon E. Soriano</p>
                            <p className="text-muted extra-small mb-0">Logistics / Records</p>
                          </div>
                        </div>
                        <div className="bg-light p-3 rounded-4">
                          <p className="mb-2 fw-bold extra-small text-dark text-uppercase">Warehouse Team</p>
                          <div className="d-flex gap-2">
                            <img src="/Ware1.png" className="rounded-circle border bg-white shadow-sm" style={{ width: '35px', height: '35px', objectFit: 'cover' }} alt="W1" />
                            <img src="/Ware2.png" className="rounded-circle border bg-white shadow-sm" style={{ width: '35px', height: '35px', objectFit: 'cover' }} alt="W2" />
                            <img src="/Ware3.png" className="rounded-circle border bg-white shadow-sm" style={{ width: '35px', height: '35px', objectFit: 'cover' }} alt="W3" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SAFETY & HEALTH */}
                    <div className="col-md-4">
                      <div className="h-100 p-4 bg-white shadow-sm rounded-5 border-top border-primary border-4">
                        <h5 className="fw-bold mb-4 small text-uppercase">Safety Team</h5>
                        <div className="d-flex align-items-center mb-3">
                          <img src="/Luis.png" className="rounded-circle me-3 shadow-sm border" style={{ width: '45px', height: '45px', objectFit: 'cover' }} alt="Luis" />
                          <div>
                            <p className="mb-0 fw-bold small">Luisito A. Leonor</p>
                            <p className="text-muted extra-small mb-0">Senior Safety</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src="/Ricky.png" className="rounded-circle me-3 shadow-sm border" style={{ width: '45px', height: '45px', objectFit: 'cover' }} alt="Ricky" />
                          <div>
                            <p className="mb-0 fw-bold small">Ricky Pacheco</p>
                            <p className="text-muted extra-small mb-0">First Aider</p>
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
          </div>
        </div>
      );
    }

    export default App;