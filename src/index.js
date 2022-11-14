const express = require('express');
const route = require('./router/router.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());


mongoose.connect("mongodb+srv://nirmaljasval:8o1g7W6bqoshvXoN@cluster0.cv9nolo.mongodb.net/nirmal9179-DB", {
    useNewUrlParser: true
})
.then( () => console.log("Your database is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(3000, function () {
    console.log('Your app is running on PORT ' + 3000)
});