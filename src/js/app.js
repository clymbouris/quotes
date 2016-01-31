


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
	
	self.currentQuote = ko.observable(self.nextQuote());
	
	self.nextQuote = function() {
		var author = model.data.authors.one.name;
		var quote = model.data.quotes.one.q1;
		self.currentQuote({ "author": author, "quote": quote});
	};
	
	self.getRandomNumber = function(max) {

	};
	
	self.shareTwitter = function() {

	}; 
}



// -- Initialize Components -- //

model.init();
var vm = new ViewModel();
ko.applyBindings(vm);