

const jwt = require('jsonwebtoken');
const BaseUser = require('../models/BaseUser');

const authMiddleware = (allowedRoles = []) => {
  return async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const Buser = await BaseUser.findById(decoded.userId);

      if (!Buser) {
        return res.status(403).json({ message: 'Access denied, user not found' });
      }

      if (!allowedRoles.includes(Buser.role)) {
        return res.status(403).json({ message: `Access denied, only ${allowedRoles.join(' or ')} allowed` });
      }

      req.user = Buser;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };
};

module.exports = authMiddleware;


