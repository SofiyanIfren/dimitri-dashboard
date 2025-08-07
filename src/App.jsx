import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import HomePage from './pages/HomePage';
import CustomersPage from './pages/CustomersPage';
import ActivityPage from './pages/ActivityPage';
import NotificationPage from './pages/NotificationPage';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/customers" element={<CustomersPage />} />
        <Route exact path="/activity" element={<ActivityPage />} />
        <Route exact path="/notification" element={<NotificationPage />} />
      </Routes>
    </>
  );
}

export default App;
