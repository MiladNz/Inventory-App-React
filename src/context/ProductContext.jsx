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
  }, []);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    setProducts((pr) => [
      ...pr,
      {
        productData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
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
