import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenandSetCookie from "../utils/generateToken.js";
export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmedPass, gender} = req.body;
        if(password !== confirmedPass) {
            return res.status(400).json({error:"Passwords don't match!"})
        }
        const user = await User.findOne({ username });
        
        if(user) {
            return res.status(400).json({error:"Username already exists"})
        }
        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run
        const boyProfilePic = 'https://placebear.com/200/300'
        const girlProfilePic = 'https://placebear.com/200/300'
        const otherProfilePic = 'https://placebear.com/200/300'

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilepic: gender === "male" ? boyProfilePic : 
                        gender === "female" ? girlProfilePic : 
                        otherProfilePic
        })
        

        if(newUser) {
            // jwt token here
            generateTokenandSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                username:newUser.username,
                profilepic:newUser.profilepic,
            });
        } else {
            res.status(400).json({error:"Invalid user data"});
        }
    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPassRight = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPassRight) {
            return res.status(400).json({error:"Invalid username or password"});
        }

        generateTokenandSetCookie(user._id, res);
        
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("error in login controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({error:"Internal server error"});
    }
    console.log("logoutUser")
}