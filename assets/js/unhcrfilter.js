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