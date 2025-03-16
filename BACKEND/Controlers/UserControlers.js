const User = require("../Model/UserModel");

//Display

const getAllUsers =async (req, res, next) =>  {

    let Users;

    //Get all users

    try{
        Users = await User.find();

    }catch (err) {
        console.log(err);
    }

    //Not found

    if(!Users) {

        return res.status(404).json({message:"User not found"});
    }

    //Display all users

    return res.status(200).json({Users});
};


//Data Insert

const addUser = async (req, res, next) => {
    
    const{name,gmail,age,address} = req.body;

    let users;

    try {
        users = new User({name,gmail,age,address});
        await users.save();
    }catch(err) {
        console.log(err);
    }

    //Do not insert users

    if(!users){

        return res.status(404).sent({message:"Unable to add users"});
    }

return res.status(200).send({users});

};


//Get by Id

const getById = async (req, res, next) => {

    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch(err) {
        console.log(err);
    }

    //Not available users

    if(!user){

        return res.status(404).send({message:"User not found"});
    }

return res.status(200).send({user});

};

//Update user details

const updateUser = async (req, res, next) => {

    const id = req.params.id;

    const{name,gmail,age,address} = req.body;

    let users;

    try {

        users = await User.findByIdAndUpdate(id, 
            { name: name, gmail: gmail,age: age, address: address});

            users = await users.save();
    }catch(err) {

        console.log(err);
    }

    //not upadte 

    if(!users){

        return res.status(404).send({message:"Unable to update user details"});
    }

return res.status(200).send({users});


};

//Delete user details

const deleteUser = async (req, res, next) => {

    const id = req.params.id;

    let user;

    try{

        user = await User.findByIdAndDelete(id)
    }catch(err) {

        console.log(err);
    }

    //not Delete 

    if(!user){

        return res.status(404).send({message:"Unable to Delete"});
    }

return res.status(200).send({user});
    
};


exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;