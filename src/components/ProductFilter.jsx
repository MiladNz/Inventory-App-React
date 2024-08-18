function ProductFilter() {
  return (
    <div>
      <h2 className="text-xl text-slate-300 font-bold mb-2">Filter Products</h2>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400 p-2"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl p-2 border border-slate-500">
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          <option
            className="bg-slate-500 text-slate-300"
            selected
            value="newest">
            newest
          </option>
          <option className="bg-slate-500 text-slate-300" value="oldest">
            oldest
          </option>
        </select>
      </div>
      {/*  */}
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="category" className="text-slate-500 text-lg">
          Category
        </label>
        <select
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
