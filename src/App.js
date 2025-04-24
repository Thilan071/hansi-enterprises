import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './components/homeDashboard/homeDashboard';
import StockManagement from './components/stockManagement/stockManagement';
import CustomerBilling from './components/customerBilling/customerBilling';
import Installments from './components/Installments/Installments';
import Reminders from './components/reminders/reminders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/stock" element={<StockManagement />} />
        <Route path="/billing" element={<CustomerBilling />} />
        <Route path="/installments" element={<Installments />} />
        <Route path="/reminders" element={<Reminders />} />
      </Routes>
    </Router>
  );
}

export default App;