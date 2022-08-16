"use strict";
const MenuDB = require('../models/MenuDB');

var menuDB = new MenuDB();

function getAllMenu(request, respond){
    menuDB.getAllMenu(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

module.exports = {getAllMenu};