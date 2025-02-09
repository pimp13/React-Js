import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    {
      href: "/contacts",
      label: "دسته بندی ها",
      activated: ({ isActive }) => [
        "nav-link",
        isActive ? "active" : ""
      ].join(' ')
    },
    {
      href: "/contact/add",
      label: "ایجاد دسته بندی",
      activated: ({ isActive }) => [
        "nav-link",
        isActive ? "active" : ""
      ].join(' ')
    },
  ];
  return (
    <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
      <div className="d-flex align-items-center">
        <Link to="/contacts" className="p-4 text-secondary fw-bold" style={{ fontSize: "1rem" }}>
          <span>I Love FullStack Development</span>
        </Link>
      </div>

      <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabIndex="-1"
           id="offcanvasSidebar">
        <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">

          <ul className="navbar-nav flex-column" id="navbar-sidebar">

            {Array.isArray(navItems) && navItems.length > 0 ? navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink to={item.href} className={item.activated}>
                  <i className="bi bi-house fa-fw me-2"></i>
                  {item.label}
                </NavLink>
              </li>
            )) : "No Menu"}

            {/*<li className="nav-item ms-2 my-2">بخش محتوا</li>*/}

            {/*<li className="nav-item">
              <NavLink to="/contact/add" className={({ isActive }) => [
                isActive ? "active" : "",
                "nav-link"
              ].join(' ')}>
                <i className="bi bi-house fa-fw me-2"></i>
                ایجاد دسته بندی
              </NavLink>
            </li>*/}
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

export default Sidebar;