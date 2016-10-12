var casper = require('casper').create({   
    verbose: true, 
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});
var x = require('casper').selectXPath;
var fs = require('fs');
var links = [];
var titles = [];



function generateTable(){
	var date;
	return data = "<tr>\n<td>" + titles.join('\n')+ "</td>\n</tr>";
};

casper.start('https://www.myvendorlink.com/valenciacollege/searchsolicitations.aspx', function(){
this.capture('first.png');
//console.log("hello world");
});


casper.thenClick(x('//*[@id="ctl00_RegionMiddle_grvSolicitations_ctl10_btnView"]'), function(){
console.log(this.getCurrentUrl());
this.capture('click.png');
});

casper.run()