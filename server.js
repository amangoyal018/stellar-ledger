import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use( express.static('./public'));

var expenses = [];

app.get("/",(req,res) => {
    res.render("index.ejs");
});

app.post('/expenses', (req, res) => {
    var newListExpense = req.body.newExpense;
    expenses.push(newListExpense);
    res.render("index.ejs", { newListExpense: expenses });
});

var friends = [];

app.post('/friends', (req, res) => {
    var newFriends = req.body.newFriend;
    friends.push(newFriends);
    res.render("index.ejs", { newListFriend: friends });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

