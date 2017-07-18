chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		$('body').on('DOMNodeInserted',function(e){
		    var target = e.target; //inserted element;

				// drag event
				if($(e.target).hasClass("drag-tile")){
					// save scroll in localstorage

					var scrollTop = $(".grid-canvas").scrollTop();

					if(scrollTop && scrollTop != 0){

						// wait tfs set it back to zero
						var s = setInterval(function(){
								var scrollTopN = $(".grid-canvas").scrollTop();
								if(scrollTopN === 0){
									console.log('enter!')
									 $(".grid-canvas").scrollTop(scrollTop);
									 clearInterval(s);
								}
						}, 200)
					}

				};
		});
		// ----------------------------------------------------------

// $(".grid-canvas").scrollTop();

// .grid-canvas

	}
	}, 10);
});
