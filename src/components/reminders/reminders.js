// Reminders.js
import React, { useState } from 'react';
import './reminders.css';
import { Search, Send, Edit, Trash, Mail, MessageSquare, BellRing } from 'lucide-react';
import Navigation from '../navigation/navigation';
import bellIcon from '../assets/images/bell.png';  // Import the bell icon image

const Reminders = () => {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: 'Payment Due Reminder',
      recipient: 'John Smith',
      type: 'payment',
      method: 'email',
      scheduledDate: '4/25/2025',
      status: 'scheduled'
    },
    {
      id: 2,
      title: 'Low Stock Alert',
      recipient: 'Inventory Manager',
      type: 'stock',
      method: 'push',
      scheduledDate: '4/22/2025',
      status: 'scheduled'
    },
    {
      id: 3,
      title: 'Service Renewal',
      recipient: 'Emily Johnson',
      type: 'renewal',
      method: 'sms',
      scheduledDate: '4/20/2025',
      status: 'sent'
    },
    {
      id: 4,
      title: 'Payment Overdue Notice',
      recipient: 'Sarah Wilson',
      type: 'payment',
      method: 'email',
      scheduledDate: '4/18/2025',
      status: 'sent'
    },
    {
      id: 5,
      title: 'Inventory Restock',
      recipient: 'Warehouse Team',
      type: 'stock',
      method: 'push',
      scheduledDate: '4/17/2025',
      status: 'failed'
    }
  ]);

  const getMethodIcon = (method) => {
    switch (method) {
      case 'email':
        return <Mail size={16} />;
      case 'push':
        return <BellRing size={16} />;
      case 'sms':
        return <MessageSquare size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="reminders-container">
          <div className="header-row">
            <h1>Reminders</h1>
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <div className="notification-icon" style={{ background: 'transparent' }}>
              <img 
                src={bellIcon} 
                alt="Notifications" 
                className="notification-img" 
                style={{ 
                  width: '24px', 
                  height: '24px',
                  display: 'block',
                  position: 'static'
                }} 
              />
            </div>
          </div>
  
          <div className="reminders-section">
            <h2>Reminders</h2>
            <button className="create-reminder-btn">
              <img 
                src={bellIcon} 
                alt="Bell" 
                style={{ width: '16px', height: '16px', marginRight: '8px' }} 
                className="button-icon" 
              />
              Create New Reminder
            </button>
          </div>
  
          <div className="reminder-system-section">
            <div className="reminder-system-header">
              <img 
                src={bellIcon} 
                alt="Bell" 
                style={{ width: '18px', height: '18px', marginRight: '8px' }} 
              />
              <h2>Reminder System</h2>
            </div>
          </div>
          
          <div className="reminders-table-container">
            <div className="table-controls">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search by title or recipient..." 
                  className="search-reminder-input" 
                />
              </div>
              <div className="filters">
                <div className="dropdown">
                  <span>All Types</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                <div className="dropdown">
                  <span>All Status</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
              </div>
            </div>
  
            <table className="reminders-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Recipient</th>
                  <th>Type</th>
                  <th>Method</th>
                  <th>Scheduled Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reminders.map((reminder) => (
                  <tr key={reminder.id}>
                    <td>{reminder.title}</td>
                    <td>{reminder.recipient}</td>
                    <td>
                      <span className={`type-badge ${reminder.type}`}>
                        {reminder.type}
                      </span>
                    </td>
                    <td>
                      <div className="method-icon">
                        {getMethodIcon(reminder.method)}
                        <span>{reminder.method.charAt(0).toUpperCase() + reminder.method.slice(1)}</span>
                      </div>
                    </td>
                    <td>{reminder.scheduledDate}</td>
                    <td>
                      <span className={`status-badge ${reminder.status}`}>
                        {reminder.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-icons">
                        {reminder.status === 'scheduled' && <Send size={18} />}
                        <Edit size={18} />
                        <Trash size={18} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reminders;