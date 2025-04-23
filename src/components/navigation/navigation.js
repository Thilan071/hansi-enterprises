import React from 'react';
import './navigation.css';
import { MdDashboard, MdInventory, MdReceipt, MdPayments, 
         MdNotifications, MdPointOfSale, MdAssessment, 
         MdPeople, MdSettings } from 'react-icons/md';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Business OS</div>
      <div className="sidebar-menu">
        <div className="menu-item active">
          <MdDashboard className="icon" />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <MdInventory className="icon" />
          <span>Stock Management</span>
        </div>
        <div className="menu-item">
          <MdReceipt className="icon" />
          <span>Customer Billing</span>
        </div>
        <div className="menu-item">
          <MdPayments className="icon" />
          <span>Installments</span>
        </div>
        <div className="menu-item">
          <MdNotifications className="icon" />
          <span>Reminders</span>
        </div>
        <div className="menu-item">
          <MdPointOfSale className="icon" />
          <span>Sales</span>
        </div>
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