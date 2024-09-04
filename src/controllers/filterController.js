const dataService = require('../services/dataService');

const getData = async (req, res) => {
  try {
    const filters = req.query;
    const data = await dataService.getFilteredData(filters);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getData,
};
