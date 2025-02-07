const Navbar = () => {
  return (
    <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="">
          <span>Logo</span>
        </a>
      </div>

      <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabIndex="-1"
           id="offcanvasSidebar">
        <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">

          <ul className="navbar-nav flex-column" id="navbar-sidebar">

            <li className="nav-item"><a href="admin-dashboard.html" className="nav-link active"><i
              className="bi bi-house fa-fw me-2"></i>داشبورد</a></li>

            <li className="nav-item ms-2 my-2">صفحات</li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#collapsepage" role="button"
                 aria-expanded="false" aria-controls="collapsepage">
                <i className="bi bi-basket fa-fw me-2"></i>دوره ها
              </a>
              <ul className="nav collapse flex-column" id="collapsepage" data-bs-parent="#navbar-sidebar">
                <li className="nav-item"><a className="nav-link" href="admin-course-list.html">لیست</a></li>
                <li className="nav-item"><a className="nav-link" href="admin-course-category.html">دسته
                  بندی</a></li>
                <li className="nav-item"><a className="nav-link" href="admin-course-detail.html">جزئیات</a>
                </li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="admin-student-list.html"><i
              className="fas fa-user-graduate fa-fw me-2"></i>هنرجویان</a></li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#collapseinstructors" role="button"
                 aria-expanded="false" aria-controls="collapseinstructors">
                <i className="fas fa-user-tie fa-fw me-2"></i>مدرس
              </a>
              <ul className="nav collapse flex-column" id="collapseinstructors"
                  data-bs-parent="#navbar-sidebar">
                <li className="nav-item"><a className="nav-link" href="admin-instructor-list.html">لیست</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="admin-instructor-detail.html">جزئیات</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="admin-instructor-request.html">درخواست ها
                    <span className="badge text-bg-success rounded-circle ms-2">2</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="admin-review.html"><i
              className="far fa-comment-dots fa-fw me-2"></i>دیدگاه ها</a></li>

            <li className="nav-item"><a className="nav-link" href="admin-earning.html"><i
              className="far fa-chart-bar fa-fw me-2"></i>درآمدها</a></li>

            <li className="nav-item"><a className="nav-link" href="admin-setting.html"><i
              className="fas fa-user-cog fa-fw me-2"></i>تنظیمات</a></li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#collapseauthentication" role="button"
                 aria-expanded="false" aria-controls="collapseauthentication">
                <i className="bi bi-lock fa-fw me-2"></i>احراز هویت
              </a>
              <ul className="nav collapse flex-column" id="collapseauthentication"
                  data-bs-parent="#navbar-sidebar">
                <li className="nav-item"><a className="nav-link" href="sign-up.html">ثبت نام</a></li>
                <li className="nav-item"><a className="nav-link" href="sign-in.html">ورود</a></li>
                <li className="nav-item"><a className="nav-link" href="forgot-password.html">فراموشی رمز
                  عبور</a></li>
                <li className="nav-item"><a className="nav-link" href="admin-error-404.html">صفحه 404</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="docs/index.html"><i
              className="far fa-clipboard fa-fw me-2"></i>کدهای کاربردی</a></li>

          </ul>

          <div className="px-3 mt-auto pt-3">
            <div className="d-flex align-items-center justify-content-between text-primary-hover">
              <a className="h5 mb-0 text-body" href="admin-setting.html" data-bs-toggle="tooltip"
                 data-bs-placement="top" title="تنظیمات">
                <i className="bi bi-gear-fill"></i>
              </a>
              <a className="h5 mb-0 text-body" href="index.html" data-bs-toggle="tooltip"
                 data-bs-placement="top" title="صفحه اصلی">
                <i className="bi bi-globe"></i>
              </a>
              <a className="h5 mb-0 text-body" href="sign-in.html" data-bs-toggle="tooltip"
                 data-bs-placement="top" title="خروج">
                <i className="bi bi-power"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;