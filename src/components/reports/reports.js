// reports.js
import React from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import './reports.css';
import Navigation from '../navigation/navigation';
import { MdSearch } from 'react-icons/md';  // Adjusted import
import bellIcon from '../assets/images/bell.png'; // Import the bell icon image

const Reports = () => {
  // Data for Monthly Sales Trend
  const monthlySalesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 4500 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 6500 },
    { name: 'May', sales: 4500 },
    { name: 'Jun', sales: 5000 },
  ];

  // Data for Product Category Distribution
  const productCategoryData = [
    { name: 'Electronics', value: 45, color: '#1E88E5' },
    { name: 'Furniture', value: 20, color: '#26C6DA' },
    { name: 'Home', value: 20, color: '#FF8A65' },
    { name: 'Accessories', value: 15, color: '#FFB74D' },
  ];

  // Data for Payment Method Distribution
  const paymentMethodData = [
    { name: 'Credit Card', value: 55, color: '#2196F3' },
    { name: 'Cash', value: 25, color: '#26A69A' },
    { name: 'Bank Transfer', value: 15, color: '#FFC107' },
    { name: 'Other', value: 5, color: '#FF7043' },
  ];

  // Data for Revenue vs. Expenses
  const revenueExpensesData = [
    { name: 'Jan', revenue: 9000, expenses: 4500, profit: 4500 },
    { name: 'Feb', revenue: 10500, expenses: 5000, profit: 5500 },
    { name: 'Mar', revenue: 12000, expenses: 6000, profit: 6000 },
    { name: 'Apr', revenue: 14000, expenses: 9000, profit: 9000 },
    { name: 'May', revenue: 13000, expenses: 8500, profit: 8000 },
    { name: 'Jun', revenue: 14500, expenses: 9500, profit: 8500 },
  ];

  // Data for Top Selling Products
  const topSellingProducts = [
    { id: 1, name: 'Smartphone X', category: 'Electronics', unitsSold: 120, revenue: 54000, profitMargin: 35 },
    { id: 2, name: 'Office Chair', category: 'Furniture', unitsSold: 85, revenue: 15300, profitMargin: 40 },
    { id: 3, name: 'USB Cable Type-C', category: 'Accessories', unitsSold: 310, revenue: 4030, profitMargin: 55 },
  ];

  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="reports-container">
          <div className="header">

            <h1>Reports</h1>
            <div className="search-notification">
              <div className="search-container">
                <MdSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="search-input"
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

          <div className="subheader">
            <div className="reports-analytics">
              <span className="icon">📊</span>
              <h2>Reports & Analytics</h2>
            </div>
            <div className="actions">
              <button className="date-range-btn">
                <span className="icon">📅</span>
                Date Range
              </button>
              <button className="export-btn">
                <span className="icon">📥</span>
                Export
              </button>
            </div>
          </div>

          <div className="tabs">
            <div className="tab active">Sales Analysis</div>
            <div className="tab">Inventory Reports</div>
            <div className="tab">Financial Reports</div>
            <div className="tab">Customer Analytics</div>
          </div>

          <div className="dashboard-grid">
            {/* Monthly Sales Trend */}
            <div className="dashboard-card">
              <h3>Monthly Sales Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlySalesData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip formatter={(value) => [`$${value}`, 'Sales']} />
                  <Bar dataKey="sales" fill="#22A7F0" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Product Category Distribution */}
            <div className="dashboard-card">
              <h3>Product Category Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={productCategoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {productCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Payment Method Distribution */}
            <div className="dashboard-card">
              <h3>Payment Method Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={paymentMethodData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {paymentMethodData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Revenue vs. Expenses */}
            <div className="dashboard-card">
              <h3>Revenue vs. Expenses</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={revenueExpensesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip formatter={(value) => [`$${value}`, '']} />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#2196F3" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="expenses" stroke="#FF9800" />
                  <Line type="monotone" dataKey="profit" stroke="#4CAF50" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Top Selling Products */}
            <div className="dashboard-card full-width">
              <h3>Top Selling Products</h3>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>PRODUCT NAME</th>
                    <th>CATEGORY</th>
                    <th>UNITS SOLD</th>
                    <th>REVENUE</th>
                    <th>PROFIT MARGIN</th>
                  </tr>
                </thead>
                <tbody>
                  {topSellingProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.unitsSold}</td>
                      <td>${product.revenue.toLocaleString()}</td>
                      <td>{product.profitMargin}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="view-report">
                <a href="#">View Full Report <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;