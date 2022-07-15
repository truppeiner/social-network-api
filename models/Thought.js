const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        defult: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'reaction is required',
        maxlength: 280
    },
    username: {
        type: String,
        required: 'username is required'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

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
    },
    reactions: [
        reactionSchema
    ]
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;