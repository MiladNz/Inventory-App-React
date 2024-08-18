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
  const [deleteLocal, setDeleteLocal] = useState(false);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    if (products.length) {
      setDeleteLocal(false);
      localStorage.setItem("products", JSON.stringify(products));
    }
    if (deleteLocal) localStorage.removeItem("products");
  }, [products, deleteLocal]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    if (!productData.category || !productData.quantity || !productData.title)
      return;
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

  const deleteProductHandler = (id) => {
    const result = products.filter((product) => product.id !== id);
    if (products.length === 1) {
      setDeleteLocal(true);
    }
    setProducts(result);
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
        deleteProductHandler,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
