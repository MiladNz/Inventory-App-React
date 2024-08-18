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
        <span
          value={productData.quantity}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300 font-bold"></span>
      </div>
      <div className="container mx-auto p-4 md:flex-row flex-col flex lg:max-w-screen-xl  ">
        {!isOpenCategory && (
          <button
            className="text-slate-600 text-lg font-medium"
            onClick={() => setIsOpenCategory(!isOpenCategory)}>
            Add new Category?
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
