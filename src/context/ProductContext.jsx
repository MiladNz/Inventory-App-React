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
  const [categoryValue, setCategoryValue] = useState("");
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
        createdAt: new Date().toISOString(),
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

  useEffect(() => {
    let allProducts = products;
    allProducts = searchProducts(allProducts);
    allProducts = sortProducts(allProducts);
    allProducts = filterByCategory(allProducts);
    setSortedFilteredProducts(allProducts);
  }, [products, searchValue, sort, categoryValue]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };
  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategoryValue(e.target.value);
  };

  const searchProducts = (productList) => {
    return productList.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
  };

  const sortProducts = (productList) => {
    return [...productList].sort((a, b) => {
      if (sort === "latest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sort === "earliest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });
  };

  const filterByCategory = (productList) => {
    if (!categoryValue) return productList;
    return productList.filter((pr) => pr.category === categoryValue);
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
        searchValue,
        setSearchValue,
        sort,
        setSort,
        searchHandler,
        sortHandler,
        sortedFilteredProducts,
        categoryHandler,
        categoryValue,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
