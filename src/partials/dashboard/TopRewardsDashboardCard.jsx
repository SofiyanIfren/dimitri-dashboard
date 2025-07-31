import React from 'react';

function TopRewardsDashboardCard() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top Rewards</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Reward Type</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Total Customers</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Total Stamps</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Rewards Cost</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Total Profit</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2 sm:mr-3">☕️</span>
                    <div className="text-gray-800 dark:text-gray-100">Coffe</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">5,362 members</div>
                </td>
                <td className="p-2">
                  <div className="text-center">53,620 visits</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$10,992.1</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$109,921.0</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2 sm:mr-3">🍰</span>
                    <div className="text-gray-800 dark:text-gray-100">Cake</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">899 members</div>
                </td>
                <td className="p-2">
                  <div className="text-center">7,192 visits</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$3,146.5</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$25,172.0</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2 sm:mr-3">🍽️</span>
                    <div className="text-gray-800 dark:text-gray-100">Meal</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">265 members</div>
                </td>
                <td className="p-2">
                  <div className="text-center">3,975 visits</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$1,192.5</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$17,887.5</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2 sm:mr-3">🧸</span>
                    <div className="text-gray-800 dark:text-gray-100">Child Toy</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">230 members</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2,300 visits</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$345.0</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$46,000.0</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2 sm:mr-3">🏷️</span>
                    <div className="text-gray-800 dark:text-gray-100">Discount</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">150 members</div>
                </td>
                <td className="p-2">
                  <div className="text-center">750 visits</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$4,500.0</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$18,000.0</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TopRewardsDashboardCard;
