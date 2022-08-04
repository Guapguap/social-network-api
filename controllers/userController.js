// Requiring the models to create records and to reference those new records
const { User, Thought } = require("../models");

module.exports = {

//Get all users
getAllUsers(req, res) {
    User.find({})
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
},

//Get single user
getUsersById(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate("thoughts")
    .populate("friends")
    .select("-__v")
    .then((user) =>
        !user
        ? res.status(404).json({ message: "No User find with that ID." })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},

//creates a user
createUsers(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
},

//update a user
updateUsers(req, res) {
    User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: req.body },
    { runValidators: true, new: true }
    )
    .then((user) =>
        !user
        ? res.status(404).json({ message: "No User find with this ID." })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
};
