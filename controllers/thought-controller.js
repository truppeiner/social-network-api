const { Thought } = require('../models');

const thoughtController = {
    // GET all thoughts
    getAllThought(req,res){
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    // POST a thought
    createThought({body}, res){
        Thought.create(body)
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }
}

module.exports = thoughtController;