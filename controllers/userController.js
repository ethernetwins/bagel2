"use strict";
const UserDB = require('../models/UserDB');
const User = require('../models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var secret = "sckey";

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

function updateUser(request, respond){
    var username = request.body.user_id;
    var first_name = request.body.first_name;
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token,secret);
        userDB.updateUser(username, first_name, function(error, result){
            if (error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({result:"invaild"});
    }
    
}

function loginUser(request, respond){
    var username = request.body.user_id;
    var password = request.body.password;
    userDB.loginUser(username, function (error, result) {
        if (error){
            respond.json(error);
        }
        else{
            const hash = result[0].password;
            var flag = bcrypt.compareSync(password, hash);
            if (flag) {
                var token = jwt.sign(username,secret);
                respond.json({result:token});
            } else {
                respond.json({result:"invaild"});
            }
        }
    })
};

module.exports = {getAllUser, addUser, deleteUser, updateUser, loginUser};