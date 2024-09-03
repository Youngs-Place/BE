const { applyFilters } = require('../utils/filterUtils');

// Mock data
const data = [
  { id: 1, city: 'Seoul', district: 'Jung-gu', status: 'Ongoing', target: 'General' },
  { id: 2, city: 'Busan', district: 'Haeundae', status: 'Completed', target: 'General' },
  { id: 3, city: 'Seoul', district: 'Gangnam', status: 'Ongoing', target: 'Special' },
  // ... more data
];

const getFilteredData = async (filters) => {
  // using mock data
  return applyFilters(data, filters);
};

module.exports = {
  getFilteredData,
};
