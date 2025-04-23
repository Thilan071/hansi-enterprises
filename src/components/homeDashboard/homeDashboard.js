import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './homeDashboard.css';
import Navigation from '../navigation/navigation';

const HomeDashboard = () => {
  const [timeFilter, setTimeFilter] = useState('Daily');

  const dailyData = [
    { name: 'Mon', amount: 3200 },
    { name: 'Tue', amount: 2400 },
    { name: 'Wed', amount: 1600 },
    { name: 'Thu', amount: 2200 },
    { name: 'Fri', amount: 1400 },
    { name: 'Sat', amount: 1800 },
    { name: 'Sun', amount: 3000 },
  ];

  return (
    <div className="dashboard-container">
      <Navigation />
      
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
                <button 
                  className={`time-filter ${timeFilter === 'Daily' ? 'active' : ''}`}
                  onClick={() => setTimeFilter('Daily')}
                >
                  Daily
                </button>
                <button 
                  className={`time-filter ${timeFilter === 'Weekly' ? 'active' : ''}`}
                  onClick={() => setTimeFilter('Weekly')}
                >
                  Weekly
                </button>
                <button 
                  className={`time-filter ${timeFilter === 'Monthly' ? 'active' : ''}`}
                  onClick={() => setTimeFilter('Monthly')}
                >
                  Monthly
                </button>
              </div>
            </div>
            
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value/1000}k`}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Sales']}
                    cursor={{ fill: 'transparent' }}
                  />
                  <Bar 
                    dataKey="amount" 
                    fill="#4318FF"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
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