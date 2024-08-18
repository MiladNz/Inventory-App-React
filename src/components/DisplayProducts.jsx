import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function DisplayProducts() {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        {products.map((pr) => {
          <div key={pr.id}>
            <span className="text-slate-400">{pr.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">{pr.createdAt}</span>
              <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-xl">
                {pr.category}
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300">
                {pr.quantity}
              </span>
              <button className="border px-2 py-0.5 rounded-2xl border-red-500 text-red-400">
                delete
              </button>
            </div>
          </div>;
        })}
        {/*  */}
        {/* <span className="text-slate-400">React.js</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">date</span>
              <span
                className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-xl"
                >frontend</span
              >
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300">
                10
              </span>
              <button
                className="border px-2 py-0.5 rounded-2xl border-red-500 text-red-400">
                delete
              </button>
            </div> */}
        {/*  */}
      </div>
    </div>
  );
}

export default DisplayProducts;
