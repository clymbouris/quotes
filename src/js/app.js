


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
	self.currentQuote = ko.observable('');
	self.currentAuthor = ko.observable('');
	
	self.nextQuote = function() {
		var random = Math.floor(Math.random() * self.availableAuthors + 1);
		var author = model.data.authors[random].name;
		var quote = model.data.quotes[random].q1;

		self.currentQuote(quote);
		self.currentAuthor(author);
	};
	self.nextQuote();
	

	self.getRandomQuote = function(author) {

	};
	
	self.shareTwitter = function() {

	}; 
}



// -- Initialize Components -- //

model.init();
