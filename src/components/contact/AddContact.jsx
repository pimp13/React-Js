import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";
import { Spinner } from "../index";

const AddContact = () => {
  const { loading, onCategoryChange, category, createCategory } = useContext(CategoryContext);

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">ساخت دسته بندی جدید</h5>
          </div>
          {loading ? <Spinner /> : (
            <div className="card-body">
              <form className="row g-4 align-items-center" onSubmit={createCategory}>
                <div className="col-lg-8">
                  <label className="form-label">name</label>
                  <input type="text"
                         className="form-control"
                         onChange={onCategoryChange}
                         value={category.name}
                         placeholder="category name"
                         name="name" />
                  <div className="form-text">ورود نام وبسایت</div>
                </div>

                <div className="col-lg-4">
                  <label className="form-label">slug</label>
                  <input type="text"
                         className="form-control"
                         placeholder="slug"
                         onChange={onCategoryChange}
                         value={category.slug}
                         name="slug" />
                  <div className="form-text">استفاده برای تماس و ارسال ایمیل</div>
                </div>


                <div className="col-12">
                  <label className="form-label">description</label>
                  <textarea className="form-control"
                            name="description"
                            value={category.description}
                            onChange={onCategoryChange}
                            rows="3"></textarea>
                  <div className="form-text">برای نوشتن شرح مختصری از شرکت یا وبسایت</div>
                </div>


                <div className="col-lg-6">
                  <label className="form-label">is_active</label>
                  <select className="form-select"
                          onChange={onCategoryChange}
                          value={category.is_active}
                          name="is_active">
                    <option value="1">فعال</option>
                    <option value="0">غیرفعال</option>
                  </select>
                </div>

                <div className="d-sm-flex justify-content-end">
                  <button type="submit" className="btn btn-primary mb-0 me-3">ذخیره</button>
                  <button type="reset" className="btn btn-outline-danger mb-0">لغو</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="col-md-3">
        <div>
          <p>دسته بندی خود را ایجاد کنید</p>
        </div>
      </div>
    </div>
  )
}
export default AddContact;