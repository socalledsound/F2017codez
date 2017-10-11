const express = require('express');
const path = require('path');



const port = process.env.PORT || 3000;

var app = express();
// app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (request, response) => {
    //response.send('<h1>hello whatever, I am ok</h1>');
    response.sendfile('/index.html')
})



app.listen(port, ()=> {
	console.log(`server is running on port ${port}`);
});