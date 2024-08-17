import { useState } from "react";
import "./App.css";
import AddNewCategory from "./components/AddNewCategory";
import Header from "./components/Header";
import ProductProvider from "./context/ProductContext";
import AddNewProduct from "./components/AddNewProduct";

const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "frontend",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of the applications",
    createdAt: "2021-10-01T10:47:26.889Z",
  },
];

function App() {
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  return (
    <div className="bg-slate-800 min-h-screen ">
      <ProductProvider>
        <Header
          isOpenCategory={isOpenCategory}
          setIsOpenCategory={setIsOpenCategory}
        />
        <div className="container mx-auto grid grid-cols-10 gap-2">
          <div className="col-span-4">
            {isOpenCategory ? <AddNewCategory /> : ""}
            <AddNewProduct />
          </div>
          <div className="col-span-6">Product list</div>
        </div>
      </ProductProvider>
    </div>
  );
}

export default App;
