import JWT from 'jsonwebtoken';

const isAuth = async (req, res, next) => {
  const { token } = req.headers;

  // Check if the token is present
  if (!token) {
    return res.json({ success: false, message: "Not authorized, please login again" });
  }

  try {
    // Verify the token using JWT
    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
    //console.log("Decoded token:", decoded); // Log the decoded token
    req.body.userid = decoded._id;// Store the user ID from the token for later use
    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "error" });
  }
};

export default isAuth;
