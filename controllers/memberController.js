"use strict";
const MemberDB = require('../models/MemberDB');

var memberDB = new MemberDB();


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

module.exports = { addMember, deleteMember, updateMember };
