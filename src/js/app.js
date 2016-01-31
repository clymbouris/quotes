// Load Quotes from JSON file
var data;
$.getJSON('js/quotes.json')
	.done(function( json ) {
		data = json;
	})
	.fail(function( jqxhr, textStatus, error ) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
});

function ViewModel() {
	var self = this;
	self.test = true;
}

var model = {

};

var view = {

};

var vm = $.extend(new ViewModel(), data);
ko.applyBindings(vm);
console.log(vm.test);