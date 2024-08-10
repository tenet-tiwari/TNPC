

// const cloudinary = require('cloudinary').v2;
// //const User = require('../models/User');
// const Student = require('../models/Student');
// const Admin = require('../models/Admin');
// const BaseUser = require('../models/BaseUser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Cloudinary =require('../config/cloudinary');


// exports.register = async (req, res) => {
//   try {
//     const { role, name, email, password, gender, scholarId, branch, passingYear, adminPassKey } = req.body;
//     const file = req.file; // File uploaded by multer

//     let imageUrl = '';
//     if (file) {
//       // Upload image to Cloudinary
//       const result = await new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
//           if (error) {
//             reject(error);
//           } else {
//             resolve(result);
//           }
//         });

//         uploadStream.end(file.buffer); // Use file.buffer for multer's memory storage
//       });

//       imageUrl = result.secure_url;
//     }

//     let user;
    
//     if (role === 'student') {
//       user = new Student({ role, name, email, password:await bcrypt.hash(password, 12), image:imageUrl, gender, scholarId, branch, passingYear });
//     } else if (role === 'admin') {
//       user = new Admin({ role, name, email, password:await bcrypt.hash(password, 12), image:imageUrl, adminPassKey });
//     } else {
//       return res.status(400).json({ message: 'Invalid role specified' });
//     }

//     await user.save();
//     const SavedUser=await BaseUser.findOne({email:user.email});
//     const token = jwt.sign({ userId: SavedUser._id, role: SavedUser.role }, process.env.JWT_SECRET, { expiresIn: '3h' });
//     res.status(201).json({ message: 'User registered successfully', user,token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };



// exports.login = async (req, res) => {
//   try {
//     const { role, email, password, scholarId, adminPassKey } = req.body;

//     // Find user based on role
//     let user;
//     if (role === 'student') {
//       user = await Student.findOne({ email, role });
//       if (!user) return res.status(404).json({ message: 'Student not found' });

//       // Check scholarId for student
//       if (user.scholarId !== scholarId) {
//         return res.status(400).json({ message: 'Invalid scholar ID' });
//       }
//     } else if (role === 'admin') {
//       user = await Admin.findOne({ email, role });
//       if (!user) return res.status(404).json({ message: 'Admin not found' });

//       // Check adminPassKey for admin
//       if (user.adminPassKey !== adminPassKey) {
//         return res.status(400).json({ message: 'Invalid admin pass key' });
//       }
//     } else {
//       return res.status(400).json({ message: 'Invalid role specified' });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     // Generate token
//     const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };


// exports.verifyTokenAndRole = async (req, res) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await BaseUser.findById(decoded.userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json({ role: user.role });
//   } catch (error) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };


// exports.getAllUsers = async (req, res) => {
//   try {
//     BaseUser.find({})
//         .then(users => {
//           res.json(users);
//         })
//         .catch(err => {
//           console.error('Error fetching users:', err);
//           res.status(500).json({ message: 'Internal Server Error' });
//         });
//       ;
//   } catch (error) {
//     console.error('Error in getAllUsers:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };





const cloudinary = require('cloudinary').v2;
const Student = require('../models/Student');
const Admin = require('../models/Admin');
const BaseUser = require('../models/BaseUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { role, name, email, password, gender, scholarId, branch, passingYear, adminPassKey } = req.body;
    const file = req.file; // File uploaded by multer

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

    let user;
    
    if (role === 'student') {
      user = new Student({ role, name, email, password: await bcrypt.hash(password, 12), image: imageUrl, gender, scholarId, branch, passingYear });
    } else if (role === 'admin') {
      if (adminPassKey !== process.env.ADMIN_PASS_KEY) {
        return res.status(400).json({ message: 'Invalid admin pass key' });
      }
      user = new Admin({ role, name, email, password: await bcrypt.hash(password, 12), image: imageUrl });
    } else {
      return res.status(400).json({ message: 'Invalid role specified' });
    }

    await user.save();
    const SavedUser = await BaseUser.findOne({ email: user.email });
    const token = jwt.sign({ userId: SavedUser._id, role: SavedUser.role }, process.env.JWT_SECRET, { expiresIn: '3h' });
    res.status(201).json({ message: 'User registered successfully', user, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { role, email, password, scholarId, adminPassKey } = req.body;

    // Find user based on role
    let user;
    if (role === 'student') {
      user = await Student.findOne({ email, role });
      if (!user) return res.status(404).json({ message: 'Student not found' });

      // Check scholarId for student
      if (user.scholarId !== scholarId) {
        return res.status(400).json({ message: 'Invalid scholar ID' });
      }
    } else if (role === 'admin') {
      user = await Admin.findOne({ email, role });
      if (!user) return res.status(404).json({ message: 'Admin not found' });

      // Check adminPassKey for admin
      if (adminPassKey !== process.env.ADMIN_PASS_KEY) {
        return res.status(400).json({ message: 'Invalid admin pass key' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid role specified' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '3h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.verifyTokenAndRole = async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await BaseUser.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ role: user.role });
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    BaseUser.find({})
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      });
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
