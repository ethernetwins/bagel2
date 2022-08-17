"use strict";

var db = require('../db-connections');
class MemberDB{
    addMember(username, password, phonenumber, first_name, last_name, gender, email, callback){
        var sql = "INSERT INTO member (username, password, phone_number, first_name, last_name, gender, email_address) VALUES(?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [username, password, phonenumber, first_name, last_name, gender, email], callback);
    }
    deleteMember(memberID, callback){
        var sql = "DELETE from member WHERE id = ?";
        return db.query(sql, [memberID], callback);
    }
    updateMember(username, phone_number, callback){
        var sql = "UPDATE member SET phone_number = ? WHERE username = ?";
        return db.query(sql, [phone_number, username], callback);
    }
}

module.exports = MemberDB;
