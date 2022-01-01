const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express()
const port = 3000

const redisClient = redis.createClient();

app.post('/create-user', (req, res) => {

    const noviKorisnik = req.body; //ovo je undefined mora da se nadje zasto
    if (!noviKorisnik) {
        return res.status(400).json({
            status: 'error',
            error: 'req body cannot be empty',
        });
    }
    redisClient.HSET("korisnici", noviKorisnik.username, JSON.stringify(noviKorisnik))

            return res.status(200).json({
                status: 200,
                data: req.body
            })
})

app.post('/get-user', jsonParser, (req, res) => {

    redisClient.HGET("korisnici", req.body.username)
        .then(redisResponse => {
            if (redisResponse) {
                const korisnik = JSON.parse(redisResponse);
                if (req.body.sifra === korisnik.sifra) {
                    res.send(korisnik);
                } else {
                    res.status(400);
                    res.send("Pogresno uneta sifra");
                }
            } else {
                res.send("Pogresno uneto korisnicko ime");
            }
        })
        .catch(err => {
            res.send(err);
        })
})

app.post('/create-ticket', jsonParser, (req, res) => {

    const tiket = req.body;

    redisClient.HSET("tiketi", tiket.username, JSON.stringify(tiket))
        .then(redisResponse1 => {
            if (redisResponse1) {
                redisClient.EXPIRE("tiketi", tiket.expTime)
                    .then(redisResponse2 => {
                        if (redisResponse2) {
                            res.send("Uspesno odigran tiket");
                        } else {
                            res.send("Tiket nije pravilno odigran");
                        }

                    })
                    .catch(err => {
                        res.send(err);
                    })

            } else {
                res.send("Tiket nije pravilno odigran");
            }
        })
        .catch(err => {
            res.send(err);
        })
})

app.post('/get-all-tickets', jsonParser, (req, res) => {
    redisClient.hGetAll("tiketi")
        .then(redisResponse => {
            res.send(redisResponse);

        })
        .catch(err => {
            res.send(err);
        })
})

app.post('/get-user-tickets', jsonParser, (req, res) => {
    redisClient.HGET("tiketi", req.body.username)
        .then(redisResponse => {
            const tiket = JSON.parse(redisResponse);
            res.send(tiket);
        })
        .catch(err => {
            res.send(err);
        })
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

redisClient.connect()
    .then(res => {
        console.log("Redis connected successfully");
    })
    .catch(err => {
        console.log(err);
    })
/*Tiketi su smesteni u set i sadrze key value par userName - kombinacija
koja je niz brojeva, cuva se isto kao json koji ima property numbers i property userName*/
//Tiketi se prosledjuje i exptime koji se dobija od front-a, da zna kad istice ceo hash za tikete
