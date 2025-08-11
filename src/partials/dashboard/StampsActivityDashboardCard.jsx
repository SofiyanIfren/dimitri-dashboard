import React from 'react';

import TotalStampsBarChart from '../../charts/TotalStampsBarChart';

// Import utilities
import { getCssVariable } from '../../utils/Utils';

import { useTexts } from "../../texts/TextsContext";

function StampsActivityDashboardCard() {

  const { texts, lang, setLang } = useTexts();

  const chartData = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
    ],
    datasets: [
      // Light blue bars
      {
        label: texts.stamps,
        data: [
          8, 16, 9, 13, 8, 2,
        ],
        backgroundColor: getCssVariable('--color-sky-500'),
        hoverBackgroundColor: getCssVariable('--color-sky-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Blue bars
      {
        label: texts.rewards,
        data: [
          2, 3, 1, 5, 3, 0,
        ],
        backgroundColor: getCssVariable('--color-violet-500'),
        hoverBackgroundColor: getCssVariable('--color-violet-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-8 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{texts.stampsVsRewards}</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <TotalStampsBarChart key={lang} data={chartData} width={595} height={248} />
    </div>
  );
}

export default StampsActivityDashboardCard;
