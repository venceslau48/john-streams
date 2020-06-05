const express = require("express")
const request = require("request")
const router = express.Router()

router.get("/", async (req, res) => {
    const search = req.query.search

    try {
        request.get(
            {
                url: `https://api.twitch.tv/kraken/search/games?query=${search}`,
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
