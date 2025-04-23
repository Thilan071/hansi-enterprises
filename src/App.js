import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './components/homeDashboard/homeDashboard';
import StockManagement from './components/stockManagement/stockManagement';
import CustomerBilling from './components/customerBilling/customerBilling';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/stock" element={<StockManagement />} />
        <Route path="/billing" element={<CustomerBilling />} />
      </Routes>
    </Router>
  );
}

export default App;