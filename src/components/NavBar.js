import image from "./logo.png";
const NavBar = () =>{
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand"><img src={image} alt="Logo" width="65px"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex ms-auto">
          <button type="button" className="btn btn-outline-secondary">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page">Home</a>
              </li>
            </button>
            <button type="button" className="btn btn-outline-secondary">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page">Sobre nosotros</a>
              </li>
            </button>
            <button type="button" className="btn btn-outline-secondary">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page">Hace tu pedido!</a>
              </li>
            </button>
        </ul>
      </div>
    </div>
  </nav>
}

export default NavBar;