var express = require("express"); //using the express web framework
const port = 3000;
var restaurantController = require('./controllers/restaurantController');
var commentsController = require('./controllers/commentsController');
var userController = require('./controllers/userController');
var menuController = require('./controllers/menuController');
var memberController = require('./controllers/memberController');
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/restaurant').get(restaurantController.getAllRestaurant);

app.route('/comment').get(commentsController.getAllComments);
app.route('/comment').post(commentsController.addComment);
app.route('/comment/:id').delete(commentsController.deleteComment);
app.route('/comment/:id').put(commentsController.updateComment);

app.route('/user').get(userController.getAllUser);
app.route('/user').post(userController.addUser);
//app.route('/user/:id').delete(userController.deleteUser);
//app.route('/user').put(userController.updateUser);
//app.route('/login').post(userController.loginUser);

app.route('/menu').get(menuController.getAllMenu);

app.route('/member').get(memberController.getAllMember);
app.route('/member').post(memberController.addMember);
app.route('/member/:id').delete(memberController.deleteMember);
//app.route('/member').put(memberController.updateMember);
//app.route('/login').post(memberController.loginMember);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
