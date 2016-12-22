define('app', ['logging'], function(logging)
{
	var App = function()
	{
		logging.applyLogging(this, 'App');

		this.initializeEventListeners();
		$(document).foundation();
	};

	App.prototype.initializeEventListeners = function()
	{

	};

	return new App();
});