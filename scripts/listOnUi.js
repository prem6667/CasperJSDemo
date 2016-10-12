var casper = require('casper').create();
var fs = require('fs');
var links = [];
var titles = [];

function getLinks() {
    var link = document.querySelectorAll('.esc-lead-article-title a');
    return Array.prototype.map.call(link, function(e) {
        return e.getAttribute('href');
    });

};

function getTitles() {
    var link = document.querySelectorAll('.esc-lead-article-title a');
    return Array.prototype.map.call(link, function(e) {
        return e.innerHTML;
    });

};

function generateTable() {
    var date;
    return data = "<tr>\n<td>" + titles.join('\n') + "</td>\n<td>" + links.join('\n') + "</td>\n</tr>";
};

casper.start('https://news.google.co.in/', function() {
    //this.capture('first.png');
    //console.log("hello world");
});

casper.then(function() {
    links = this.evaluate(getLinks);
    titles = this.evaluate(getTitles);
});

casper.then(function() {
    var html;
    html = "<table><tr><td>HeadLines</td><td>Links</td></tr>";
    html = html + generateTable();
    html += "</table>";
    console.log(html);
    fs.write('data.html', html, 'w');
    this.echo(links.length + ' :Links found ');
    this.echo('-' + links.join('\n-')).exit();
});

casper.run();
