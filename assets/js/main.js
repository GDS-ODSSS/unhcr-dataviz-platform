// Header template
class hcrHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="p-3 border-bottom">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/img/unhcr_logo_blue.svg" alt="UNHCR Logo"/>
                    </a>
                    <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Chart gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">General guidance</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tools</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">R</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Adobe Illustrator</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">MS PowerBI</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">MS Excel</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link">Products</a>
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
        <footer class="bg-dark p-3 mt-auto">
            <div class="container">
                <div class="d-flex flex-wrap justify-content-between align-items-center mb-2">
                    <div class="navbar navbar-expand navbar-dark">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Chart gallery</a></li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">General guidance</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Tools</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Products</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" class="btn btn-primary justify-content-end">
                      Contact us
                    </button>
                </div>
                <p class="text-muted"><small>© UNHCR 2022</small></p>
            </div>
        </footer>
    `
    }
}
customElements.define ('hcr-footer', hcrFooter);



// Porfolio isotope and filter
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