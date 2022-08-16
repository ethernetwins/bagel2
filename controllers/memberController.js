"use strict";
const MemberDB = require('../models/MemberDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var secret = "sckey";

var memberDB = new MemberDB();

function getAllMember(request, respond) {
    memberDB.getAllMember(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result)
        }
    });
}

function addMember(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    var phonenumber = request.body.phone_number;
    var first_name = request.body.first_name;
    var last_name = request.body.last_name;
    var gender = request.body.gender;
    var email = request.body.email_address;
    password = bcrypt.hashSync(password, 10);
    memberDB.addMember(username, password, phonenumber, first_name, last_name, gender, email, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
};

function loginMember(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    memberDB.loginMember(username, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            const hash = result[0].password;
            var flag = bcrypt.compareSync(password, hash);
            if (flag) {
                var token = jwt.sign(username, secret);
                respond.json({ result: token });
            } else {
                respond.json({ result: "invaild" });
            }
        }
    })
};

function deleteMember(request, respond) {
    var memberId = request.params.id;
    memberDB.deleteMember(memberId, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result)
        }
    });
}

function updateMember(request, respond) {
    var username = request.body.username;
    var phone_number = request.body.phone_number;
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        memberDB.updateMember(username, phone_number, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invaild" });
    }

}

module.exports = { getAllMember, addMember, loginMember, deleteMember, updateMember };