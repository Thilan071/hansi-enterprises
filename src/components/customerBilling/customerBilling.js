// CustomerBilling.js
import React, { useState } from 'react';
import '../customerBilling/customerBilling.css';
import { Search, Eye, Download, Mail } from 'lucide-react';
import Navigation from '../navigation/navigation';  // Add this import

const CustomerBilling = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-1001',
      customer: 'Acme Corporation',
      date: '4/15/2025',
      dueDate: '4/30/2025',
      amount: '$2,500.00',
      status: 'pending'
    },
    {
      id: 'INV-998',
      customer: 'Global Industries',
      date: '4/10/2025',
      dueDate: '4/20/2025',
      amount: '$1,200.00',
      status: 'overdue'
    },
    {
      id: 'INV-995',
      customer: 'Tech Solutions',
      date: '4/5/2025',
      dueDate: '4/15/2025',
      amount: '$750.00',
      status: 'paid'
    },
    {
      id: 'INV-990',
      customer: 'Smith Enterprises',
      date: '4/1/2025',
      dueDate: '4/15/2025',
      amount: '$3,400.00',
      status: 'paid'
    },
    {
      id: 'INV-985',
      customer: 'Johnson LLC',
      date: '3/25/2025',
      dueDate: '4/10/2025',
      amount: '$1,800.00',
      status: 'paid'
    }
  ]);

  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="billing-container">
          <div className="header-row">
            <h1>Billing</h1>
            <div className="search-container">
              <Search size={20} />
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <div className="notification-icon">
              <div className="notification-dot"></div>
              <Mail size={20} />
            </div>
          </div>
  
          <div className="customer-billing-section">
            <h2>Customer Billing</h2>
          </div>
  
          <div className="invoice-management-section">
            <div className="invoice-management-header">
              <span className="icon-document"></span>
              <h2>Invoice Management</h2>
            </div>
            <button className="create-invoice-btn">
              <span className="icon-document"></span>
              Create New Invoice
            </button>
          </div>
          
          <div className="invoice-table-container">
            <div className="table-controls">
              <div className="search-container">
                <Search size={20} />
                <input 
                  type="text" 
                  placeholder="Search by invoice number or customer..." 
                  className="search-invoice-input" 
                />
              </div>
              <div className="table-actions">
                <div className="status-dropdown">
                  <span>All Status</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                <button className="export-btn">Export</button>
              </div>
            </div>
  
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Invoice Number</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Due Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                    <td>{invoice.customer}</td>
                    <td>{invoice.date}</td>
                    <td>{invoice.dueDate}</td>
                    <td>{invoice.amount}</td>
                    <td>
                      <span className={`status-badge ${invoice.status}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-icons">
                        <Eye size={18} />
                        <Download size={18} />
                        <Mail size={18} />
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

export default CustomerBilling;