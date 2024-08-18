import { useState } from "react";
import "./App.css";
import AddNewCategory from "./components/AddNewCategory";
import Header from "./components/Header";
import ProductProvider from "./context/ProductContext";
import AddNewProduct from "./components/AddNewProduct";
import CategoryProvider from "./context/CategoryContext";
import DisplayProducts from "./components/DisplayProducts";
import ProductFilter from "./components/ProductFilter";

function App() {
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  return (
    <div className="bg-slate-800 min-h-screen ">
      <CategoryProvider>
        <ProductProvider>
          <Header
            isOpenCategory={isOpenCategory}
            setIsOpenCategory={setIsOpenCategory}
          />
          <div className="container mx-auto p-4 md:flex-row flex-col flex md:justify-between lg:max-w-screen-xl md:gap-x-12">
            <div className="w-full">
              {isOpenCategory ? (
                <AddNewCategory
                  isOpenCategory={isOpenCategory}
                  setIsOpenCategory={setIsOpenCategory}
                />
              ) : (
                ""
              )}
              <AddNewProduct />
            </div>
            <div className="w-full">
              <ProductFilter />
              <DisplayProducts />
            </div>
          </div>
        </ProductProvider>
      </CategoryProvider>
    </div>
  );
}

export default App;
