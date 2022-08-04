const router = require("express").Router();

// object destructering from thoughtController file
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

// root route
// get method
router.route('/')
.get(getAllThoughts);

// route for /api/thoughts/:id 
// get, put, and delete methods
router.route('/:id')
.get(getThoughtsById)
.put(updateThoughts)
.delete(deleteThoughts); 

// route for /api/thoughts/:userId 
// post method for thought
router.route('/:userId')
.post(createThoughts);

// route for /api/thoughts/:thoughtId/reactions 
// post method for reaction
router.route('/:thoughtId/reactions')
.post(addReaction);

// route for /api/thoughts/:thoughtId/reactionId 
// delete method for specified reaction
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;