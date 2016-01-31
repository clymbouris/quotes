
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
	
	self.currentQuote = ko.observable();
	
	self.nextQuote = function() {
		
		if (!self.authorsMax) self.authorsMax = Object.keys(model.data.authors).length;
		var aRandom = Math.floor(Math.random() * self.authorsMax);
		var author = model.data.authors[aRandom].name;

		var quotesMax = Object.keys(model.data.quotes[aRandom]).length;
		var qRandom = Math.floor(Math.random() * quotesMax);
		var quote = model.data.quotes[aRandom][qRandom];

		self.currentQuote({ "author": author, "quote": quote });
	};

	self.tweetQuote = function() {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + self.currentQuote().quote + '" ' + self.currentQuote().author));
	};
}



// -- Initialize Components -- //

model.init();
