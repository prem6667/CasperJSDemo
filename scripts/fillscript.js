var casper = require('casper').create({   
    verbose: true, 
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});

function getLinks(){
    var link = document.querySelectorAll('.b_algo a');
    return Array.prototype.map.call(link, function(e){
        return e.getAttribute('href');
    });
};

casper.start('https://www.bing.com/', function(){
	this.fill('form[action="/search"]', {
        q:'phantomjs'
    },true);
   
});


casper.then(function(){
     this.capture('fill.png');
    links = this.evaluate(getLinks);
    this.echo(links.length + ' :Links found ');
    this.echo('-'+links.join('\n-')).exit();
});
casper.run()