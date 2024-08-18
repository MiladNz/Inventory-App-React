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
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [sortedFilteredProducts, setSortedFilteredProducts] = useState([]);

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

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };
  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    let allProducts = products;
    allProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    allProducts = [...allProducts].sort((a, b) => {
      if (sort === "latest") new Date(b.createdAt) - new Date(a.createdAt);
      else if (sort === "earliest")
        new Date(a.createdAt) - new Date(b.createdAt);
    });

    setSortedFilteredProducts(allProducts);
  }, [products, searchValue, sort]);

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
        searchValue,
        setSearchValue,
        sort,
        setSort,
        searchHandler,
        sortHandler,
        sortedFilteredProducts,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
