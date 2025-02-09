import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { confirmAlert } from "react-confirm-alert";

import {
  CategoryContext
} from "./context/categoryContext";

import {
  Contacts,
  Sidebar,
  Navbar,
  AddContact,
  EditContact,
  ViewContact
} from "./components";

import {
  getAllContacts,
  createContact,
  deleteContacts
} from './services/categoryService';

import {
  csrf
} from "./helpers/axios";

function App() {
  // init hooks
  const navigate = useNavigate();

  // init state's
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [categoryQuery, setCategoryQuery] = useState({ text: "" });
  const [category, setCategory] = useState({});

  // Life cycle hooks
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: categories } = await getAllContacts();
        setCategories(categories.data);
        setFilteredCategories(categories.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Functions to implement program logic
  const onCategoryChange = (event) => {
    setCategory({
      ...category,
      [event.target.name]: event.target.value
    });
  }
  const createCategoryForm = async (event) => {
    event.preventDefault();
    try {
      setLoading(prevState => !prevState);

      await csrf();
      const { status, data } = await createContact(category);
      if (status === 201) {
        const allCategories = [...categories, data.data];

        setCategories(allCategories.sort((a, b) => Number(b.id) - Number(a.id)));
        setFilteredCategories(allCategories.sort((a, b) => Number(b.id) - Number(a.id)));

        setCategory({});
        setLoading(prevState => !prevState);
        navigate('/contacts');
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  const confirmDelete = (id, categoryName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="card bg-dark p-4">
            <h4>آیا مطمئن به حذف هستی؟</h4>
            <p>
              {`دسته بندی ${categoryName}`}
            </p>
            <button type="button"
                    className="btn btn-primary btn-sm mx-2"
                    onClick={
                      () => {
                        deleteCategory(id);
                        onClose();
                      }
                    }>
              بله حذف کن
            </button>
            <button type="button"
                    className="btn btn-primary btn-sm"
                    onClick={onClose}>
              خیر حذف نشود
            </button>
          </div>
        );
      },
    });
  }
  const deleteCategory = async (id) => {
    try {
      setLoading(true);
      const res = await deleteContacts(id);
      if (res) {
        const { data: categoriesData } = await getAllContacts();
        setFilteredCategories(categoriesData.data);
        setCategories(categoriesData.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  const searchCategory = (event) => {
    setCategoryQuery({ ...categoryQuery, text: event.target.value });
    const allCategories = categories.filter(category => {
      return category.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilteredCategories(allCategories.sort((a, b) => parseInt(b.id) - parseInt(a.id)));
  }

  // JSX Rendering
  return (
    <CategoryContext.Provider value={{
      loading,
      setLoading,
      category,
      setCategories,
      categories,
      filteredCategories,
      setFilteredCategories,
      categoryQuery,
      onCategoryChange,
      deleteCategory: confirmDelete,
      createCategory: createCategoryForm,
      searchCategory
    }}>
      <Sidebar />
      <div className="page-content">
        <Navbar />
        <div className="page-content-wrapper border">
          <Routes>
            <Route path="/" element={<Navigate to="/contacts" />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/contact/add" element={<AddContact />} />
            <Route path="/contact/:contactId" element={<ViewContact />} />
            <Route path="/contact/:contactId/edit" element={<EditContact />} />
          </Routes>
        </div>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
