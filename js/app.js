// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
// 
// GET YOUR API HERE https://console.developers.google.com/apis/api


// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg


$(document).ready(function () {

    var key = 'AIzaSyB6b6JzXJrAxGaPL19Y8z47Kq28nyt2ESU';
    var playlistId = 'PLGI2vA9a3Tt7ZiLJnOs2LwCrdtkxvhO1J';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('main').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
        });
    }

		// CLICK EVENT
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });

    //comments call
  

    

    // https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB6b6JzXJrAxGaPL19Y8z47Kq28nyt2ESU&&textFormat=plainText&part=snippet&allThreadsRelatedToChannelId=UCCpldBpw1eBel90tlxI04Sg

});





$(document).ready(function () {

    var URLcomments = 'https://www.googleapis.com/youtube/v3/commentThreads';
    var allThreadsRelatedToChannelId= 'UCCpldBpw1eBel90tlxI04Sg';
    var key = 'AIzaSyB6b6JzXJrAxGaPL19Y8z47Kq28nyt2ESU';


    var optionsComment = {
        // part: 'snippet',
        key: key,
        textFormat: "plainText",
        allThreadsRelatedToChannelId: allThreadsRelatedToChannelId,
        part: 'snippet'
    }

    loadComments();

    function loadComments() {
        $.getJSON(URLcomments, optionsComment, function(dataComments) {
            console.log(dataComments)
        })
    }


});