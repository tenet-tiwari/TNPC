const JobApplication = require('../models/JobApplication');
const cloudinary = require('cloudinary').v2;
const JobPosting = require('../models/JobPosting'); // Assuming you have this model

exports.applyToJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, scholarId, branch, year, email, phoneNumber } = req.body;
    const file = req.file;

    let imageUrl = '';
    if (file) {
      // Upload image to Cloudinary
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });

        uploadStream.end(file.buffer); // Use file.buffer for multer's memory storage
      });

      imageUrl = result.secure_url;
    }


    // Check if the job posting exists
    const jobPosting = await JobPosting.findById(id);
    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }

    // Create a new job application
    const jobApplication = new JobApplication({
      jobId:id,
      fullName,
      scholarId,
      branch,
      year,
      email,
      phoneNumber,
      resume:imageUrl,
    });

    await jobApplication.save();

    res.status(201).json({ message: 'Job application submitted successfully', jobApplication });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find({});
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await JobApplication.findById(id);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    await JobApplication.findByIdAndDelete(id);

    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};