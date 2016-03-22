function set_body_width() { // set body height = window height
  var wh = $(window).width();
  $(".slider").width(wh);
}
$(document).ready(function() {
  set_body_width();
  $(window).bind('resize', function() { set_body_width(); });
});
