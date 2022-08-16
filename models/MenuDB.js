"use strict";

var db = require('../db-connections');
class MenuDB{
    getAllMenu(callback){
        var sql = "SELECT * from `restaurant_menu`";
        db.query(sql, callback);
    }
}

module.exports = MenuDB;