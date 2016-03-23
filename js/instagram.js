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


$.getJSON("https://api.instagram.com/v1/recent?access_token=458814967.b7572ad.f759e9bc61a5439a84fc455fc84dd503&callback=callbackFunction",
  {
    author_id: 458814967
  },
  function (data){
    var photoHTML = '<ul>';
    $.each(data.items, function(i, photo){
      photoHTML += 'photo.html';
    });
    photoHTML += '</ul>';
    $('#photos').html(photoHTML);
  });
