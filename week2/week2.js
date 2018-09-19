// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');
var m03Address = '';

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('../week1/data/m03.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
$('td').each(function(i, elem) { // "each" is a loop  // all the addresses were in tables
   //console.log($(elem).attr("style"));
   //console.log('***************************************');
   if ($(elem).attr("style") == 'border-bottom:1px solid #e3e3e3; width:260px') {
      // console.log($(elem).html().split('<br>')[2].trim().split(',')[0])
      m03Address += ($(elem).html().split('<br>')[2].trim().split(',')[0]) + '\n';
   }
});

// write the addresses to a text file
//var m03Address = ''; // this variable will hold the lines of text

fs.writeFileSync('m03Address.txt', m03Address);
