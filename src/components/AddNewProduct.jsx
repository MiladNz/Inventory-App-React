function AddNewProduct() {
  return (
    <div classNameName="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
        <div className="">
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            Product Title
          </label>
          <input
            type="text"
            name="product-title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          />
        </div>
        <div className="">
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400">
            quantity
          </label>
          <input
            type="number"
            name="product-quantity"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400">
            Category
          </label>
          <select
            name="product-category"
            className="bg-transparent text-slate-400 rounded-xl w-full">
            {/* <option className="bg-slate-500 text-slate-300" value="">
                  select a category
                </option>
                <option className="bg-slate-500 text-slate-300" value="backend">
                  backend
                </option>
                <option className="bg-slate-500 text-slate-300" value="frontend">
                  frontend
                </option>  */}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            type="submit"
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2">
            Add new product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewProduct;
