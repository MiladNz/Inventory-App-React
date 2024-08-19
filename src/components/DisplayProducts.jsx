import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { BiTrash } from "react-icons/bi";

function DisplayProducts() {
  const { deleteProductHandler, sortedFilteredProducts } =
    useContext(ProductContext);

  return (
    <div>
      <h2 className="text-xl text-slate-300 font-bold mb-5 border-b border-b-slate-400">
        Product List
      </h2>
      <div className="overflow-x-auto">
        {sortedFilteredProducts.map((pr) => {
          return (
            <div
              key={pr.id}
              className="flex justify-between mb-8 w-full min-w-[400px]">
              <span className="text-slate-400">{pr.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-slate-400">
                  {new Date(pr.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span className="block px-3 py-0.5 text-slate-200  border border-amber-500 text-sm rounded-xl">
                  {pr.category}
                </span>
                <span className="flex items-center justify-center px-3 py-0.5 rounded-xl bg-amber-600 text-slate-100 border-2 border-slate-300">
                  {pr.quantity}
                </span>
                <button
                  onClick={() => deleteProductHandler(pr.id)}
                  className="border p-2 rounded-2xl border-red-500 text-red-400 hover:bg-white ">
                  <BiTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayProducts;
