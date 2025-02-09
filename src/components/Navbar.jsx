const Navbar = () => {
  return (
    <nav className="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center w-100">
          <div className="d-flex align-items-center d-xl-none"><a className="navbar-brand" href=""><img
            className="light-mode-item navbar-brand-item h-30px" src="null" alt=""/> <img
            className="dark-mode-item navbar-brand-item h-30px" src="null" alt=""/> </a>
          </div>
          <div className="navbar-expand-xl sidebar-offcanvas-menu">
            <button className="navbar-toggler me-auto" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar" aria-expanded="false"
                    aria-label="Toggle navigation" data-bs-auto-close="outside"><i
              className="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip" data-bs-target="#offcanvasMenu"></i></button>
          </div>
          <div className="navbar-expand-lg ms-auto ms-xl-0">
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTopContent" aria-controls="navbarTopContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-animation"><span></span><span></span><span></span></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarTopContent">
              <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative"><input
                    className="form-control pe-5 bg-secondary bg-opacity-10 border-0" type="search"
                    placeholder="جستجو..." aria-label="Search"/>
                    <button
                      className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                      type="submit"><i className="fas fa-search fs-6 text-primary"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="ms-xl-auto">
            <ul className="navbar-nav flex-row align-items-center">
              <li className="nav-item ms-2 ms-md-3 dropdown"><a className="btn btn-light btn-round mb-0" href="#"
                                                                role="button" data-bs-toggle="dropdown"
                                                                aria-expanded="false" data-bs-auto-close="outside"><i
                className="bi bi-bell fa-fw"></i></a><span className="notif-badge animation-blink"></span>
                <div
                  className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                  <div className="card bg-transparent">
                    <div
                      className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                      <h6 className="m-0">پیام ها<span className="badge bg-danger bg-opacity-10 text-danger ms-2">2 پیام جدید</span>
                      </h6><a className="small" href="#">حذف همه</a></div>
                    <div className="card-body p-0">
                      <ul className="list-group list-unstyled list-group-flush">
                        <li><a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                          <div className="me-3">
                            <div className="avatar avatar-md"><img className="avatar-img rounded-circle"
                                                                   src="null" alt="avatar"/></div>
                          </div>
                          <div><p className="text-body small m-0">به<b>مهرداد قربانی</b>برای فارغ التحصیلی از<b>دانشگاه
                            دماوند</b>تبریک میگوییم.</p><u className="small">پیام تبریک</u></div>
                        </a></li>
                        <li><a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                          <div className="me-3">
                            <div className="avatar avatar-md"><img className="avatar-img rounded-circle"
                                                                   src="null" alt="avatar"/></div>
                          </div>
                          <div><h6 className="mb-1">افزودن دوره جدید</h6><p className="small text-body m-0">با ویژگی های
                            جدید آشنا شوید...</p><u className="small">مشاهده</u></div>
                        </a></li>
                        <li><a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                          <div className="me-3">
                            <div className="avatar avatar-md"><img className="avatar-img rounded-circle"
                                                                   src="null" alt="avatar"/></div>
                          </div>
                          <div><h6 className="mb-1">درخواست جدید برای درخواست مربی</h6><u className="small">مشاهده</u>
                          </div>
                        </a></li>
                        <li><a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                          <div className="me-3">
                            <div className="avatar avatar-md"><img className="avatar-img rounded-circle"
                                                                   src="null" alt="avatar"/></div>
                          </div>
                          <div><h6 className="mb-1">به روز رسانی نسخه 2.3</h6><p className="small text-body m-0">با
                            ویژگی های جدید آشنا شوید...</p><small className="text-body">5 دقیقه پیش</small></div>
                        </a></li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent border-0 py-3 text-center position-relative"><a href="#"
                                                                                                               className="stretched-link">مشاهده
                      تمام فعالیت ها</a></div>
                  </div>
                </div>
              </li>
              <li className="nav-item ms-3 dropdown"><a className="avatar avatar-sm p-0" href="#" id="profileDropdown"
                                                        role="button" data-bs-auto-close="outside"
                                                        data-bs-display="static" data-bs-toggle="dropdown"
                                                        aria-expanded="false"><img className="avatar-img rounded-circle"
                                                                                   src="null"
                                                                                   alt="avatar"/></a>
                <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                    aria-labelledby="profileDropdown">
                  <li className="px-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3"><img className="avatar-img rounded-circle shadow"
                                                        src="null" alt="avatar"/></div>
                      <div><a className="h6" href="#">الهام حسینی</a><p className="small m-0">example@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2"></i>ویرایش</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2"></i>تنظیمات</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2"></i>پشتیبانی</a>
                  </li>
                  <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i
                    className="bi bi-power fa-fw me-2"></i>خروج</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li>
                    <div
                      className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                      <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                          <path
                            d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                          <use href="#"></use>
                        </svg>
                        روشن
                      </button>
                      <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
                          <path
                            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                          <path
                            d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                          <use href="#"></use>
                        </svg>
                        تیره
                      </button>
                      <button type="button" className="btn btn-sm mb-0 active" data-bs-theme-value="auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
                          <use href="#"></use>
                        </svg>
                        خودکار
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;