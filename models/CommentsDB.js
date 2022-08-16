"use strict";

var db = require('../db-connections');
class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from `comment`";
        db.query(sql, callback);
    }

    addComment(comment, callback){
        var sql = "INSERT INTO comment (restaurant_name, comment, username, comment_rating, date_of_comment) VALUES(?, ?, ?, ?, ?)";
        db.query(sql, [comment.getrestaurant_name(), comment.getcomment(), comment.getusername(), comment.getcomment_rating(), 
            comment.getdate_of_comment()], callback);
    }
    deleteComment(commentId, callback){
        var sql = "DELETE from comment WHERE comment_id = ?";
        return db.query(sql, [commentId], callback);
    }
    updateComment(comment, callback){
        var sql = "UPDATE comment SET comment = ?, username = ?, comment_rating = ?, date_of_comment = ? WHERE comment_id = ?";
        return db.query(sql, [comment.getcomment(), comment.getusername(), comment.getcomment_rating(),
            comment.getdate_of_comment(), comment.getcomment_id()], callback);
    }
}

module.exports = CommentsDB;