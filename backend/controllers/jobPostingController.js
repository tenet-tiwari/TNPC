const JobPosting = require('../models/JobPosting');

exports.addJobPosting = async (req, res) => {
  try {
    const { jobRole, companyName, jobDescription, skillsRequired, ctcOffered, jobLocation, eligibleBranches, eligibilityCriteria } = req.body;

    console.log(req.body);

    const jobPosting = new JobPosting({
      jobRole,
      companyName,
      jobDescription,
      skillsRequired: skillsRequired.split(','), // Convert comma-separated string to array
      ctcOffered,
      jobLocation,
      eligibleBranches: eligibleBranches.split(','), // Convert comma-separated string to array
      eligibilityCriteria
    });

    await jobPosting.save();
    res.status(201).json({ message: 'Job posting created successfully', jobPosting });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getJobPostings = async (req, res) => {
  try {
    const jobPostings = await JobPosting.find();
    res.status(200).json( jobPostings );
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
