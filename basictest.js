// a very basic test
var url = "http://localhost:8001";
  
casper.test.begin("user login", 4, function suite(test) {
  
  // try to load the URL
  casper.start(url, function () {
    this.echo("Loading the KIWI portal...");
  });
  
  // it should display the login form
  casper.waitForSelector("#login-form", function(){
    this.exists("#login-form");
  });
  
  // it should check if login form's elements are available
  casper.then(function() {
      test.assertExists("#login-form input[type=\"text\"]", this.echo("Input field for the username exists"));
      test.assertExists("#login-form input[type=\"password\"]", this.echo("Input field for the password exists"));
      test.assertExists("#login-form input[type=\"submit\"]", this.echo("Input field for the submit button exists"));
  });
  
  // it should bring you to reset password page
  casper.then(function(){
    var fi = "/#password-reset-initiate";
    this.click("#passreset");
    test.comment("Clicked on reset password page");
    test.assertUrlMatch(url + fi, 'New location is ' + this.getCurrentUrl());
  });
  
  casper.run(function() {
    test.done();
  });
});
