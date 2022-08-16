"use strict";

var db = require('../db-connections');
class UserDB{
    getAllUser(callback){
        var sql = "SELECT * FROM `user`";
        db.query(sql, callback);
    }
    addUser(user, callback){
        var sql = "INSERT INTO user (user_id, profile_picture, password, first_name, last_name, gender, date_of_register, mobile_number, email_address) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [user.getuser_id(), user.getprofile_picture(), user.getpassword(), user.getfirst_name(), 
            user.getlast_name(), user.getgender(), user.getdate_of_register(), user.getmobile_number(), user.getemail_address()], callback);
    }
    deleteUser(userId, callback){
        var sql = "DELETE from user WHERE user_id = ?";
        return db.query(sql, [userId], callback);
    }
    updateUser(user, callback){
        var sql = "UPDATE user SET profile_picture = ?, password = ?, first_name = ?, last_name = ?, gender = ?, mobile_number = ?, email_address = ? WHERE user_id = ?";
        return db.query(sql, [user.getprofile_picture(), user.getpassword(), user.getfirst_name(),
            user.getlast_name(), user.getgender(), user.getmobile_number(), user.getemail_address(), user.getuser_id()], callback);
    }
}

module.exports = UserDB;