import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Header() {
  const { product } = useContext(ProductContext);
  console.log(product);
  return (
    <div>
      {/* <!-- app bar --> */}
      <div className="h-12 flex items-center justify-center sticky gap-x-4 bg-slate-700 mb-6">
        <h1 className="text-xl font-bold text-slate-300">
          Inventory App using Tailwind and React.js
        </h1>
        {/* <!-- nummber of products --> */}
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300 font-bold">
          {product.length}
        </span>
      </div>
    </div>
  );
}

export default Header;
