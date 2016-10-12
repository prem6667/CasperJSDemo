var casper = require('casper').create({   
    verbose: true, 
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});

// print out all the messages in the headless browser context
casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
});

// print out all the messages in the headless browser context
casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

var url = 'http://tracker.instantteam.us/login?back_url=http%3A%2F%2Ftracker.instantteam.us%2F';

casper.start(url, function() {
   // search for 'casperjs' from google form
   console.log("page loaded");
   this.test.assertExists('form#login-form', 'form is found');
   this.fill('form[id=login-form', { 
        email: 'prem.kumar', 
        pass:  '9213955890'
    }, true);
});

casper.then(function(){
   console.log("Page Title " + document.title);
  this.capture('tracker.png');
});

casper.run();