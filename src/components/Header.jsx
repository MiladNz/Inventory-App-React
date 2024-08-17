import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Header({ isOpenCategory, setIsOpenCategory }) {
  const { productData } = useContext(ProductContext);
  return (
    <div>
      {/* <!-- app bar --> */}
      <div className="h-12 flex items-center justify-center sticky gap-x-4 bg-slate-700 mb-6">
        <h1 className="text-xl font-bold text-slate-300">
          Inventory App using Tailwind and React.js
        </h1>
        {/* <!-- number of products --> */}
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300 font-bold">
          {productData.length}
        </span>
      </div>
      <div className="ml-10">
        {!isOpenCategory && (
          <button
            className="text-slate-600 text-lg mb-4 font-medium"
            onClick={() => setIsOpenCategory(!isOpenCategory)}>
            Add new Category?
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
