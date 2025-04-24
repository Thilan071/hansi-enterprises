import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';
import { MdDashboard, MdInventory, MdReceipt, MdPayments, 
         MdNotifications, MdPointOfSale, MdAssessment, 
         MdPeople, MdSettings } from 'react-icons/md';

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">Business OS</div>
      <div className="sidebar-menu">
        <Link to="/" className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
          <MdDashboard className="icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/stock" className={`menu-item ${location.pathname === '/stock' ? 'active' : ''}`}>
          <MdInventory className="icon" />
          <span>Stock Management</span>
        </Link>
        <Link to="/billing" className={`menu-item ${location.pathname === '/billing' ? 'active' : ''}`}>
          <MdReceipt className="icon" />
          <span>Customer Billing</span>
        </Link>
        <Link to="/installments" className={`menu-item ${location.pathname === '/installments' ? 'active' : ''}`}>
          <MdPayments className="icon" />
          <span>Installments</span>
        </Link>
        <Link to="/reminders" className={`menu-item ${location.pathname === '/reminders' ? 'active' : ''}`}>
          <MdNotifications className="icon" />
          <span>Reminders</span>
        </Link>
        <Link to="/sales" className={`menu-item ${location.pathname === '/sales' ? 'active' : ''}`}>
          <MdPointOfSale className="icon" />
          <span>Sales</span>
        </Link>
        <div className="menu-item">
          <MdAssessment className="icon" />
          <span>Reports</span>
        </div>
        <div className="menu-item">
          <MdPeople className="icon" />
          <span>Customers</span>
        </div>
        <div className="menu-item">
          <MdSettings className="icon" />
          <span>Settings</span>
        </div>
      </div>
      <div className="user-info">
        <div className="user-avatar">A</div>
        <div className="user-details">
          <div className="user-name">Admin User</div>
          <div className="user-email">admin@example.com</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;