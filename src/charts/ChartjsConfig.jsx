// Import Chart.js
import { Chart, Tooltip } from 'chart.js';
// Import Tailwind config
import { adjustColorOpacity, getCssVariable } from '../utils/Utils';

Chart.register(Tooltip);

// Define Chart.js default settings
Chart.defaults.font.family = '"Inter", sans-serif';
Chart.defaults.font.weight = 500;
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.displayColors = false;
Chart.defaults.plugins.tooltip.mode = 'nearest';
Chart.defaults.plugins.tooltip.intersect = false;
Chart.defaults.plugins.tooltip.position = 'nearest';
Chart.defaults.plugins.tooltip.caretSize = 0;
Chart.defaults.plugins.tooltip.caretPadding = 20;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.padding = 8;

// Function that generates a gradient for line charts
export const chartAreaGradient = (ctx, chartArea, colorStops) => {
  if (!ctx || !chartArea || !colorStops || colorStops.length === 0) {
    return 'transparent';
  }
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  colorStops.forEach(({ stop, color }) => {
    gradient.addColorStop(stop, color);
  });
  return gradient;
};

export const chartColors = {
  textColor: {
    light: '#333333', // black
    dark: '#c69c6d', // light brown
  },
  gridColor: {
    light: '#c69c6d', // light brown
    dark: '#654738', // brown
  },
  backdropColor: {
    light: '#FFFFFF', // white
    dark: '#333333', // black
  },
  tooltipTitleColor: {
    light: '#333333', // black
    dark: '#FFFFFF', // white
  },
  tooltipBodyColor: {
    light: '#654738', // brown
    dark: '#c69c6d', // light brown
  },
  tooltipBgColor: {
    light: '#FFFFFF', // white
    dark: '#654738', // brown
  },
  tooltipBorderColor: {
    light: '#c69c6d', // light brown
    dark: '#E94E77', // pink
  },
};
