import React from 'react';
import './company.css';
import { Search, Bell, Save } from 'lucide-react';
import Navigation from '../../navigation/navigation';
import { useNavigate, useLocation } from 'react-router-dom';

const Company = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleTabClick = (path) => {
    navigate(path);
  };

  const isTabActive = (path) => {
    if (path === '/settings' && location.pathname === '/settings') {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="settings-container">
          <header className="settings-header">
            <h1>Settings</h1>
            <div className="search-container">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search..." className="search-input" />
              <div className="notification-icon">
                <Bell size={20} />
                <span className="notification-badge"></span>
              </div>
            </div>
          </header>
          
          <div className="settings-content">
            <div className="settings-top-section">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path>
                </svg>
                <h2>Settings</h2>
              </div>

              <div className="nav-tabs">
                <div className={`nav-tab ${isTabActive('/settings') ? 'active' : ''}`} onClick={() => handleTabClick('/settings')}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z"></path>
                  </svg>
                  <span>General</span>
                </div>
                <div className={`nav-tab ${isTabActive('/settings/company') ? 'active' : ''}`} onClick={() => handleTabClick('/settings/company')}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M20 7H10V11H20V7Z M14 15H4V19H14V15Z M10 7V3M20 11V15M4 15V11M14 19V23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Company</span>
                </div>
                <div className={`nav-tab ${isTabActive('/settings/users') ? 'active' : ''}`} onClick={() => handleTabClick('/settings/users')}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span>Users</span>
                </div>
                <div className={`nav-tab ${isTabActive('/settings/notifications') ? 'active' : ''}`} onClick={() => handleTabClick('/settings/notifications')}>
                  <Bell size={16} />
                  <span>Notifications</span>
                </div>
                <div className={`nav-tab ${isTabActive('/settings/integrations') ? 'active' : ''}`} onClick={() => handleTabClick('/settings/integrations')}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M4 12H20M4 12L8 8M4 12L8 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Integrations</span>
                </div>
              </div>
            </div>
            
            <div className="settings-main">
              <div className="settings-card">
                <div className="company-header">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="company-icon">
                    <path fill="currentColor" d="M20 7H10V11H20V7Z M14 15H4V19H14V15Z M10 7V3M20 11V15M4 15V11M14 19V23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2>Company Information</h2>
                </div>
                <p className="settings-description">Update your company details used on invoices and documents.</p>
                
                <div className="settings-section">
                  <div className="settings-row">
                    <div className="settings-field">
                      <label>Company Name</label>
                      <input type="text" placeholder="Your Company Name" className="settings-input" />
                      <p className="settings-help-text">The legal name of your business</p>
                    </div>
                    
                    <div className="settings-field">
                      <label>Tax ID / VAT Number</label>
                      <input type="text" placeholder="Enter tax ID" className="settings-input" />
                      <p className="settings-help-text">Your company's tax identification number</p>
                    </div>
                  </div>
                  
                  <div className="settings-row">
                    <div className="settings-field">
                      <label>Phone</label>
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <svg viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                        </span>
                        <input type="text" placeholder="+1 (555) 000-0000" className="settings-input with-icon" />
                      </div>
                    </div>
                    
                    <div className="settings-field">
                      <label>Email</label>
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <svg viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <path fill="currentColor" d="M22 6l-10 7L2 6"/>
                          </svg>
                        </span>
                        <input type="email" placeholder="contact@company.com" className="settings-input with-icon" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="settings-row single-field">
                    <div className="settings-field">
                      <label>Website</label>
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <svg viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                          </svg>
                        </span>
                        <input type="url" placeholder="https://your-company.com" className="settings-input with-icon" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="settings-row single-field">
                    <div className="settings-field">
                      <label>Business Address</label>
                      <textarea className="settings-textarea" placeholder="Enter your company's address" rows="4"></textarea>
                    </div>
                  </div>
                  
                  <div className="settings-button-container">
                    <button className="save-button">
                      <Save size={16} />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;