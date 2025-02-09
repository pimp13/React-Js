import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { CategoryContext } from "../../context/categoryContext";
import { getContactById, updateContacts } from "../../services/categoryService";
import { Spinner } from "../index";

const EditContact = () => {
  const {
    loading,
    setLoading,
    categories,
    setCategories,
    setFilteredCategories
  } = useContext(CategoryContext);
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getContactById(contactId);
        setCategory(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const setCategoryFormItems = (event) => {
    setCategory({
      ...category,
      [event.target.name]: event.target.value
    });
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      /* Update category mapping
      * 1- Copy State
      * 2- Update State
      * 3- Send Request To Server But Do Update Database
      * 4- Check If Status === 200 -> Do Noting; Else If Status === error(404,401,500,...) setState(copyState)
      * end
      * */
      const { status, data: newCategory } = await updateContacts(contactId, category); // Send Request To Server

      if (newCategory && status === 200) {
        const allCategories = [...categories];
        const categoryIndex = allCategories.findIndex((c) => c.id === parseInt(contactId));
        const reviewCategory = { ...newCategory.data, is_active: newCategory.data.is_active ? 1 : 0 };

        allCategories[categoryIndex] = { ...reviewCategory };
        setCategories(allCategories);
        setFilteredCategories(allCategories);

        navigate("/contacts");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">ساخت دسته بندی جدید</h5>
          </div>
          {loading ? <Spinner /> : (<div className="card-body">
            <form className="row g-4 align-items-center" onSubmit={formSubmitHandler}>
              <div className="col-lg-8">
                <label className="form-label">name</label>
                <input type="text"
                       className="form-control"
                       onChange={setCategoryFormItems}
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
                       onChange={setCategoryFormItems}
                       value={category.slug}
                       name="slug" />
                <div className="form-text">استفاده برای تماس و ارسال ایمیل</div>
              </div>


              <div className="col-12">
                <label className="form-label">description</label>
                <textarea className="form-control"
                          name="description"
                          value={category.description}
                          onChange={setCategoryFormItems}
                          rows="3"></textarea>
                <div className="form-text">برای نوشتن شرح مختصری از شرکت یا وبسایت</div>
              </div>


              <div className="col-lg-6">
                <label className="form-label">is_active</label>
                <select className="form-select"
                        onChange={setCategoryFormItems}
                        value={category.is_active}
                        name="is_active">
                  <option value={1}>فعال</option>
                  <option value={0}>غیرفعال</option>
                </select>
              </div>

              <div className="d-sm-flex justify-content-end">
                <button type="submit" className="btn btn-primary mb-0 me-3">
                  ذخیره
                </button>
                <button type="reset" className="btn btn-outline-danger mb-0">لغو</button>
              </div>
            </form>
          </div>)}
        </div>
      </div>

      <div className="col-md-3">
        <div>
          <p>دسته بندی خود را ایجاد کنید</p>
        </div>
      </div>
    </div>
  );
}

export default EditContact;