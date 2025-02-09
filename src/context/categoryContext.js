import { createContext } from "react";

export const CategoryContext = createContext({
  loading: false,
  setLoading: () => {},
  category: {},
  setCategories: () => {},
  categories: [],
  filteredCategories: [],
  setFilteredCategories: () => {},
  categoryQuery: {},
  onCategoryChange: () => {},
  deleteCategory: () => {},
  createCategory: () => {},
  searchCategory: () => {},
});