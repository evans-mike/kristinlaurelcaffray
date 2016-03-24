// This section is my code
jQuery(function($) {
  $('.instagram').on('willLoadInstagram', function(event, options) {
    console.log(options);
  });
  $('.instagram').on('didLoadInstagram', function(event, response) {
    console.log(response.data[0].images.standard_resolution.url);
    function printFeed(response){
      var listHTML = '<ol>';
      var picture = '<li><img src="'+ response.data[0].images.standard_resolution.url +'" alt="imagefeed"></li>';
      listHTML += picture;
      listHTML += '</ol>';
      $(".instagram").html(listHTML);
    }
    printFeed(response);
  });
  $(document).ready(function() {
    var user_id = 458814967;
    var clientId = 'b7572adb1b3f4fd2b563e8fc8fe81530';
    var accessToken = '458814967.b7572ad.f759e9bc61a5439a84fc455fc84dd503';
    $('.instagram').instagram({
      user_id: user_id,
      show: 15,
      clientId: clientId,
      accessToken: accessToken
    });
  });
});

/*! jQuery Instagram - v0.3.1 - 2014-06-19
* http://potomak.github.com/jquery-instagram
* Copyright (c) 2014 Giovanni Cappellotto; Licensed MIT */
(function($) {

  function composeRequest(options) {
    var url = 'https://api.instagram.com/v1';
    var data = {};

    if (options.accessToken == null && options.clientId == null) {
      throw 'You must provide an access token or a client id';
    }

    data = $.extend(data, {
      access_token: options.accessToken || '',
      client_id: options.clientId || '',
      count: options.count || ''
    });

    if (options.url != null) {
      url = options.url;
    }
    else if (options.hash != null) {
      url += '/tags/' + options.hash + '/media/recent';
    }
    else if (options.search != null) {
      url += '/media/search';
      data = $.extend(data, options.search);
    }
    else if (options.user_id != null) {
      if (options.accessToken == null) {
        throw 'You must provide an access token';
      }
      url += '/users/' + options.user_id + '/media/recent';
    }
    else if (options.location != null) {
      url += '/locations/' + options.location.id + '/media/recent';
      delete options.location.id;
      data = $.extend(data, options.location);
    }
    else {
      url += '/media/popular';
    }

    return {url: url, data: data};
  }

  $.fn.instagram = function(options) {
    var that = this;
    options = $.extend({}, $.fn.instagram.defaults, options);
    var request = composeRequest(options);

    $.ajax({
      dataType: "jsonp",
      url: request.url,
      data: request.data,
      success: function(response) {
        that.trigger('didLoadInstagram', response);
      }
    });

    this.trigger('willLoadInstagram', options);

    return this;
  };

  $.fn.instagram.defaults = {
    accessToken: null,
    clientId: null,
    count: null,
    url: null,
    hash: null,
    user_id: null,
    location: null,
    search: null
  };

}(jQuery));



// $.ajax({
//     type: "GET",
//     dataType: "jsonp",
//     cache: false,
//     url: "https://api.instagram.com/v1/users/329396167/?access_token=458814967.b7572ad.f759e9bc61a5439a84fc455fc84dd503",
//     success: function(data) {
//       for (var i = 0; i < 6; i++) {
//         $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
//         }
//       }
//     });














// $(document).ready(function() {
//   $('.instagra_blog').load(function(){
//     var instagramAPI = "https://api.instagram.com/?jsoncallback=?";
//     var instagramOptions = {
//       author_id: 329396167,
//       format: "json"
//     };
//     var displayPhotos(data){
//
//     };
//     $.getJSON()
//   });
// });//end ready
//
//
// https://api.instagram.com/v1/users/yeahokayok/media/recent/?access_token=458814967.b7572ad.f759e9bc61a5439a84fc455fc84dd503


// $.getJSON("https://api.instagram.com/v1/users/self/media/recent/?access_token=458814967.b7572ad.f759e9bc61a5439a84fc455fc84dd503&callback=callbackFunction",
//   {
//     author_id: 458814967,
//     format: "json"
//   },
//   function (data){
//     var photoHTML = '<ul>';
//     $.each(data.items, function(i, photo){
//       photoHTML += 'photo.html';
//     });
//     photoHTML += '</ul>';
//     $('#photos').html(photoHTML);
//   });
