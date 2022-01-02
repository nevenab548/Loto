const express = require('express');
const redis = require('redis');
const cors = require("cors");


const app = express()

const port = 3000

const redisClient = redis.createClient();

app.use(cors());
app.use(express.json({ type: '*/*' }));

app.post('/create-user', (req, res) => {

    const noviKorisnik = req.body;
    if (!noviKorisnik) {
        res.sendStatus(400)
    }
    redisClient.HSET("korisnici", noviKorisnik.username, JSON.stringify(noviKorisnik))

    return res.sendStatus(200);
})

app.post('/get-user', (req, res) => {

    redisClient.HGET("korisnici", req.body.username)
        .then(redisResponse => {
            if (redisResponse) {
                const korisnik = JSON.parse(redisResponse);
                if (req.body.sifra === korisnik.sifra) {
                    res.sendStatus(200)
                } else {
                    res.sendStatus(400)
                }
            } else {
                res.sendStatus(400)
            }
        })
})

app.post('/get-user-by-username', (req, res) => {

    redisClient.HGET("korisnici", req.body.token.token)
        .then(redisResponse => {
            if (redisResponse) {
                const korisnik = JSON.parse(redisResponse);
                res.send({ status: 200, body: korisnik })
            } else {
                res.sendStatus(400)
            }
        })
})

app.post('/create-ticket', (req, res) => {

    const tiket = req.body;
    if (!tiket) {
        res.sendStatus(400)
    }

    let dt = new Date();
    let secs = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours())

    redisClient.HSET("tiketi", tiket.username, JSON.stringify(tiket))
    redisClient.EXPIRE("tiketi", tiket.expTime - secs - 9000)

    res.sendStatus(200)
})

app.post('/get-all-tickets', (req, res) => {
    redisClient.hGetAll("tiketi")
        .then(redisResponse => {
            res.send(redisResponse);

        })
        .catch(err => {
            res.send(err);
        })
})

app.post('/get-user-tickets', (req, res) => {
    redisClient.HGET("tiketi", req.body.username)
        .then(redisResponse => {
            const tiket = JSON.parse(redisResponse);
            res.send(tiket);
        })
        .catch(err => {
            res.send(err);
        })
})

app.post('/set-raffle', (req, res) => {
    let arrayOfNumbers = [];

    for (let i = 0; i < 7; i++) {
        arrayOfNumbers.push(getRandomNumber(39, arrayOfNumbers));
    }

    let raffleObject = {
        numbers: arrayOfNumbers
    }

    redisClient.SETEX("izvlacenje", 1800, JSON.stringify(raffleObject))
        .then(reddisResponse => {
            res.send(reddisResponse);
        })
        .catch(err => {
            res.send(err);
        })
})

app.post('/get-raffle', (req, res) => {
    redisClient.GET("izvlacenje")
        .then(reddisResponse => {
            if (reddisResponse) {
                res.send(JSON.parse(reddisResponse));
            }
        })
        .catch(err => {
            res.send(err);
        })
})

function getRandomNumber(max, array) {

    let num;

    while (true) {
        num = Math.floor(Math.random() * (max - 1 + 1) + 1);
        if (!array.includes(num)) {
            break;
        }
    }

    return num;
}

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
// Kad se korisnik uloguje da mu se skloni register i login opcija, da svi tiket isteknu u isto vreme,
//     a da najduze traje jedan dan tiket
