const { User } = require('../models');

const userController = {
    // GET all users
    getAllUser(req,res){
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    // GET user by ID
    getUserById({params}, res){
        User.findOne({_id: params.id})
            .then(dbUserData => {
                if(!dbUserData){
                    res.status(400).json({message: 'no user found with this ID!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // POST a user
    createUser({body}, res){
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },
    // PUT a user by ID
    updateUser({params, body}, res){
        User.findOneAndUpdate({_id: params.id}, body, { new: true })
            .then(dbUserData => {
                if(!dbUserData){
                    res.status(400).json({message: 'no user found with this ID!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // DELETE a user by ID
    deleteUser({params}, res){
        User.findOneAndDelete({_id: params.id})
            .then(dbUserData => {
                if(!dbUserData){
                    res.status(400).json({message: 'no user found with this ID!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
}

module.exports = userController;