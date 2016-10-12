var casper = require('casper').create({   
    verbose: true, 
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});


casper.start('http://www.justdial.com/Delhi-NCR/Pizza-Outlets-%3Cnear%3E-Noida/ct-50105', function(){
	this.capture('withoutscroll.png');
});


casper.then(function(){
this.scrollToBottom();
	this.wait(5000, function () {
		this.capture('scroll.png');
	});
});
casper.run()