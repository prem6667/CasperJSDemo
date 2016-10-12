var casper = require('casper').create();

casper.start('https://www.google.com/', function(){
//this.capture('first.png');
console.log("hello world");
});
casper.run()