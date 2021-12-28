const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express()
const port = 3000

const redisClient = redis.createClient();

app.post('/create-user', jsonParser, (req, res) => {

    const newUser =req.body;

    redisClient.HSET("users",newUser.userName, JSON.stringify(newUser))
        .then(redisResponse => {
            if(redisResponse) {
                res.send(redisResponse.toString())
            }
            else {
                res.send("User already exists")
            }
        })
        .catch(err => {
            res.send(err);
        })
})

app.post('/get-user', jsonParser, (req, res) => {

    redisClient.HGET("users",req.body.userName)
        .then(redisResponse => {
            const user = JSON.parse(redisResponse);
            res.send(user.password);
        })
        .catch(err => {
            res.send(err);
        })
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

redisClient.connect()
    .then(res => {
       console.log("Redis connected successfully");
    })
    .catch(err => {
        console.log(err);
    })