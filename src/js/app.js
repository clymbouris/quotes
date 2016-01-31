


// -- MODEL -- //

var model = {
	data: null,
	init: function() {
		$.getJSON('js/quotes.json')
		.done(function( json ) {
			model.data = json;
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
	
	self.currentQuote = ko.observable();
	
	self.nextQuote = function() {
		var author = model.data.authors.one.name;
		console.log(author);
		var quote = model.data.quotes.one.q1;
		console.log(quote);
		self.currentQuote({ "author": author, "quote": quote});
	};
	self.nextQuote();
	
	self.getRandomAuthor = function() {
		var max = model.data.authors.length - 1;
		var random = Math.floor(Math.random() * max + 1);

	};

	self.getRandomQuote = function(author) {

	};
	
	self.shareTwitter = function() {

	}; 
}



// -- Initialize Components -- //

model.init();
var vm = new ViewModel();
ko.applyBindings(vm);