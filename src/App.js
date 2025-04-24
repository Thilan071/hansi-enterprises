import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './components/homeDashboard/homeDashboard';
import StockManagement from './components/stockManagement/stockManagement';
import CustomerBilling from './components/customerBilling/customerBilling';
import Installments from './components/Installments/Installments';
import Reminders from './components/reminders/reminders';
import Sales from './components/sales/sales';
import Reports from './components/reports/reports';
import Customers from './components/customers/customers';
import Settings from './components/setting/setting.js';  // Update this line

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/stock" element={<StockManagement />} />
        <Route path="/billing" element={<CustomerBilling />} />
        <Route path="/installments" element={<Installments />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;