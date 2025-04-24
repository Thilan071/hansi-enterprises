import React, { useState } from 'react';
import './stockManagement.css';
import Navigation from '../navigation/navigation';
import { MdSearch, MdAdd, MdNotifications, MdInventory } from 'react-icons/md';

const StockManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([
    {
      name: 'Smartphone X',
      sku: 'SM-X100',
      category: 'Electronics',
      supplier: 'TechSuppliers Inc.',
      price: '$699.99',
      stock: 24,
      lastUpdated: '4/15/2025'
    },
    {
      name: 'Desk Lamp',
      sku: 'DL-220',
      category: 'Home',
      supplier: 'HomeDeco Ltd.',
      price: '$45.50',
      stock: 3,
      lastUpdated: '4/17/2025'
    },
    {
      name: 'USB Cable Type-C',
      sku: 'USB-TC',
      category: 'Accessories',
      supplier: 'ElectroComp',
      price: '$12.99',
      stock: 7,
      lastUpdated: '4/18/2025'
    },
    {
      name: 'Wireless Mouse',
      sku: 'WM-440',
      category: 'Electronics',
      supplier: 'TechSuppliers Inc.',
      price: '$29.99',
      stock: 42,
      lastUpdated: '4/14/2025'
    },
    {
      name: 'Office Chair',
      sku: 'OC-500',
      category: 'Furniture',
      supplier: 'FurniWorld',
      price: '$179.99',
      stock: 12,
      lastUpdated: '4/10/2025'
    }
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery) ||
    product.sku.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="stock-header">
          <h1>Stock</h1>
          <div className="search-notification">
            <div className="search-container">
              <MdSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="search-input"
                onChange={handleSearch}
                value={searchQuery}
              />
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
              <MdInventory className="inventory-icon" />
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
                <input 
                  type="text" 
                  placeholder="Search products by name or SKU..." 
                  onChange={handleSearch}
                  value={searchQuery}
                />
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
                {filteredProducts.map((product) => (
                  <tr key={product.sku}>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>{product.category}</td>
                    <td>{product.supplier}</td>
                    <td>{product.price}</td>
                    <td>
                      <span className={`stock-${product.stock < 10 ? 'low' : 'normal'}`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td>{product.lastUpdated}</td>
                    <td className="actions">
                      <button className="edit-btn"></button>
                      <button className="delete-btn"></button>
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

export default StockManagement;