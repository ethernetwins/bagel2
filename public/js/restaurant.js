function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function () {
        restaurant_array = JSON.parse(request.responseText);
        fetchComments();
        console.log(restaurant_array);
        displayRestaurant(category);
    };

    request.send();
}

function displayRestaurant(category) {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurant = restaurant_array.length;
    for (var count = 0; count < totalRestaurant; count++) {
        //var address = restaurant_array[count].restaurant_address;
        console.log(count);
        var thumbnail = restaurant_array[count].thumb;
        var title = restaurant_array[count].restaurant_name;
        var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap" width="300" height = "175">\
                        <div class="table"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#movieModal" class="table" item="' + count + '" onClick="showRestaurantDetails(this)">' + title + '</h5></div>\
</div>'
        //var cell = '<div class="card col-md-3" ><div class="card-body"><<h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#movieModal" class="card-title" item="' + count + '>' + address + '</h5></div></div>'\
        //var cell = '<p> ' + address + ' </p>'
        table.insertAdjacentHTML('beforeend', cell);
        restaurantCount++;
    }
    message = restaurantCount + " Restaurants found";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function listRestaurants() {
    category = "Restaurants";
    displayRestaurant(category);
    document.getElementById("restaurantMenu").classList.add("active");
    document.getElementById("trendingMenu").classList.remove("active");
    document.getElementById("dealsMenu").classList.remove("active");
}

function listTrending() {
    category = "Trending";
    displayRestaurant(category);
    document.getElementById("restaurantMenu").classList.remove("active");
    document.getElementById("trendingMenu").classList.add("active");
    document.getElementById("dealsMenu").classList.remove("active");
}

function listDeals() {
    category = "Deals";
    displayRestaurant(category);
    document.getElementById("restaurantMenu").classList.remove("active");
    document.getElementById("trendingMenu").classList.remove("active");
    document.getElementById("dealsMenu").classList.add("active");
}

function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurant").textContent = restaurant_array[item].restaurant_name;
    document.getElementById("pic").src = restaurant_array[item].thumb;
    document.getElementById("address").textContent = restaurant_array[item].restaurant_address;
    document.getElementById("desc").textContent = restaurant_array[item].description;
}

function translateText() {
    var request = new XMLHttpRequest();

    request.open("POST",translate_url, true);
    request.setRequestHeader("Content-type", "application/json");
    var trans = document.getElementById("txtName").value;
    var lblName = document.getElementById("btnCopy");
    var payload={"text": trans};

    request.send(JSON.stringify(payload));
    console.log(payload)
    request.onload = function () {
        translate_array = JSON.parse(request.responseText);
        console.log(translate_array);
        lblName.innerHTML = translate_array;
    };
    
}
