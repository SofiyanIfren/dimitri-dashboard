import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import TotalStampsDashboardCard from '../partials/dashboard/TotalStampsDashboardCard';
import ActiveCustomersDashboardCard from '../partials/dashboard/ActiveCustomersDashboardCard';
import NewCustomersDashboardCard from '../partials/dashboard/NewCustomersDashboardCard';
import GivenRewardsDashboardCard from '../partials/dashboard/GivenRewardsDashboardCard';
import TopRewardsDashboardCard from '../partials/dashboard/TopRewardsDashboardCard'

import Banner from '../partials/Banner';

function Notification() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour envoyer la notification
    console.log('Notification envoyée:', { title, message });
    // Réinitialiser les champs après l'envoi
    setTitle('');
    setMessage('');
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

       <main className="grow p-6">
          <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Send Notification</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Body of the message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send
              </button>
            </form>
          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Notification;