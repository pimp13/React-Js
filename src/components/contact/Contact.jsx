import { Link } from "react-router-dom";

const Contact = ({ category, deleteCategory }) => {
  return (
    <div className="col-md-6 col-xxl-4">
      <div className="card bg-transparent border h-100">
        <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
          <div className="d-sm-flex align-items-center">
            <div className="avatar avatar-md flex-shrink-0">
              <img className="avatar-img rounded-circle" src="/images/avatar/09.jpg" alt="avatar" />
            </div>
            <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
              <h5 className="mb-1">
                <Link to={`/contact/${category.id}`}>{category.name}</Link>
              </h5>
              <p className="mb-0 small">
                {parseInt(category.is_active) === 1 ?
                  <span className="badge bg-success bg-opacity-10 text-success">فعال</span> :
                  <span className="badge bg-danger bg-opacity-10 text-danger">غیرفعال</span>}
              </p>
            </div>
          </div>

          <div className="dropdown">
            <a href="javascript:void(0)" className="btn btn-sm btn-light btn-round small mb-0" role="button"
               id="dropdownShare1"
               data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots fa-fw"></i>
            </a>
            <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
                aria-labelledby="dropdownShare1">
              <li>
                <Link className="dropdown-item" to={`/contact/${category.id}/edit`}><i
                  className="bi bi-pencil-square fa-fw me-2"></i>
                  ویرایش
                </Link>
              </li>
              <li>
                <button type="button" className="dropdown-item"
                        onClick={deleteCategory}>
                  <i className="bi bi-trash fa-fw me-2"></i>حذف
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-body">
          <p>{category?.slug}</p>
          <hr />
          <p>{category?.description}</p>
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
            <a href="javascript:void(0)" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip"
               data-bs-placement="top"
               title="" data-bs-original-title="Message" aria-label="Message">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;