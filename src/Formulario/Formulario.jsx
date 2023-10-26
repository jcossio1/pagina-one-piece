export function Formulario() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="bi bi-person-circle"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellidos" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="bi bi-person-circle"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombres" />
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="bi bi-bandaid"></i></span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Edad" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="bi bi-cake2"></i></span>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Nacimiento" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="bi bi-person-bounding-box"></i></span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Documento" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="bi bi-envelope"></i></span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo" />
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">@</span>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Selecciona una opcion</option>
                                <option value="1">Medio pollo + papas y gaseosa</option>
                                <option value="2">Ajiaco santafereño</option>
                                <option value="3">Alitas de pollo BBQ</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">@</span>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Selecciona una opcion</option>
                                <option value="1">Clase de tango</option>
                                <option value="2">Clase de chapeta</option>
                                <option value="3">Clase del merengue de la muerte</option>
                            </select>
                        </div>
                    </div>
                </div>




<button className="btn btn-danger w-25 my-3 mx-auto d-block text-warning">Enviar</button>
            </form>
        </>
    )
}