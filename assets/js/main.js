// Header template
class hcrHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav class="navbar navbar-expand-lg border-bottom">
          <div class="container p-2">
            <a class="navbar-brand" href="/">
              <img src="/assets/img/unhcr_logo_blue.svg" alt="UNHCR Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
              aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/chart_gallery">Chart gallery</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/general_guidance">General guidance</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/tools">Tools</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/products">Products</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `
    }
}
customElements.define ('hcr-header', hcrHeader);


// Footer template
class hcrFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer mt-auto bg-dark py-3">
        <div class="container">
          <div class="d-flex flex-wrap justify-content-between">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/chart_gallery">Chart gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/general_guidance">General guidance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/tools">Tools</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/products">Products</a>
              </li>
            </ul>
            <a class="btn btn-primary" href="mailto:ipda@unhcr.org?subject=Mail from Dataviz Platform" role="button">Contact
              us</a>
          </div>
          <p class="text-muted px-3"><small>© UNHCR 2022</small></p>
        </div>
      </footer>
    `
    }
}
customElements.define ('hcr-footer', hcrFooter);



// Chart gallery isotope and filter
$(window).on('load', function() {
    var chartIsotope = $('.chart-container').isotope({
      itemSelector: '.chart-item'
    });

    $('#chart-filters li').on('click', function() {
      $("#chart-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      chartIsotope.isotope({
        filter: $(this).data('filter')
      });
    //   aos_init();
    });

  });