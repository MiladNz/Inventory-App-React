import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CategoryContext } from "../context/CategoryContext";

function AddNewProduct() {
  const { productData, addNewProductHandler, changeHandler } =
    useContext(ProductContext);
  const { categories } = useContext(CategoryContext);
  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form
        className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4"
        onSubmit={addNewProductHandler}>
        <div>
          <label htmlFor="title" className="block mb-1 text-slate-400">
            Product Title
          </label>
          <input
            value={productData.title}
            type="text"
            name="title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 p-2"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-1 text-slate-400">
            quantity
          </label>
          <input
            value={productData.quantity}
            type="number"
            name="quantity"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 p-2"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1 text-slate-400">
            Category
          </label>
          <select
            value={productData.category}
            onChange={changeHandler}
            name="category"
            className="bg-transparent text-slate-400 rounded-xl w-full p-2 border border-slate-500">
            <option className="bg-slate-500 text-slate-300">
              select a category
            </option>
            {categories.map((item) => (
              <option
                key={item.id}
                className="bg-slate-500 text-slate-300"
                value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            type="submit"
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 border rounded-xl py-2">
            Add new product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewProduct;
