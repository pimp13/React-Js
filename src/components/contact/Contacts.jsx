import Contact from "./Contact";

const Contacts = ({ contacts }) => {
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
							<form className="rounded position-relative">
								<input className="form-control bg-transparent" type="search" placeholder="جستجوی مدرس" aria-label="Search" />
								<button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
									<i className="fas fa-search fs-6 "></i>
								</button>
							</form>
						</div>

						<div className="col-md-3">
							<ul className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end" id="pills-tab" role="tablist">
								<li className="nav-item">
									<a href="#nav-preview-tab-1" className="nav-link mb-0 me-2 active" data-bs-toggle="tab">
										<i className="fas fa-fw fa-th-large"></i>
									</a>
								</li>
								<li className="nav-item">
									<a href="#nav-html-tab-1" className="nav-link mb-0" data-bs-toggle="tab">
										<i className="fas fa-fw fa-list-ul"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>


				<div className="card-body px-0">
					<div className="tab-content">
						<div className="tab-pane fade show active" id="nav-preview-tab-1">
							<div className="row g-4">
								<Contact />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contacts;