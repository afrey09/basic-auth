' use strict';

const base64 = require('base64');
const bcrypt = require('bcrypt');
const { userCollection } = require('../models');

const basicAuth = async (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');

  try {
    const user = await userCollection.findOne({ where: { username: username }});
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      req.user = user;
      next();
    } 
    else {
      throw new Error('Invalid Credentials');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }
};

module.exports = basicAuth;