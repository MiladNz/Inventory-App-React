import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [categoryData, setCategoryData] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryData({ ...categoryData, [name]: value });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    if (!categoryData.title || !categoryData.description) return;
    setCategories((prev) => [
      ...prev,
      {
        ...categoryData,
        createdAt: new Date().toISOString(),
        id: Date.now(),
      },
    ]);
    setCategoryData({ title: "", description: "" });
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryData,
        addNewCategoryHandler,
        changeHandler,
        categories,
      }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
