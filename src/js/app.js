


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



// -- VIEW -- //

var view = {

};



// -- VIEWMODEL -- //

function ViewModel() {

	var self = this;
	
	self.test = true;
}



// -- Initialize Components -- //

model.init();
var vm = new ViewModel();
ko.applyBindings(vm);
console.log(vm.test);