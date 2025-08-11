import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

import { useTexts } from "../../texts/TextsContext";

function CustomersDashboardCard() {

  const { texts, lang, setLang } = useTexts();

  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      stamps: '32',
      spent: '$1,253.66',
      lastStamp: '01/01/2025',
      location: '🇺🇸',
    },
    {
      id: '1',
      image: Image02,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      stamps: '21',
      spent: '$1,013.04',
      lastStamp: '01/01/2025',
      location: '🇩🇪',
    },
    {
      id: '2',
      image: Image03,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      stamps: '15',
      spent: '$956.00',
      lastStamp: '01/01/2025',
      location: '🇫🇷',
    },
    {
      id: '3',
      image: Image04,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      stamps: '14',
      spent: '$895.66',
      lastStamp: '01/01/2025',
      location: '🇮🇹',
    },
    {
      id: '4',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      stamps: '11',
      spent: '$789.66',
      lastStamp: '01/01/2025',
      location: '🇬🇧',
    },
    {
      id: '5',
      image: Image01,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      stamps: '32',
      spent: '$1,253.66',
      lastStamp: '01/01/2025',
      location: '🇺🇸',
    },
    {
      id: '6',
      image: Image02,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      stamps: '21',
      spent: '$1,013.04',
      lastStamp: '01/01/2025',
      location: '🇩🇪',
    },
    {
      id: '7',
      image: Image03,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      stamps: '15',
      spent: '$956.00',
      lastStamp: '01/01/2025',
      location: '🇫🇷',
    },
    {
      id: '8',
      image: Image04,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      stamps: '14',
      spent: '$895.66',
      lastStamp: '01/01/2025',
      location: '🇮🇹',
    },
    {
      id: '9',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      stamps: '11',
      spent: '$789.66',
      lastStamp: '01/01/2025',
      location: '🇬🇧',
    },
    {
      id: '10',
      image: Image01,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      stamps: '32',
      spent: '$1,253.66',
      lastStamp: '01/01/2025',
      location: '🇺🇸',
    },
    {
      id: '11',
      image: Image02,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      stamps: '21',
      spent: '$1,013.04',
      lastStamp: '01/01/2025',
      location: '🇩🇪',
    },
    {
      id: '12',
      image: Image03,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      stamps: '15',
      spent: '$956.00',
      lastStamp: '01/01/2025',
      location: '🇫🇷',
    },
    {
      id: '13',
      image: Image04,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      stamps: '14',
      spent: '$895.66',
      lastStamp: '01/01/2025',
      location: '🇮🇹',
    },
    {
      id: '14',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      stamps: '11',
      spent: '$789.66',
      lastStamp: '01/01/2025',
      location: '🇬🇧',
    },
    {
      id: '15',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      stamps: '11',
      spent: '$789.66',
      lastStamp: '01/01/2025',
      location: '🇬🇧',
    },
    {
      id: '16',
      image: Image01,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      stamps: '32',
      spent: '$1,253.66',
      lastStamp: '01/01/2025',
      location: '🇺🇸',
    },
    {
      id: '17',
      image: Image02,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      stamps: '21',
      spent: '$1,013.04',
      lastStamp: '01/01/2025',
      location: '🇩🇪',
    },
    {
      id: '18',
      image: Image03,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      stamps: '15',
      spent: '$956.00',
      lastStamp: '01/01/2025',
      location: '🇫🇷',
    },
    {
      id: '19',
      image: Image04,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      stamps: '14',
      spent: '$895.66',
      lastStamp: '01/01/2025',
      location: '🇮🇹',
    },
    {
      id: '20',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      stamps: '11',
      spent: '$789.66',
      lastStamp: '01/01/2025',
      location: '🇬🇧',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{texts.bestCustomers}</h2>
      </header>      
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">{texts.name}</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">{texts.email}</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">{texts.stamps}</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">{texts.spent}</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">{texts.lastStamp}</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">{texts.country}</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-gray-800 dark:text-gray-100">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.stamps}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.spent}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.lastStamp}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.location}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default CustomersDashboardCard;
