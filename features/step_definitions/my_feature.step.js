module.exports = function() {
	this.Given(/^I am on the Cucumber\.js GitHub repository$/, function(callback) {
		// Write code here that turns the phrase above into concrete actions
		// this.driver.getTitle().then(function(title) {
		// 	console.log(title);
		// 	callback();
		// });
		callback();

	});

	this.When(/^I go to the README file$/, function(callback) {
		// Write code here that turns the phrase above into concrete actions
		callback();
	});

	this.Then(/^I should see "([^"]*)" as the page title$/, function(arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		this.driver.get("https://bi4.accenture.com/Reports/Pages/Report.aspx?ItemPath=/2764_CEM/Capacity%20and%20Performance%20Reporting/Server%20Reports/Glance");
		this.driver.findElement(this.By.id('ctl32_ctl04_ctl03_txtValue')).sendKeys(arg1);
		this.driver.findElement(this.By.id('ctl32_ctl04_ctl00')).click();
		// this.driver.wait(this.until.titleIs('AA'),60*1000)
		this.driver.wait(this.until.elementsLocated({tagName: 'map'}))
		.then(()=>{
			callback();
		});
	});
}