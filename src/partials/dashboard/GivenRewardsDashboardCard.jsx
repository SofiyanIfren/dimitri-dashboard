import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { getCssVariable } from '../../utils/Utils';

function GivenRewardsDashboardCard() {

  const chartData = {
    labels: ['Coffe', 'Cake', 'Meal', 'Child Toy', 'Discount'],
    datasets: [
      {
        label: 'Given rewards', 
        data: [
          536, 719, 397, 230, 120
        ],
        backgroundColor: [
          getCssVariable('--color-violet-500'),
          getCssVariable('--color-sky-500'),
          getCssVariable('--color-violet-800'),
          getCssVariable('--color-pink-400'),
          getCssVariable('--color-green-500'),
          getCssVariable('--color-blue-200'),
        ],
        hoverBackgroundColor: [
          getCssVariable('--color-violet-600'),
          getCssVariable('--color-sky-600'),
          getCssVariable('--color-violet-900'),
          getCssVariable('--color-pink-500'),
          getCssVariable('--color-green-600'),
          getCssVariable('--color-blue-300'),
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-4 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Given rewards (weekly)</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default GivenRewardsDashboardCard;
