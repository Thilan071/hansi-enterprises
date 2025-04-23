import React from 'react';
import './homeDashboard.css';

const HomeDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">Business OS</div>
        <div className="sidebar-menu">
          <div className="menu-item active">
            <i className="icon dashboard-icon"></i>
            <span>Dashboard</span>
          </div>
          <div className="menu-item">
            <i className="icon stock-icon"></i>
            <span>Stock Management</span>
          </div>
          <div className="menu-item">
            <i className="icon billing-icon"></i>
            <span>Customer Billing</span>
          </div>
          <div className="menu-item">
            <i className="icon installments-icon"></i>
            <span>Installments</span>
          </div>
          <div className="menu-item">
            <i className="icon reminders-icon"></i>
            <span>Reminders</span>
          </div>
          <div className="menu-item">
            <i className="icon sales-icon"></i>
            <span>Sales</span>
          </div>
          <div className="menu-item">
            <i className="icon reports-icon"></i>
            <span>Reports</span>
          </div>
          <div className="menu-item">
            <i className="icon customers-icon"></i>
            <span>Customers</span>
          </div>
          <div className="menu-item">
            <i className="icon settings-icon"></i>
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
      
      <div className="main-content">
        <div className="top-bar">
          <div className="page-title">Dashboard</div>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="notification-icon">
            <span className="notification-badge">1</span>
          </div>
        </div>
        
        <div className="dashboard-content">
          <h2 className="section-title">Dashboard Overview</h2>
          
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-title">Total Sales</div>
                <div className="stat-icon blue"></div>
              </div>
              <div className="stat-value">$24,780</div>
              <div className="stat-change positive">+5% vs last period</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-title">Inventory Items</div>
                <div className="stat-icon blue"></div>
              </div>
              <div className="stat-value">584</div>
              <div className="stat-change positive">+3% vs last period</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-title">Pending Invoices</div>
                <div className="stat-icon blue"></div>
              </div>
              <div className="stat-value">12</div>
              <div className="stat-change">vs last period</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-title">Active Customers</div>
                <div className="stat-icon blue"></div>
              </div>
              <div className="stat-value">248</div>
              <div className="stat-change positive">+20% vs last period</div>
            </div>
          </div>
          
          <div className="sales-overview">
            <div className="overview-header">
              <h3>Sales Overview</h3>
              <div className="time-filters">
                <button className="time-filter active">Daily</button>
                <button className="time-filter">Weekly</button>
                <button className="time-filter">Monthly</button>
              </div>
            </div>
            
            <div className="chart-container">
              <div className="chart">
                <div className="chart-labels">
                  <div className="chart-label">$4k</div>
                  <div className="chart-label">$3k</div>
                  <div className="chart-label">$2k</div>
                  <div className="chart-label">$1k</div>
                  <div className="chart-label">$0k</div>
                </div>
                <div className="chart-bars">
                  <div className="chart-bar">
                    <div className="bar-column" style={{height: '80%'}}></div>
                    <div className="bar-label">Mon</div>
                  </div>
                  <div className="chart-bar">
                    <div className="bar-column" style={{height: '60%'}}></div>
                    <div className="bar-label">Tue</div>
                  </div>
                  <div className="chart-bar">
                    <div className="bar-column" style={{height: '40%'}}></div>
                    <div className="bar-label">Wed</div>
                  </div>
                  <div className="chart-bar">
                    <div className="bar-column" style={{height: '55%'}}></div>
                    <div className="bar-label">Thu</div>
                  </div>
                  <div className="chart-bar">
                    <div className="bar-column" style={{height: '35%'}}></div>
                    <div className="bar-label">Fri</div>
                  </div>
                  <div className="chart-bar">
                    <div className="bar-column" style={{height: '45%'}}></div>
                    <div className="bar-label">Sat</div>
                  </div>
                  <div className="chart-bar">
                    <div className="bar-column" style={{height: '75%'}}></div>
                    <div className="bar-label">Sun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="activity-section">
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-tabs">
                <button className="activity-tab active">All</button>
                <button className="activity-tab">Sales</button>
                <button className="activity-tab">Stock</button>
                <button className="activity-tab">Payments</button>
              </div>
              
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon blue"></div>
                  <div className="activity-details">
                    <div className="activity-title">New Sale</div>
                    <div className="activity-desc">Invoice #1234 - $1,200.00</div>
                    <div className="activity-time">30 minutes ago</div>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon orange"></div>
                  <div className="activity-details">
                    <div className="activity-title">Stock Alert</div>
                    <div className="activity-desc">Product XYZ is running low (2 items left)</div>
                    <div className="activity-time">25 minutes ago</div>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon green"></div>
                  <div className="activity-details">
                    <div className="activity-title">Payment Received</div>
                    <div className="activity-desc">Customer ABC paid $540.00</div>
                    <div className="activity-time">40 minutes ago</div>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon blue"></div>
                  <div className="activity-details">
                    <div className="activity-title">New Sale</div>
                    <div className="activity-desc">Invoice #1323 - $520.00</div>
                    <div className="activity-time">1 hour ago</div>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon orange"></div>
                  <div className="activity-details">
                    <div className="activity-title">Stock Update</div>
                    <div className="activity-desc">Received 50 units of Product ABC</div>
                    <div className="activity-time">2 hours ago</div>
                  </div>
                </div>
              </div>
              
              <button className="view-all-btn">View All Activity</button>
            </div>
          </div>
          
          <div className="bottom-panels">
            <div className="low-stock">
              <div className="panel-header">
                <h3>Low Stock Alert</h3>
                <button className="view-all">View All</button>
              </div>
              
              <table className="stock-table">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>SKU</th>
                    <th>CATEGORY</th>
                    <th>STOCK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Smartphone X</td>
                    <td>SM-X100</td>
                    <td>Electronics</td>
                    <td className="low-count">5 left</td>
                  </tr>
                  <tr>
                    <td>Desk Lamp</td>
                    <td>DL-220</td>
                    <td>Home</td>
                    <td className="low-count">3 left</td>
                  </tr>
                  <tr>
                    <td>USB Cable Type-C</td>
                    <td>USB-TC</td>
                    <td>Accessories</td>
                    <td className="low-count">7 left</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="pending-payments">
              <div className="panel-header">
                <h3>Pending Payments</h3>
                <button className="view-all">View All</button>
              </div>
              
              <div className="payments-list">
                <div className="payment-item">
                  <div className="payment-details">
                    <div className="company">Acme Corporation</div>
                    <div className="invoice">Invoice: INV-1001</div>
                  </div>
                  <div className="payment-actions">
                    <button className="send-reminder">Send Reminder</button>
                    <button className="view-invoice">View Invoice</button>
                  </div>
                  <div className="payment-amount">
                    <div className="amount">$2,500.00</div>
                    <div className="status upcoming">
                      <span>Upcoming</span>
                      <span>Due Apr 25, 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="payment-item">
                  <div className="payment-details">
                    <div className="company">Global Industries</div>
                    <div className="invoice">Invoice: INV-998</div>
                  </div>
                  <div className="payment-actions">
                    <button className="send-reminder">Send Reminder</button>
                    <button className="view-invoice">View Invoice</button>
                  </div>
                  <div className="payment-amount">
                    <div className="amount">$1,200.00</div>
                    <div className="status overdue">
                      <span>Overdue</span>
                      <span>Due Apr 20, 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="payment-item">
                  <div className="payment-details">
                    <div className="company">Smith Enterprises</div>
                    <div className="invoice">Invoice: INV-1002</div>
                  </div>
                  <div className="payment-actions">
                    <button className="send-reminder">Send Reminder</button>
                    <button className="view-invoice">View Invoice</button>
                  </div>
                  <div className="payment-amount">
                    <div className="amount">$3,400.00</div>
                    <div className="status upcoming">
                      <span>Upcoming</span>
                      <span>Due Apr 30, 2025</span>
                    </div>
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

export default HomeDashboard;