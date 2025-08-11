import React from 'react';

import { useTexts } from "../../texts/TextsContext";

function TopRewardsDashboardCard() {

  const { texts, lang, setLang } = useTexts();

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{texts.topRewards}</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">{texts.rewardType}</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">{texts.totalCustomers}</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">{texts.totalStamps}</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">{texts.rewardsCost}</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">{texts.totalProfit}</div>
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
                    <div className="text-gray-800 dark:text-gray-100">{texts.coffee}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">5,362 {texts.members}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">53,620 {texts.visits}</div>
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
                    <div className="text-gray-800 dark:text-gray-100">{texts.cake}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">899 {texts.members}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">7,192 {texts.visits}</div>
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
                    <div className="text-gray-800 dark:text-gray-100">{texts.meal}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">265 {texts.members}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">3,975 {texts.visits}</div>
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
                    <div className="text-gray-800 dark:text-gray-100">{texts.childToy}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">230 {texts.members}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2,300 {texts.visits}</div>
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
                    <div className="text-gray-800 dark:text-gray-100">{texts.discount}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">150 {texts.members}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">750 {texts.visits}</div>
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
