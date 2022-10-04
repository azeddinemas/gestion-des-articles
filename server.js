const express = require("express");
const app = express();
 const db = require('./config/dbConfig')




app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/postRouter')
app.use('/api/posts', router)

//port

const PORT = 3000;

//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


db.sync().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 