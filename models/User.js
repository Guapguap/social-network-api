const {Schema, model} = require("mongoose");

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
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'
    ]},

    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }]
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

 // export the User model
module.exports = User;

