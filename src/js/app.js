$.getJSON('quotes.json')
	.done(function (data) {
		console.log(data.authors.one.name);
	})
	.fail(function( jqxhr, textStatus, error ) {
	    var err = textStatus + ", " + error;
	    console.log( "Request Failed: " + err );
});