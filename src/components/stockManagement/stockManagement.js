import React from 'react';
import './stockManagement.css';
import Navigation from '../navigation/navigation';
import { MdSearch, MdAdd, MdNotifications } from 'react-icons/md';

const StockManagement = () => {
  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="stock-header">
          <h1>Stock</h1>
          <div className="search-notification">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <div className="notification">
              <MdNotifications className="notification-icon" />
              <span className="notification-badge">1</span>
            </div>
          </div>
        </div>

        <div className="stock-content">
          <h2 className="content-title">Stock Management</h2>
          
          <div className="section-header">
            <div className="section-title">
              <MdAdd className="inventory-icon" />
              <h3>Inventory Management</h3>
            </div>
            <div className="action-buttons">
              <button className="add-product-btn">
                <MdAdd className="btn-icon" />
                Add New Product
              </button>
            </div>
          </div>
          
          <div className="inventory-table-container">
            <div className="table-controls">
              <div className="search-products">
                <MdSearch className="search-icon" />
                <input type="text" placeholder="Search products by name or SKU..." />
              </div>
              <div className="filters">
                <div className="category-filter">
                  <select>
                    <option>All Categories</option>
                  </select>
                </div>
                <button className="export-btn">Export</button>
              </div>
            </div>
            
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Supplier</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smartphone X</td>
                  <td>SM-X100</td>
                  <td>Electronics</td>
                  <td>TechSuppliers Inc.</td>
                  <td>$699.99</td>
                  <td><span className="stock-normal">24 units</span></td>
                  <td>4/15/2025</td>
                  <td className="actions">
                    <button className="edit-btn"></button>
                    <button className="delete-btn"></button>
                  </td>
                </tr>
                <tr>
                  <td>Desk Lamp</td>
                  <td>DL-220</td>
                  <td>Home</td>
                  <td>HomeDeco Ltd.</td>
                  <td>$45.50</td>
                  <td><span className="stock-low">3 units</span></td>
                  <td>4/17/2025</td>
                  <td className="actions">
                    <button className="edit-btn"></button>
                    <button className="delete-btn"></button>
                  </td>
                </tr>
                <tr>
                  <td>USB Cable Type-C</td>
                  <td>USB-TC</td>
                  <td>Accessories</td>
                  <td>ElectroComp</td>
                  <td>$12.99</td>
                  <td><span className="stock-low">7 units</span></td>
                  <td>4/18/2025</td>
                  <td className="actions">
                    <button className="edit-btn"></button>
                    <button className="delete-btn"></button>
                  </td>
                </tr>
                <tr>
                  <td>Wireless Mouse</td>
                  <td>WM-440</td>
                  <td>Electronics</td>
                  <td>TechSuppliers Inc.</td>
                  <td>$29.99</td>
                  <td><span className="stock-normal">42 units</span></td>
                  <td>4/14/2025</td>
                  <td className="actions">
                    <button className="edit-btn"></button>
                    <button className="delete-btn"></button>
                  </td>
                </tr>
                <tr>
                  <td>Office Chair</td>
                  <td>OC-500</td>
                  <td>Furniture</td>
                  <td>FurniWorld</td>
                  <td>$179.99</td>
                  <td><span className="stock-normal">12 units</span></td>
                  <td>4/10/2025</td>
                  <td className="actions">
                    <button className="edit-btn"></button>
                    <button className="delete-btn"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockManagement;