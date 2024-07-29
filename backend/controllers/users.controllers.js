import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({
             _id: { $ne: loggedInUserId}, // find every user in db except for one that is not equal to the logged in w/ $ne
        }).select("-password");

        res.status(200).json(filteredUsers); // show only the users who are not the logged in one

    } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({error:"Internal server error"});
    }
}