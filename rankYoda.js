var request = require('request')
var cheerio = require('cheerio')
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000
app.get('/about', (req, res) => {
	res.send('Feita para YoDaSL, por Caio Felix, Twitch:ythezack')
})

let ranks = [];
let points = [];
	request('https://shadowarena.pearlabyss.com/en-US/Arena?battleType=0&server=sa',function( err, res, body){
	if(err) console.log('Erro: ' + err);
	var $ = cheerio.load(body);
	$('.box_list_area').each(function(){
		var name = $(this).find('.thum_name').text()
		var point = $(this).find('.thum_point').text()
		points.push(point)
		ranks.push(name)

	});

	app.get("/",(req, res) => {
		for(var i = 0; i <ranks.length; i++){
		if(ranks[i] === "YoDaSL"){
			let rankYo = i+1	
			res.send(`Yoda está atualmente top: ${rankYo}# com ${pontos} pontos!`)
			break}}
		
	
			
			
		}
	)


});
app.listen(PORT,()=>{
	console.log("Escutando")})
