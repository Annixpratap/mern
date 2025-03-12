import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorhandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashpassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error); // Forward the error to your error handling middleware
  }
};

export const signin = async (req, res, next) => {  // Added async
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); // Added await to handle the async operation

    if (!user) {
      // Return immediately after calling next to prevent further code execution
      return next(errorhandler(404, 'User not found'));
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return next(errorhandler(401, 'Invalid credentials')); // Return to prevent further execution
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(user); // Corrected to set cookie with token
  } catch (error) {
    next(error); // Forward the error to the error handling middleware
  }
};
