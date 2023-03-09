

export default function Navigation() {

    return (
        <nav class="navbar navbar-expand-lg sticky-top"  style={{backgroundColor:"#e3f2fd"}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Guns and roses </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#catalogue">Catalogue </a>
                        </li>
                     
                        <li class="nav-item">
                            <a class="nav-link " href="#contact" tabindex="-1" aria-disabled="true">contacts </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}