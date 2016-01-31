$(function(){
	$.getJSON('js/quotes.json')
		.done(function( data ) {
			console.log(data);
		})
		.fail(function( jqxhr, textStatus, error ) {
   			var err = textStatus + ", " + error;
    		console.log( "Request Failed: " + err );
		});
})();