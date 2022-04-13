//Sidebar scrolling
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#sidebar'
  })
  
  //Back to top
  var btn = $('#back-to-top');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });