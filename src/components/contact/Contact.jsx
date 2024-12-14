const Contact = () => {
    return (
        <div className="col-md-6 col-xxl-4">
            <div className="card bg-transparent border h-100">
                <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                        <div className="avatar avatar-md flex-shrink-0">
                            <img className="avatar-img rounded-circle" src="/images/avatar/09.jpg" alt="avatar" />
                        </div>
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h5 className="mb-0"><a href="#">نیلوفر جلیلی</a></h5>
                            <p className="mb-0 small">طراح وب</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots fa-fw"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2"></i>ویرایش</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2"></i>حذف</a></li>
                        </ul>
                    </div>
                </div>

                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                            <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw"></i></div>
                            <h6 className="mb-0 ms-2 fw-light">دانشجویان</h6>
                        </div>
                        <span className="mb-0 fw-bold">5,354</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw"></i></div>
                            <h6 className="mb-0 ms-2 fw-light">دوره ها</h6>
                        </div>
                        <span className="mb-0 fw-bold">15</span>
                    </div>
                </div>

                <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                            <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                        </ul>
                        <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message" aria-label="Message">
                            <i className="bi bi-envelope-fill"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;