const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'You must leave a thought',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: 'username required'
    }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;