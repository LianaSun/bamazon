//read and set environment variable with dotenv package
require(dotenv).config();

//npm packages to be used
var keys = require("./keys.js");
var mysql = require("mysql");
var inquireer = require("inquirer");

//create connection to sql database for information collection
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,

//username
user: "root",

//password(in dotenv file)
password: (keys.mysqlpass.password),
database: "bamazon_db",
});

//connection error function & console log
connection.connect(function(err) {
    if(err) throw err;
    start()
});


//start function
function start() {

//display all items
connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

//display all products
    for (var i = 0; i < res.length; i++) {
        console.log("Item ID:" + res[i].item_id + " || " + 
        "Product:" + res[i].product_name + "Department" + res[i].department_name + "Price$:" + res[i].price);
        console.log("------------------");
    }

})
}

//run prompt function
function userPrompt(){

//inquirer prompt
inquirer 
.prompt([
    {
        name:"userID",
        type:"input",
        message:"What is the item ID you would like to purchase?",
    },
]),
    {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?",
    },
then(function(answer) {
//get info from item ID input
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;

//selecting the item from user input
var chosenItem;
for (var i = 0; i < res.length; i ++) {
    if (res[i].item_id == answer.userId) {
        chosenItem = res[i];
    }
}

//check to see if in-stock
if(chosenItem.stock_quantity > answer.quantity) {
    console.log("That item is available!");
    var updatedStock = (chosenItem.stock_quantity - answer.quantity)
    var cost = (chosenItem.price * answer.quantity)
    console.log("Your total cost: $" + parseFloat.Float(cost).toFixed(2));
    updateQuantity();
}
//if product is out of stock
else {
    if(chosenItem.stock_quantity < answer.quantity) {
        console.log("That item is currently out of stock =(");
    }

//Update stock quantities in mySQL DB
function updateQuantity(){
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
    [
        {
            stock_quantity: updatedStock
        },
    {
        item_id: answer.userId
    }
],
);
}
//Stop app
connection.end();
};
    });
}
)}
