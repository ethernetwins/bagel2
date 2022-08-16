function fetchComments() {
    var request = new XMLHttpRequest();

    request.open('GET', comment_url, true);
    request.onload = function () {
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
    };

    request.send();
}


function showComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurant_name;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].restaurant_name === restaurant_array[item].restaurant_name) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedRestaurantId = restaurant_array[item].restaurant_id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].comment + "</p>               \
                                    <small>by " + comment_array[i].username + " @ " + comment_array[i].date_of_comment + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].comment_rating; j++) {
                console.log(i);
                star += "<img src='images/gold_star.png' style='width:50px' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

function newComment() {
    rating = 0;
    document.getElementById("userComments").value = "";
    document.getElementById("nickname").value = "";
}

function addComment() {
    var comment = new Object();
    comment.restaurant_name = restaurant_array[currentIndex].restaurant_name;
    comment.username = document.getElementById("nickname").value;
    comment.comment = document.getElementById("userComments").value;
    comment.date_of_comment = null;
    comment.comment_rating = rating;
    console.log(comment)

    var postComment = new XMLHttpRequest();
    postComment.open("POST", '/comment', true);

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        console.log("new comment sent");
        fetchComments();
    };

    postComment.send(JSON.stringify(comment));
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    for (let star of stars) {
        star.setAttribute("src", starBWImage);
    }
    changeImage(num, classTarget);
}

function changeImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
            rating = 5;
            break;
    }
}

function editComment(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editnickname").value = comment_array[item].username;
    document.getElementById("edituserComments").value = comment_array[item].comment;
    //console.log(comment_array[item].comment_rating);
    displayColor('editpop', comment_array[item].comment_rating);
}

function displayColor(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", starBWImage);
    }
    changeImage(num, classTarget);
}

function updateComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_comment_url = comment_url + "/" + comment_array[currentIndex].comment_id;
        var updateComment = new XMLHttpRequest(); 
        updateComment.open("PUT", edit_comment_url, true); 
        updateComment.setRequestHeader("Content-Type", "application/json");
        comment_array[currentIndex].username = document.getElementById("editnickname").value;
        comment_array[currentIndex].comment = document.getElementById("edituserComments").value;
        comment_array[currentIndex].comment_rating = rating;
        console.log(currentIndex)
        updateComment.onload = function () {
            fetchComments();
        };
        updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}

function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); 
        var delete_comment_url = comment_url + "/" + comment_array[item].comment_id;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function() {
            fetchComments();
        };
        eraseComment.send();
    }
}
