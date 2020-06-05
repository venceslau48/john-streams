const express = require("express")
const request = require("request")
const router = express.Router()

router.get("/", async (req, res) => {
    const game = req.query.game

    try {
        request.get(
            {
                url: `https://api.twitch.tv/kraken/streams?game=${game}`,
                headers: {
                    "content-type": "application/json",
                    Accept: "application/vnd.twitchtv.v5+json",
                    "Client-ID": process.env.API_KEY
                }
            },
            (error, response, body) => {
                res.send(body)
            }
        )
    } catch (error) {
        res.send(error)
    }
})

router.get("/channel", async (req, res) => {
    const channel = req.query.channel

    try {
        request.get(
            {
                url: `https://api.twitch.tv/kraken/streams/${channel}`,
                headers: {
                    "content-type": "application/json",
                    Accept: "application/vnd.twitchtv.v5+json",
                    "Client-ID": process.env.API_KEY
                }
            },
            (error, response, body) => {
                res.send(body)
            }
        )
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
