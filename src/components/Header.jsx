import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Header({ isOpenCategory, setIsOpenCategory }) {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {/* <!-- app bar --> */}
      {/* <div className="h-12 flex items-center justify-center sticky gap-x-4 bg-slate-700 mb-6"> */}
      <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6 sticky top-0">
        <h1 className="md:text-xl text-sm font-bold text-slate-300">
          Inventory App using React.js and Tailwind
        </h1>
        {/* <!-- number of products --> */}
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-600 text-slate-100 border-2 border-slate-300 font-bold">
          {products.length}
        </span>
      </div>
      <div className="container mx-auto md:flex-row flex-col flex lg:max-w-screen-xl">
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
