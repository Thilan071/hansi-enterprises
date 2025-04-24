// Installments.js
import React, { useState } from 'react';
import './Installments.css';
import { Search, Eye, Bell, Check } from 'lucide-react';
import Navigation from '../navigation/navigation';  // Add this import

const Installments = () => {
  const [installmentPlans, setInstallmentPlans] = useState([
    {
      id: 'INS-1001',
      customer: 'John Smith',
      totalAmount: '$5,000.00',
      progress: { completed: 2, total: 6 },
      nextPayment: {
        amount: '$833.33',
        dueDate: '5/1/2025'
      },
      status: 'active'
    },
    {
      id: 'INS-995',
      customer: 'Emily Johnson',
      totalAmount: '$2,400.00',
      progress: { completed: 3, total: 4 },
      nextPayment: {
        amount: '$600.00',
        dueDate: '5/15/2025'
      },
      status: 'active'
    },
    {
      id: 'INS-990',
      customer: 'Michael Davis',
      totalAmount: '$1,800.00',
      progress: { completed: 4, total: 4 },
      nextPayment: {
        amount: null,
        dueDate: null,
        allPaid: true
      },
      status: 'completed'
    },
    {
      id: 'INS-985',
      customer: 'Sarah Wilson',
      totalAmount: '$3,600.00',
      progress: { completed: 0, total: 3 },
      nextPayment: {
        amount: '$1,200.00',
        dueDate: '4/15/2025'
      },
      status: 'overdue'
    }
  ]);

  // Calculate the progress percentage for the progress bar
  const getProgressPercentage = (completed, total) => {
    return (completed / total) * 100;
  };

  return (
    <div className="dashboard-layout">
      <Navigation />
      <div className="main-content">
        <div className="installments-container">
          <div className="header-row">
            <h1>Installments</h1>
            <div className="search-notification">
              <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
              </div>
              <div className="notification">
                <Bell className="notification-icon" />
                <span className="notification-badge">1</span>
              </div>
            </div>
          </div>

          <div className="installment-plans-section">
            <h2>Installment Plans</h2>
            <button className="create-plan-btn">
              <span className="icon-calendar"></span>
              Create New Plan
            </button>
          </div>

          <div className="installment-plans-section-secondary">
            <div className="installment-plans-header">
              <span className="icon-calendar"></span>
              <h2>Installment Plans</h2>
            </div>
          </div>
          
          <div className="installment-table-container">
            <div className="table-controls">
              <div className="search-products">
                <Search className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by customer or plan number..." 
                />
              </div>
              <div className="filters">
                <div className="category-filter">
                  <select>
                    <option>All Status</option>
                  </select>
                </div>
                <button className="export-btn">Export</button>
              </div>
            </div>

            <table className="installment-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Plan ID</th>
                  <th>Total Amount</th>
                  <th>Progress</th>
                  <th>Next Payment</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {installmentPlans.map((plan) => (
                  <tr key={plan.id}>
                    <td>{plan.customer}</td>
                    <td>{plan.id}</td>
                    <td>{plan.totalAmount}</td>
                    <td>
                      <div className="progress-container">
                        <div 
                          className={`progress-bar ${plan.status === 'completed' ? 'completed' : ''}`}
                          style={{ width: `${getProgressPercentage(plan.progress.completed, plan.progress.total)}%` }}
                        ></div>
                      </div>
                      <div className="progress-text">
                        {plan.progress.completed} of {plan.progress.total} installments paid
                      </div>
                    </td>
                    <td>
                      {plan.nextPayment.allPaid ? (
                        <div className="all-paid">
                          <Check size={16} className="check-icon" />
                          <span>All paid</span>
                        </div>
                      ) : (
                        <div className="next-payment">
                          <div className="payment-amount">{plan.nextPayment.amount}</div>
                          <div className="payment-due">Due {plan.nextPayment.dueDate}</div>
                        </div>
                      )}
                    </td>
                    <td>
                      <span className={`status-badge ${plan.status}`}>
                        {plan.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-icons">
                        <Eye size={18} />
                        {plan.status !== 'completed' && <Bell size={18} />}
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

export default Installments;