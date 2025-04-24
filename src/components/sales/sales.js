// Sales.js
import React, { useState } from 'react';
import './sales.css';
import { Search, ShoppingCart, Eye, Download, Bell, Check, Clock } from 'lucide-react';
import Navigation from '../navigation/navigation';  // Add this import

const Sales = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sales, setSales] = useState([
    {
      id: 'SALE-1001',
      customer: 'John Smith',
      date: '4/20/2025',
      items: '3 items',
      amount: '$549.97',
      paymentMethod: 'Credit Card',
      status: 'completed'
    },
    {
      id: 'SALE-998',
      customer: 'Emily Johnson',
      date: '4/19/2025',
      items: '2 items',
      amount: '$125.50',
      paymentMethod: 'Cash',
      status: 'completed'
    },
    {
      id: 'SALE-995',
      customer: 'Michael Davis',
      date: '4/19/2025',
      items: '5 items',
      amount: '$780.25',
      paymentMethod: 'Bank Transfer',
      status: 'pending'
    },
    {
      id: 'SALE-990',
      customer: 'Sarah Wilson',
      date: '4/18/2025',
      items: '1 items',
      amount: '$1,200.00',
      paymentMethod: 'Credit Card',
      status: 'completed'
    },
    {
      id: 'SALE-985',
      customer: 'David Thompson',
      date: '4/17/2025',
      items: '4 items',
      amount: '$345.80',
      paymentMethod: 'Cash',
      status: 'completed'
    }
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredSales = sales.filter(sale => 
    sale.id.toLowerCase().includes(searchQuery) ||
    sale.customer.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="sales-container">
          <div className="header-row">
            <h1>Sales</h1>
            <div className="search-container">
              <Search className="search-icon" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="search-input"
                onChange={handleSearch}
                value={searchQuery}
              />
            </div>
            <div className="notification-icon">
              <div className="notification-dot"></div>
              <Bell size={20} />
            </div>
          </div>
  
          <div className="sales-section">
            <h2>Sales</h2>
            <button className="create-sale-btn">
              <ShoppingCart size={16} className="button-icon" />
              Create New Sale
            </button>
          </div>
  
          <div className="sales-management-section">
            <div className="sales-management-header">
              <ShoppingCart size={18} />
              <h2>Sales Management</h2>
            </div>
          </div>
          
          <div className="sales-table-container">
            <div className="table-controls">
              <div className="search-container">
                <Search className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by sale number or customer..." 
                  className="search-sale-input"
                  onChange={handleSearch}
                  value={searchQuery}
                />
              </div>
              <div className="filters">
                <div className="dropdown">
                  <span>All Status</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                <button className="export-btn">Export</button>
              </div>
            </div>
  
            <table className="sales-table">
              <thead>
                <tr>
                  <th>Sale Number</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSales.map((sale) => (
                  <tr key={sale.id}>
                    <td>{sale.id}</td>
                    <td>{sale.customer}</td>
                    <td>{sale.date}</td>
                    <td>{sale.items}</td>
                    <td>{sale.amount}</td>
                    <td>{sale.paymentMethod}</td>
                    <td>
                      <span className={`status-badge ${sale.status}`}>
                        {sale.status === 'completed' ? (
                          <>
                            <Check size={14} className="status-icon" />
                            completed
                          </>
                        ) : (
                          <>
                            <Clock size={14} className="status-icon" />
                            pending
                          </>
                        )}
                      </span>
                    </td>
                    <td>
                      <div className="action-icons">
                        <Eye size={18} />
                        <Download size={18} />
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

export default Sales;