// customers.js
import React, { useState } from 'react';
import './customers.css';
import Navigation from '../navigation/navigation';
import { MdSearch, MdPeople, MdAdd } from 'react-icons/md';
import bellIcon from '../assets/images/bell.png';
import { Search, Eye, Edit, Trash2, Mail, Phone } from 'lucide-react'; // Added Mail and Phone icons

const Customers = () => {
  // Initial customer data
  const initialCustomers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      totalSpent: 5800.00,
      orders: 12,
      lastPurchase: '4/15/2025'
    },
    {
      id: 2,
      name: 'Emily Johnson',
      email: 'emily.j@example.com',
      phone: '+1 (555) 987-6543',
      status: 'active',
      totalSpent: 3200.00,
      orders: 8,
      lastPurchase: '4/10/2025'
    },
    {
      id: 3,
      name: 'Michael Davis',
      email: 'michael.d@example.com',
      phone: '+1 (555) 789-0123',
      status: 'inactive',
      totalSpent: 1500.00,
      orders: 3,
      lastPurchase: '3/20/2025'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.w@example.com',
      phone: '+1 (555) 321-6549',
      status: 'active',
      totalSpent: 4700.00,
      orders: 10,
      lastPurchase: '4/5/2025'
    },
    {
      id: 5,
      name: 'David Thompson',
      email: 'david.t@example.com',
      phone: '+1 (555) 456-7890',
      status: 'active',
      totalSpent: 2900.00,
      orders: 7,
      lastPurchase: '4/12/2025'
    }
  ];

  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer => {
    const searchString = searchTerm.toLowerCase();
    return (
      customer.name.toLowerCase().includes(searchString) ||
      customer.email.toLowerCase().includes(searchString) ||
      customer.phone.toLowerCase().includes(searchString)
    );
  });

  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="customers-container">
          <div className="header">
            <h1>Customers</h1>
            <div className="search-notification">
              <div className="search-container">
                <MdSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="search-input"
                  onChange={handleSearch}
                  value={searchTerm}
                />
              </div>
              <div className="notification" style={{ background: 'transparent' }}>
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
          </div>
  
          <div className="customer-management">
            <div className="management-header">
              <div className="section-title">
                <MdPeople className="customer-icon" />
                <h2>Customer Management</h2>
              </div>
              <div className="action-buttons">
                <button className="add-product-btn">
                  <MdAdd className="btn-icon" />
                  Add New Customer
                </button>
              </div>
            </div>
  
            <div className="table-container">
              <div className="table-controls">
                <div className="search-container">
                  <Search className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search by name, email or phone..." 
                    className="search-sale-input" 
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <button className="export-btn">Export</button>
              </div>
  
              <table className="customers-table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Total Spent</th>
                    <th>Orders</th>
                    <th>Last Purchase</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map(customer => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>
                        <div className="contact-info">
                          <div className="email">
                            <Mail size={14} className="contact-icon" />
                            {customer.email}
                          </div>
                          <div className="phone">
                            <Phone size={14} className="contact-icon" />
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`status-badge ${customer.status}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td>${customer.totalSpent.toFixed(2)}</td>
                      <td>{customer.orders}</td>
                      <td>{customer.lastPurchase}</td>
                      <td>
                        <div className="action-icons">
                          <Eye size={18} />
                          <Edit size={18} />
                          <Trash2 size={18} />
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
    </div>
  );
};

export default Customers;