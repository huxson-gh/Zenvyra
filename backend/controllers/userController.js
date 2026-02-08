import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// create token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}


// ----------------------------Route for user login----------------------------
const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if(!user){
             return res.status(200).json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            const token = createToken(user._id);
            res.status(200).json({ success: true, message: "User logged in successfully", token });
        }
        else{
            res.status(200).json({ success: false, message: "Invalid credentials" });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error in registering user", error,});
    }

}


// ------------------Route for user registration---------------------------
const registerUser = async (req,res) => {
    try {

        const {name,email,password} = req.body;

        // checking useralready exists or not
        const exists = await userModel.findOne({email})
        if(exists){
            return res.status(200).json({success : false, message : "User already exists"});
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.status(200).json({success : false, message : "Invalid Email"});
        }
        if(password.length < 8){
            return res.status(200).json({success : false, message : "Please enter a strong password"});
        }   

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.status(200).json({success : true, message : "User registered successfully", token});

    } 
    catch (error) {
        console.log(error)
        res.status(500).json({success:false, message : "Error in registering user", error});
    }
}


// ------------------------ Route for admin login ----------------------------
const adminLogin = async (req,res) => {
    try {
        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success: true, token})
        }
        else {
            res.json({ success: false, message: "Invalid Credentials" });
        }
        
    } catch (error) {
         console.log(error);
         res
           .status(500)
           .json({
             success: false,
             message: "Error in registering user",
             error,
           });
    }

}


// ------------------------- Route to get user profile -------------------------
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId).select("-password");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin, getProfile };
