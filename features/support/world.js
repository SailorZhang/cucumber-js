function World() {
	//this.browser = new zombie(); // this.browser will be available in step definitions

	var webdriver = require('selenium-webdriver'),
		chrome = require('selenium-webdriver/chrome'),
		// chromeDriverPath = require('chromedriver').path,
		By = webdriver.By,
		until = webdriver.until;
	// this.visit = function (url, callback) {
	//   this.browser.visit(url, callback);
	// };
	var driver = new webdriver.Builder()
		.usingServer('http://localhost:4444/wd/hub')
		.withCapabilities(webdriver.Capabilities.chrome())
		.build();
	driver.manage().timeouts().setScriptTimeout(10000);
	this.driver = driver;
	this.By = By;
	this.until = until;
}

module.exports = function() {
	this.World = World;
};

