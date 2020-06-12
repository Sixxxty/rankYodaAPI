var request = require('request')
var cheerio = require('cheerio')
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000
app.get('/about', (req, res) => {
	res.send('Feita para YoDaSL, por Caio Felix, Twitch:ythezack')
})
var url_string = window.location.href
var url = new URL(url_string)
var nickname = url.searchParams.get('')

let ranks = [];
	request('https://shadowarena.pearlabyss.com/en-US/Arena?battleType=0&server=sa',function( err, res, body){
	if(err) console.log('Erro: ' + err);
	var $ = cheerio.load(body);
	$('.box_list_area').each(function(){
		var name = $(this).find('.thum_name').text()
		ranks.push(name)

	});

	app.get("/",(req, res) => {
		console.log('Recebendo requisição de rank.....')
		for(var i = 0; i <ranks.length; i++){
		if(ranks[i] === "YoDaSL"){
			let rankYo = i+1	
			res.send(`Yoda está atualmente top: ${rankYo}# do servidor SA!`)
			break}}
		
	
			
			
		}
	)


});
app.listen(PORT,()=>{
	console.log("Escutando")})
