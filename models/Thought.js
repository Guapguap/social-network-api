const {Schema, Model} = require("mongoose");
const moment = require('moment')

const ThoughtSchema = new Schema({

    thoughtText: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 280
    },

    createdAt: {
        type: Date, 
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },

    username: {
        type: String,
        require: true
    },

    reactions: [reactionSchema]
})
