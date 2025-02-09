import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Spinner } from "../index";
import { getContactById } from '../../services/categoryService';
import { CategoryContext } from "../../context/categoryContext";

const ViewContact = () => {
  const { loading, setLoading } = useContext(CategoryContext);
  const { contactId } = useParams();

  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getContactById(contactId);
        setCategory(data.data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1 className="h3 mb-2 mb-sm-0 fs-5">جزئیات دیتا</h1>
        </div>
        {Object.keys(category).length > 0 && (
          <div>
            <Link to={`/contact/${category.id}/edit`} className="btn btn-sm btn-primary mb-0">ویرایش دسته بندی</Link>
          </div>
        )}
      </div>

      <hr />

      {
        loading ? <Spinner /> : (
          <>
            {Object.keys(category).length > 0 && (
              <div className="card">
                <div className="card-header">
                  <h2 className="h4">{category.name}</h2>
                  <p>{category.description}</p>
                </div>
              </div>
            )}
          </>
        )
      }
    </div>
  )
}

export default ViewContact;