


// -- MODEL -- //

var model = {
	data: null,
	init: function() {
		$.getJSON('js/quotes.json')
		.done(function( json ) {
			model.data = json;
			var vm = new ViewModel();
			ko.applyBindings(vm);
		})
		.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
	}
};


// -- VIEWMODEL -- //

function ViewModel() {

	var self = this;
	
	self.availableAuthors = 1;
	self.currentQuote = ko.observable();
	
	self.nextQuote = function() {
		
		var authorsMax = Object.keys(model.data.authors).length - 1;
		var aRandom = Math.floor(Math.random() * authorMax);
		var author = model.data.authors[aRandom].name;

		var quotesMax = Object.keys(model.data.quotes[aRandom]).length - 1;
		var qRandom = Math.floor(Math.random() * quotesMax);
		var quote = model.data.quotes[aRandom][qRandom];

		self.currentQuote({ "author": author, "quote": quote });
	};
	self.nextQuote();
	
	self.shareTwitter = function() {

	}; 
}



// -- Initialize Components -- //

model.init();
