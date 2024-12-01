const express = require("express");
const {
  signup,
  login,
  googleLogin,
  googleSignup,
} = require("../controllers/authController"); // Import controller functions

const router = express.Router();

// Routes
router.post("/signup", signup); // Signup route
router.post("/login", login); // Login route
router.post("/google", googleLogin); // Google login route
router.post("/google-signup", googleSignup); // Google signup route

module.exports = router;
