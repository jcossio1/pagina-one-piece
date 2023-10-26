import './Home.css'
import {Formulario} from '../Formulario/Formulario'

export function Home() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="../../src/assets/img/icon.png" alt="" className='icon ' />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

      </header>
      <div className='banner text-white fw-bold'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus accusantium nisi labore adipisci officiis, possimus repellendus! Quaerat non adipisci officia omnis, error doloremque iusto dolore cum eaque temporibus pariatur similique.</p>
        <button className='btn btn-outline-dark '>Conocenos</button>
      </div>
      <div className="container-fluid bg-black">
        <div className="row">
          <div className="row">
            <div className="col-12 text-white align-self-center text-center">
              <h5>LA CASITA DEL HORROR DE LOS NAKAMAS</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates velit suscipit, eos itaque ut, soluta quas minima facere aliquid aperiam excepturi dolor at. Aspernatur eligendi sequi exercitationem libero consectetur.</p>
              <img src="../../src/assets/img/nami.png" alt="nami❤" className='img-fluid w-100' />
            </div>

          </div>
        </div>
        <div className="row"></div>
      </div>
      <div className="banner2"></div>

      <div className="container-fluid bg-warning-subtle">
        <div className="row">
          <div className="col-12">
            <img src="../../src/assets/img/halloween2.jpg" alt="" className='img-fluid w-100' />

          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 my-3 fw-bold ">
          <div className="col textstart">
            <div className="card h-100 p-3 shadow bg-warning-subtle">
              <img src="../../src/assets/img/targeta1.jpg" alt="" className='img-fluid w-100' />

              <h3 className='text-center bold '>Nico robin</h3>
              <p className='text-danger-emphasis text-danger-emphasis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat neque alias modi ab quia ad, architecto incidunt voluptatem cupiditate quo iste vitae amet quisquam veniam eius. Modi sunt fugiat delectus adipisci quia commodi dolorem voluptate perferendis iusto animi consectetur tempora sed quod laboriosam iure quam a esse dolore rem, cupiditate similique! Laborum amet aut expedita officia perspiciatis rem maxime quaerat omnis cumque ullam animi eaque, dicta id libero?</p>
              <hr />
              <h5 className='fw-bold text-danger-emphasis text-center'>SE BUSCA VIVO O MUERTO </h5>
              <h4 className='fw-bold text-danger-emphasis text-center'>$70.000.000.000</h4>
              <button className='btn btn-danger text-warning'>
                <i class="bi bi-coin"></i>
                Ampliar</button>
            </div>

          </div>
          <div className="col text-start ">
            <div className="card h-100 p-3 shadow bg-warning-subtle">
              <img src="../../src/assets/img/targeta2.jpg" alt="" className='img-fluid w-100' />
              <h3 className='text-center bold text-danger-emphasis'>Wampis</h3>
              <p className='text-danger-emphasis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat neque alias modi ab quia ad, architecto incidunt voluptatem cupiditate quo iste vitae amet quisquam veniam eius. Modi sunt fugiat delectus adipisci quia commodi dolorem voluptate perferendis iusto animi consectetur tempora sed quod laboriosam iure quam a esse dolore rem, cupiditate similique! Laborum amet aut expedita officia perspiciatis rem maxime quaerat omnis cumque ullam animi eaque, dicta id libero?</p>
              <hr />
              <h5 className='fw-bold text-danger-emphasis text-center'>SE BUSCA VIVO O MUERTO </h5>
              <h4 className='fw-bold text-danger-emphasis text-center'>$30.000.000.000</h4>
              <button className='btn btn-danger text-warning'>
                <i class="bi bi-coin"></i>
                Ampliar</button>
            </div>

          </div>
          <div className="col text-start">
            <div className="card h-100 p-3 shadow bg-warning-subtle">
              <img src="../../src/assets/img/targeta3.png" alt="" className='img-fluid w-100' />
              <h3 className='text-center bold text-danger-emphasis'>Zoro Roronoa</h3>
              <p className='text-danger-emphasis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat neque alias modi ab quia ad, architecto incidunt voluptatem cupiditate quo iste vitae amet quisquam veniam eius. Modi sunt fugiat delectus adipisci quia commodi dolorem voluptate perferendis iusto animi consectetur tempora sed quod laboriosam iure quam a esse dolore rem, cupiditate similique! Laborum amet aut expedita officia perspiciatis rem maxime quaerat omnis cumque ullam animi eaque, dicta id libero?</p>
              <hr />
              <h5 className='fw-bold text-danger-emphasis text-center'>SE BUSCA VIVO O MUERTO </h5>
              <h4 className='fw-bold text-danger-emphasis text-center'>$5.000.000.000</h4>
              <button className='btn btn-danger text-warning'>
                <i class="bi bi-coin"></i>
                Ampliar</button>
            </div>

          </div>
        </div>
      </div>

      <section className=''>
        <div className="container ">
          <div className="row">
            <div className="col-12">
              
<Formulario></Formulario>

            </div>
          </div>
        </div>

      </section>

      <footer>
        <div className="container-fluid bg-dark text-white">
          <div className="row p-5">
            <div className="col-6 text-end border-end">

              <h5>Medellin-colombia</h5>
              <h5>Todos los derechos reservados &copy;</h5>
            </div>
            <div className="col-6 aling-self-center">
              <i class="bi bi-instagram p-2 fs-4"></i>
              <br />
              <i class="bi bi-whatsapp p-2 fs-4"></i>
              <br />
              <i class="bi bi-twitter-x p-2 fs-4"></i>
            </div>
          </div>
        </div>
      </footer>

    </>
  )

};