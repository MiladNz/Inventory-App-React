import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    quantity: 0,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, [setProducts]);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    setProducts((prev) => [
      ...prev,
      {
        ...productData,
        id: Date.now(),
        createdAt: new Date().toLocaleDateString("fa-IR"),
      },
    ]);
    setProductData({
      title: "",
      category: "",
      quantity: 0,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        productData,
        setProductData,
        products,
        setProducts,
        addNewProductHandler,
        changeHandler,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
