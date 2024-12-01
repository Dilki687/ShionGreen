const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

// Initialize OAuth2 Client
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// Helper function to generate JWT token
const generateJwtToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

// Signup Controller
exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    const token = generateJwtToken(newUser);
    res.status(201).json({ user: newUser, token });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Error signing up", error: err });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = generateJwtToken(user);
    res.status(200).json({ user, token });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Error logging in", error: err });
  }
};

// Google Login Controller
exports.googleLogin = async (req, res) => {
  const { tokenId } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    let user = await User.findOne({ email: payload.email });

    if (!user) {
      user = new User({
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
        password: null,
      });
      await user.save();
    }

    const token = generateJwtToken(user);
    res.status(200).json({ user, token });
  } catch (err) {
    console.error("Google Login Error:", err);
    res.status(400).json({ message: "Invalid Google token" });
  }
};

// Google Signup Controller
exports.googleSignup = async (req, res) => {
  const { tokenId } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { name, email } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        googleId: payload.sub,
        name,
        email,
        password: null,
      });
      await user.save();
    }

    const token = generateJwtToken(user);
    res.status(200).json({ user, token });
  } catch (err) {
    console.error("Google Signup Error:", err);
    res.status(400).json({ message: "Invalid Google token" });
  }
};
