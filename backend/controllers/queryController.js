const Query = require('../models/Query');

exports.submitQuery = async (req, res) => {
  try {
    const { name, scholarId, branch, email, query } = req.body;

    const newQuery = new Query({
      name,
      scholarId,
      branch,
      email,
      query
    });

    await newQuery.save();
    res.status(201).json({ message: 'Query submitted successfully', query: newQuery });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
