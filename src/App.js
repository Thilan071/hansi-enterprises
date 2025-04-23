import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './components/homeDashboard/homeDashboard';
import StockManagement from './components/stockManagement/stockManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/stock" element={<StockManagement />} />
      </Routes>
    </Router>
  );
}

export default App;