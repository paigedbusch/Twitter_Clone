$(document).ready(function () {
$('.tweet-actions').hide();
$('.stats').hide();
$('.reply').hide();

    $('.tweet-compose').on('click', function () {
        $('.tweet-compose').height('5em');
        $('#tweet-controls').show();
    });

    $('.tweet-compose').keyup(function() {
        var text = $('.tweet-compose').val();
        var charCount = $('#char-count');
        var maxnum = 140;
        var tweetButton = $('.button');
        charCount.text(140-text.length);
        if (maxnum-text.length <= 10) {
            charCount.css('color', 'red');
        } else {
            charCount.css('color', '#999');
        }
        if (maxnum-text.length < 0) {
            tweetButton.attr('disabled', true);
        } else {
                tweetButton.attr('disabled', false);
        }
    });
    
    $('.button').on('click', function() {
        addTweet();
    });

    $('#stream').on('mouseenter', '.tweet', function() {
        var actions = $(this).find('.tweet-actions');
        var stats = $(this).find('.stats');
        var reply = $(this).find('.reply');
        actions.slideDown();
        stats.slideDown();
        reply.slideDown();

    });

    $('#stream').on('mouseleave', '.tweet', function() {
        var actions = $(this).find('.tweet-actions');
        var stats = $(this).find('.stats');
        var reply = $(this).find('.reply');
        actions.slideUp();
        stats.slideUp();
        reply.slideUp();
    });

    //$('.stats').on('')

    //General functions.
    function addTweet() {
        console.log('something');
        var message = $('.tweet-compose').val();
        var newTweet = '<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/funwatercat.jpg" />' +
							'<strong class="fullname">Paige Busch</strong>' +
							'<span class="username">@paijuh</span>' +
							'<p class="tweet-text">'+ message +'</p>' +
							'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li>' +
									'<li><span class="icon action-retweet"></span> Retweet</li>' +
									'<li><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span> More</li>' +
								'</ul>' +
							'</div>' +
							'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +
										'<img src="img/jennyshen.jpg" />' +
										'<img src="img/damenleeturks.jpg" />' +
									'</div>' +
								'</div>' +
								'<div class="time">' +
									'1:04 PM - 19 Sep 13' +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @paijuh"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>'
        $('#stream').prepend(newTweet);

        var addedTweet = $('.tweet').first();
        addedTweet.find('.tweet-actions').hide();
        addedTweet.find('.stats').hide();
        addedTweet.find('.reply').hide();
    };
});