"use strict";
const UserDB = require('../models/UserDB');
const User = require('../models/User');

var userDB = new UserDB();

function getAllUser(request, respond){
    userDB.getAllUser(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUser(request, respond){
    var now = new Date();
    var user = new User(request.body.user_id, request.body.profile_picture, request.body.password,
        request.body.first_name, request.body.last_name, request.body.gender, now.toString(), request.body.mobile_number, 
        request.body.email_address);
    userDB.addUser(user, function (error, result) {
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
};

function deleteUser(request, respond){
    var userId = request.params.id;
    userDB.deleteUser(userId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond .json(result)
        }
    });
};



module.exports = {getAllUser, addUser, deleteUser};
