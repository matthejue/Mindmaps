$(function() {
  var moveLeft = 20;
  var moveDown = 10;

  $('a.trigger').hover(function(e) {
    $(this).prev().show();
      //.css('top', e.pageY + moveDown)
      //.css('left', e.pageX + moveLeft)
      //.appendTo('body');
  }, function() {
    $(this).prev().hide();
  });

  $('a.trigger').mousemove(function(e) {
    $(this).prev().css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });

});