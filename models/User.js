const {Schema, Model} = require("mongoose");

const UserSchema = new Schema({

    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true 
    },

    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},

    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

// create the User Model using the Schema
const User = Model('User', UserSchema);

 // export the User model
module.exports = User;

