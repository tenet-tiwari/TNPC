const StudentProfile = require('../models/StudentProfile');
const BaseUser = require('../models/BaseUser');


exports.addOrUpdateProfile = async (req, res) => {
  try {
    const { githubUrl, linkedinUrl, portfolioUrl, resumeUrl, skills } = req.body;
    const userId = req.user._id.toString();
    const profile = await StudentProfile.findOne({ studentId: userId });

    if (profile) {
      // Update existing profile
      if (githubUrl !== null && githubUrl !== undefined) {
        profile.githubUrl = githubUrl;
      }
      if (linkedinUrl !== null && linkedinUrl !== undefined) {
        profile.linkedinUrl = linkedinUrl;
      }
      if (portfolioUrl !== null && portfolioUrl !== undefined) {
        profile.portfolioUrl = portfolioUrl;
      }
      if (resumeUrl !== null && resumeUrl !== undefined) {
        profile.resumeUrl = resumeUrl;
      }

      // Merge new skills with existing skills
      const existingSkills = profile.skills.map(skill => skill.skillName);
      skills.forEach(newSkill => {
        if (!existingSkills.includes(newSkill.skillName)) {
          profile.skills.push(newSkill);
        }
      });

      await profile.save();
      res.status(200).json({ message: 'Profile updated successfully', profile });
    } else {
      // Create new profile
      const newProfile = new StudentProfile({
        studentId: userId,
        githubUrl,
        linkedinUrl,
        portfolioUrl,
        resumeUrl,
        skills // Assuming skills is sent as an array of skill objects
      });

      await newProfile.save();
      res.status(201).json({ message: 'Profile created successfully', profile: newProfile });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



exports.getProfile = async (req, res) => {
  try {
    const user = await BaseUser.findById(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getStudentSkills = async (req, res) => {
  try {
    const studentId = req.user.id; // Assuming you have studentId in the token
    const skills = await StudentProfile.findOne({ studentId: studentId });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.getAdminProfile = async (req, res) => {
  try {
    const user = await BaseUser.findById(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
