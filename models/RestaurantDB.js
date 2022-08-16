"use strict";

var db = require('../db-connections');
class RestaurantDB{
    getAllRestaurant(callback){
        var sql = "SELECT * from `restaurant`";
        db.query(sql, callback);
    }
}

module.exports = RestaurantDB;