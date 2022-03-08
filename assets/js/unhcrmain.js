// Active state for header
let navLinks = document.querySelectorAll(".navbar .nav-item .nav-link");
let mainId = document.querySelector("main").id;

for (let navLink of navLinks) {
    if(navLink.dataset.active == mainId) {
        navLink.classList.add("active");
    }
}

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

// Filters and isotope
$(window).on('load', function() {
  var chartIsotope = $('.container-filter').isotope({
    itemSelector: '.item-filter'
  });

  $('#list-filter li').on('click', function() {
    $("#list-filter li").removeClass('filter-active');
    $(this).addClass('filter-active');

    chartIsotope.isotope({
      filter: $(this).data('filter')
    });
  });

});