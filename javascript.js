const request = require('request-promise')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const PORT  = process.env.PORT || 3333
const site = request('https://shadowarena.pearlabyss.com/en-US/Arena?battleType=0&server=sa')
const siteHT = cheerio.load(site)
app.listen(PORT,_ => {console.log('ON')})

app.get('/',(req, res) =>{
    res.send(siteHT)

})