var casper = require('casper').create();
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

casper.start('https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx', function(){
this.capture('first.png');
//console.log("hello world");
});

casper.then(function(){
	this.wait(20000);
});



casper.then(function(){
	this.capture('first1.png');
var html;
	html = "<table><tr><td>HeadLines</td></tr>";
	html = html+generateTable();
	html += "</table>";
	console.log(html);
	fs.write('dada.html',html,'w');
	this.echo(titles.length + ' :Links found ');
	this.echo('-'+titles.join('\n-')).exit();
});

casper.run();