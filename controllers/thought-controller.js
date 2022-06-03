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
    // GET thought by ID
    getThoughtById({params}, res){
        Thought.findOne({_id: params.id})
            .then(dbThoughtData => {
                if(!dbThoughtData){
                    res.status(400).json({message: 'no thought found with this ID!'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // POST a thought
    createThought({body}, res){
        Thought.create(body)
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    },
    // PUT a thought by ID
    updateThought({params, body}, res){
        Thought.findOneAndUpdate({_id: params.id}, body, { new: true })
            .then(dbThoughtData => {
                if(!dbThoughtData){
                    res.status(400).json({message: 'no thought found with this ID!'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // DELETE a thought by ID
    deleteThought({params}, res){
        Thought.findOneAndDelete({_id: params.id})
            .then(dbThoughtData => {
                if(!dbThoughtData){
                    res.status(400).json({message: 'no thought found with this ID!'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
}

module.exports = thoughtController;