import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

import { TextsProvider } from "./texts/TextsContext";

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
    <TextsProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/notification" element={<NotificationPage />} />
      </Routes>
    </TextsProvider>
  );
}

export default App;
