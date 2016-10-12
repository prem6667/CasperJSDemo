var casper = require('casper').create({
    verbose : false,
    loglevel : 'debug'
});
var links = [];

function getLinks() {
    var link = document.querySelectorAll('.esc-lead-article-title a');
    return Array.prototype.map.call(link, function(e) {
        return e.getAttribute('href');
    });
};

casper.start('https://news.google.co.in/', function() {
    this.capture('first.png');
    //console.log("hello world");
});

casper.then(function() {
    links = this.evaluate(getLinks);
    this.echo(links.length + ' :Links found ');
    this.echo('-' + links.join('\n-')).exit();
});
casper.run();
