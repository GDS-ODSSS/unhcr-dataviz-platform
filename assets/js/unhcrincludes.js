// Header template
class hcrHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg border-bottom">
                <div class="container p-2">
                <a class="navbar-brand" href="/unhcr-dataviz-platform/">
                    <img src="/assets/img/unhcr_logo_blue.svg" alt="UNHCR Logo" class="img-fluid" style="height: 3rem; max-height:2.75rem" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" data-active="home" href="/unhcr-dataviz-platform/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-active="chart_gallery" href="/unhcr-dataviz-platform/chart_gallery/">Chart gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-active="general_guidance" href="/unhcr-dataviz-platform/general_guidance/">General guidance</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-active="tools" href="/unhcr-dataviz-platform/tools/">Tools</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-active="products" href="/unhcr-dataviz-platform/products/">Products</a>
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
                    <a class="nav-link" href="/unhcr-dataviz-platform/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/unhcr-dataviz-platform/chart_gallery/">Chart gallery</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/unhcr-dataviz-platform/general_guidance/">General guidance</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/unhcr-dataviz-platform/tools/">Tools</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/unhcr-dataviz-platform/products/">Products</a>
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