var casper = require('casper').create({
	verbose: true, 
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    },
	clientScripts:['jquery-3.1.1.min.js']
});

var x = require('casper').selectXPath;
var fs = require('fs');
var links = [];
var titles = [];

function getTitles(){
	var link = document.querySelectorAll('.row strong[2]');
	return Array.prototype.map.call(link, function(e){
		return e.innerHTML;
	});

};

function generateTable(){
	var date;
	return data = "<tr>\n<td>" + titles.join('\n')+ "</td>\n</tr>";
};

casper.start('http://www.bidsnewyork.com/new_york_bids/bids-ADP14755028050000180.htm', function(){
this.capture('first.png');
//console.log("hello world");
});

casper.then(function() {
   this.evaluate(function() {
     $('#gov').val('fed').change(); 
  });
});
 casper.then(function(){
 	 this.thenClick(x('//*[@id="btn-search"]')); 
   });


casper.then(function(){
	this.capture('dropdown.png');
});


casper.run()