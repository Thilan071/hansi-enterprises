import React, { useState } from 'react';
import './setting.css';
import { Search, Bell, Save } from 'lucide-react';
import Navigation from '../navigation/navigation';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);
  const navigate = useNavigate();
  
  const handleTabClick = (path) => {
    navigate(path);
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
            <div className="settings-sidebar">
              <div className="settings-icon-container">
                <svg viewBox="0 0 24 24" width="24" height="24" className="settings-gear-icon">
                  <path fill="currentColor" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path>
                </svg>
                <h2>Settings</h2>
              </div>
              
              <div className="nav-tabs-horizontal">
                <div className="nav-tab" onClick={() => handleTabClick('/settings')}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path>
                  </svg>
                  <span>General</span>
                </div>
                <div className="nav-tab" onClick={() => handleTabClick('/settings/company')}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M20 7H10V11H20V7Z M14 15H4V19H14V15Z M10 7V3M20 11V15M4 15V11M14 19V23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Company</span>
                </div>
                <div className="nav-tab" onClick={() => handleTabClick('/settings/users')}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span>Users</span>
                </div>
                <div className="nav-tab" onClick={() => handleTabClick('/settings/notifications')}>
                  <Bell size={16} />
                  <span>Notifications</span>
                </div>
                <div className="nav-tab" onClick={() => handleTabClick('/settings/integrations')}>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M4 12H20M4 12L8 8M4 12L8 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Integrations</span>
                </div>
              </div>
            </div>
            
            <div className="settings-main">
              <div className="settings-card">
                <h2>General Settings</h2>
                <p className="settings-description">Configure basic application settings and preferences.</p>
                
                <div className="settings-section">
                  <div className="settings-row">
                    <div className="settings-field">
                      <label>Currency</label>
                      <input type="text" value="USD" className="settings-input" readOnly />
                      <p className="settings-help-text">The default currency used throughout the application.</p>
                    </div>
                    
                    <div className="settings-field">
                      <label>Date Format</label>
                      <input type="text" value="MM/DD/YYYY" className="settings-input" readOnly />
                      <p className="settings-help-text">The default date format for displaying dates.</p>
                    </div>
                  </div>
                  
                  <div className="settings-toggle-row">
                    <div className="settings-toggle-label">
                      <h3>Enable Dark Mode</h3>
                      <p>Switch between light and dark theme.</p>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={darkMode} 
                        onChange={() => setDarkMode(!darkMode)} 
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="settings-toggle-row">
                    <div className="settings-toggle-label">
                      <h3>Auto Backup</h3>
                      <p>Automatically backup your data daily.</p>
                    </div>
                    <label className="toggle-switch active">
                      <input 
                        type="checkbox" 
                        checked={autoBackup} 
                        onChange={() => setAutoBackup(!autoBackup)} 
                      />
                      <span className="toggle-slider"></span>
                    </label>
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

export default Settings;