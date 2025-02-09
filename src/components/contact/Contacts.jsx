import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";
import { Spinner, Contact } from "../index";

const Contacts = () => {
  const { categoryQuery, searchCategory, loading, filteredCategories, deleteCategory } = useContext(CategoryContext);

  return (
    <>
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="h3 mb-2 mb-sm-0 fs-5">داشبورد</h1>
        </div>
      </div>

      <div className="card bg-transparent">
        <div className="card-header bg-transparent border-bottom px-0">
          <div className="row g-3 align-items-center justify-content-between">
            <div className="col-md-8">

              <div className="rounded position-relative">
                <input className="form-control bg-transparent"
                       type="search"
                       value={categoryQuery.text}
                       onChange={searchCategory}
                       placeholder="جستجوی دسته بندی"
                       aria-label="Search" />
                <span
                  className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset">
                  <i className="fas fa-search fs-6"></i>
                </span>
              </div>

            </div>

            <div className="col-md-3">
              <ul className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end"
                  id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a href="#" className="nav-link mb-0 me-2 active" data-bs-toggle="tab">
                    <i className="fas fa-fw fa-th-large"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link mb-0" data-bs-toggle="tab">
                    <i className="fas fa-fw fa-list-ul"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {
          loading ? <Spinner /> : (
            <div className="card-body px-0">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="nav-preview-tab-1">
                  <div
                    className={filteredCategories.length === 0 ? 'row g-4 align-items-center justify-content-center' : 'row g-4'}>
                    {
                      Array.isArray(filteredCategories) && filteredCategories.length > 0 ? filteredCategories.map(category => (
                        <Contact
                          key={category.id}
                          category={category}
                          deleteCategory={() => deleteCategory(category.id, category.name)}
                        />
                      )) : (
                        <div className="col-md-4 col-lg-5">
                          <div className="d-flex flex-column">
                            <div className="alert alert-warning">
                              <p>مخاطب یافت نشد!</p>
                            </div>
                            <div className="mx-auto">
                              <img src={require('../../assets/not-found-04.gif')} className="img-fluid"
                                   style={{ width: "20rem" }} alt="NotFound Category" />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
export default Contacts;