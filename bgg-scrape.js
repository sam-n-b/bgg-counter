const cheerio = require ('cheerio')
const request = require ('request')
var gameArr= []
const idRegex = /\d+/
request('https://boardgamegeek.com/browse/boardgame', (err, res, html)=>{
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);
        console.log('cheerio running')

    $('.collection_thumbnail').each(function(i, elem) {
       // console.log(i + $(this).html());
        var scrape = $(this).html()
        var idNum = scrape.match(/\d+/)
        //var gameId = idNum
       //console.log(idNum)
       gameArr.push(idNum)
      });
    }
})
function clGamearr(){
    //console.log(gameArr[22][0])
    console.log('Final array'+gameArr)
}
setTimeout(clGamearr,1000)
//setTimeout used for asynch. Need to Fix.
//console.log('Final array'+gameArr) shows just the ids.
//console.log(gameArr) shows extra details. need gameArr[22][0] to show just id.
 