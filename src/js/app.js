


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
	
	self.availableAuthors = model.data.authors.length - 1;
	self.currentQuote = ko.observable();
	
	self.nextQuote = function() {
		
		var author = getRandomAuthor();
		var quote = model.data.quotes.one.q1;

		self.currentQuote({ "author": author, "quote": quote});
	};
	self.nextQuote();
	
	self.getRandomAuthor = function() {
		 
		var random = Math.floor(Math.random() * self.availableAuthors + 1);
		console.log(random);
		return model.data.authors[random].name;
	};

	self.getRandomQuote = function(author) {

	};
	
	self.shareTwitter = function() {

	}; 
}



// -- Initialize Components -- //

model.init();
