const { User, Thought } = require("../models");

module.exports = {
    
// Get all thoughts
getAllThoughts(req, res) {
      Thought.find({})
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

// get a specified thought
getThoughtsById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .select("-__v")
    .then((thought) =>
        !thought
        ? res.status(404).json({ message: "No Thought find with this ID!" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},
//create a thought and push the created thought's _id to the associated user's thoughts array field
createThoughts(req, res) {
    Thought.create(req.body)
    .then(({ _id }) => {
        return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: _id } },
        { new: true }
        );
    })
    .then((thought) =>
        !thought
        ? res.status(404).json({ message: "No User find with this ID!" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

updateThoughts(req, res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$set: req.body},
        { runValidators: true, New: true}
    )
    .then((user) =>
    !user
        ? res.status(404).json({message: "No thought found with this Id."})
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
}