import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductFilter() {
  const { searchValue, sort, searchHandler, sortHandler } =
    useContext(ProductContext);
  return (
    <div>
      <h2 className="text-xl text-slate-300 font-bold mb-2">Filter Products</h2>
      <div className="flex items-center justify-between mb-6">
        <label
          htmlFor="search"
          className="text-slate-500 text-lg font-semibold">
          Search
        </label>
        <input
          value={searchValue}
          onChange={searchHandler}
          type="text"
          name="search"
          id="search"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400 p-2"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort" className="text-slate-500 text-lg font-semibold">
          Sort
        </label>
        <select
          value={sort}
          onChange={sortHandler}
          name="sort"
          id="sort"
          className="bg-transparent text-slate-400 rounded-xl p-2 border border-slate-500">
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      {/*  */}
      <div className="flex items-center justify-between mb-6">
        <label
          htmlFor="category"
          className="text-slate-500 text-lg font-semibold">
          Category
        </label>
        <select
          value={""}
          name="category"
          id="category"
          className="bg-transparent text-slate-400 rounded-xl p-2 border border-slate-500">
          <option className="bg-slate-500 text-slate-300">
            select a category
          </option>
          {/* <option
          className="bg-slate-500 text-slate-300"
          selected
          value="newest">
          newest
        </option>
        <option className="bg-slate-500 text-slate-300" value="oldest">
          oldest
        </option> */}
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;
