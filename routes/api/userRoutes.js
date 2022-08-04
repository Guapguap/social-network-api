const router = require("express").Router();

// object destructering from userControllers file
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers
} = require("../../controllers/userController");

// route for /api/users 
// get and post methods
router.route('/').get(getAllUsers).post(createUsers);

// route for /api/users/:id 
// get put and delete methods
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

module.exports = router;