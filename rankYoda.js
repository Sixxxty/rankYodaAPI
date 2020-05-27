var request = require('request')
var cheerio = require('cheerio')
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000

let ranks = [];
request('https://shadowarena.pearlabyss.com/en-US/Arena?battleType=0&server=sa',function( err, res, body){
	if(err) console.log('Erro: ' + err);
	var $ = cheerio.load(body);
	$('.box_list_area').each(function(){
		var name = $(this).find('.thum_name').text()
		ranks.push(name)

	});
	for(var i = 0; i <ranks.length; i++){
		if(ranks[i] === "YoDaSL"){
			let rankYo = i+1
			app.listen(PORT,()=>{
				console.log("Escutando")
			})
			app.get('/', (req, res) => {
				res.json({
					msg: "YoDa está top", rankYo
				})
			})
			
			break
		}
	}


});




