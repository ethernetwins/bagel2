"use strict";

class User {
    constructor(user_id, profile_picture, password, first_name, last_name, gender, date_of_register, mobile_number, email_address) {
        this.user_id = user_id;
        this.profile_picture = profile_picture;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.date_of_register = date_of_register;
        this.mobile_number = mobile_number;
        this.email_address = email_address;
    }
    //add the set and get methods here

    getuser_id(){
        return this.user_id;
    }
    getprofile_picture(){
        return this.profile_picture;
    }
    getpassword(){
        return this.password;
    }
    getfirst_name(){
        return this.first_name;
    }
    getlast_name(){
        return this.last_name;
    }
    getgender(){
        return this.gender;
    }
    getdate_of_register(){
        return this.date_of_register;
    }
    getmobile_number(){
        return this.mobile_number;
    }
    getemail_address(){
        return this.email_address;
    }


    setuser_id(){
        this.user_id = user_id;
    }
    setprofile_picture(){
        this.profile_picture = profile_picture;
    }
    setpassword(){
        this.password = password;
    }
    setfirst_name(){
        this.first_name = first_name;
    }
    setlast_name(){
        this.last_name = last_name;
    }
    setgender(){
        this.gender = gender;
    }
    setdate_of_register(){
        this.date_of_register = date_of_register;
    }
    setmobile_number(){
        this.mobile_number = mobile_number;
    }
    setemail_address(){
        this.email_address = email_address;
    }

}

module.exports = User;