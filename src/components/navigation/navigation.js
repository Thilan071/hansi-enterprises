import React from 'react';
import './navigation.css';
import { MdDashboard, MdInventory, MdReceipt, MdPayments } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';
import { FaChartBar, FaFileAlt, FaUsers, FaCog } from 'react-icons/fa';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Business OS</div>
      <div className="sidebar-menu">
        <div className="menu-item active">
          <MdDashboard className="nav-icon" />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <MdInventory className="nav-icon" />
          <span>Stock Management</span>
        </div>
        <div className="menu-item">
          <MdReceipt className="nav-icon" />
          <span>Customer Billing</span>
        </div>
        <div className="menu-item">
          <MdPayments className="nav-icon" />
          <span>Installments</span>
        </div>
        <div className="menu-item">
          <BiBell className="nav-icon" />
          <span>Reminders</span>
        </div>
        <div className="menu-item">
          <FaChartBar className="nav-icon" />
          <span>Sales</span>
        </div>
        <div className="menu-item">
          <FaFileAlt className="nav-icon" />
          <span>Reports</span>
        </div>
        <div className="menu-item">
          <FaUsers className="nav-icon" />
          <span>Customers</span>
        </div>
        <div className="menu-item">
          <FaCog className="nav-icon" />
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