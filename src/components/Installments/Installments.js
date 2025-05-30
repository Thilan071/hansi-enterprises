// Installments.js
import React, { useState } from 'react';
import './Installments.css';  // Fixed import case to match actual file name
import { Search, Eye, Check } from 'lucide-react';
import Navigation from '../navigation/navigation';
import bellIcon from '../assets/images/bell.png';

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
          {/* Header with notification bell */}
          <div className="header-row">
            <h1>Installments</h1>
            <div className="search-notification">
              <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
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

          <div className="installment-plans-section">
            <h2>Installment Plans</h2>
            <button className="create-plan-btn">
              <span>Create New Plan</span>
            </button>
          </div>

          <div className="installment-plans-section-secondary">
            <div className="installment-plans-header">
              <div className="header-with-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <h2>Installment Plans</h2>
              </div>
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
                        {plan.status !== 'completed' && (
                          <img 
                            src={bellIcon} 
                            alt="Notification" 
                            style={{ width: '18px', height: '18px' }}
                          />
                        )}
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