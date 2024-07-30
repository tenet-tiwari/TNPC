


const PlacementStat = require('../models/PlacementStat');

exports.addOrUpdatePlacementStat = async (req, res) => {
  try {
    const { year, branches } = req.body;

    // Ensure branches is an array
    if (!Array.isArray(branches)) {
      return res.status(400).json({ message: 'Branches must be an array' });
    }

    let placementStat = await PlacementStat.findOne({ year });

    if (!placementStat) {
      placementStat = new PlacementStat({ year, branches });
    } else {
      placementStat.branches = branches;
    }

    await placementStat.save();

    res.status(201).json({ message: 'Placement stats updated successfully', placementStat });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.getPlacementStats = async (req, res) => {
  try {
    // Fetch all placement stats
    const placementStats = await PlacementStat.find();
    //console.log(placementStats);

    // Create a year-wise data object
    const yearWiseData = {};
    placementStats.forEach(stat => {
      yearWiseData[stat.year] = stat.branches.map(branch => ({
        name: branch.branchName,
        eligible: branch.studentsEligible,
        offers: branch.offersMade,
        placed: branch.studentsPlaced
      }));
    });

    res.status(200).json(yearWiseData);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

