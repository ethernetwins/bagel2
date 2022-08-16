"use strict";
class Comment {
    constructor(comment_id, restaurant_name, comment, username, comment_rating, date_of_comment) {
        this.comment_id = comment_id;
        this.restaurant_name = restaurant_name;
        this.comment = comment;
        this.username = username;
        this.comment_rating = comment_rating;
        this.date_of_comment = date_of_comment;
    }
    //add the set and get methods here

    getcomment_id(){
        return this.comment_id;
    }
    getrestaurant_name(){
        return this.restaurant_name;
    }
    getcomment(){
        return this.comment;
    }
    getusername(){
        return this.username;
    }
    getcomment_rating(){
        return this.comment_rating;
    }
    getdate_of_comment(){
        return this.date_of_comment;
    }

    setCommentId(comment_id) {
        this.comment_id = comment_id;
    }
    setrestaurant_name(restaurant_name) {
        this.restaurant_name = restaurant_name;
    }
    setComment(comment) {
        this.comment = comment;
    }
    setUserId(username) {
        this.username = username;
    }
    setCommentRating(comment_rating) {
        this.comment_rating = comment_rating;
    }
    setDateOfComment(date_of_comment) {
        this.date_of_comment = date_of_comment;
    }


}

module.exports = Comment;
