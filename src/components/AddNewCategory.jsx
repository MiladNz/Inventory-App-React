import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

function AddNewCategory({ isOpenCategory, setIsOpenCategory }) {
  const { changeHandler, addNewCategoryHandler, categoryData, categories } =
    useContext(CategoryContext);
  return (
    <div>
      <section>
        <div className="mb-4 max-w-screen-lg">
          <h2 className="text-xl text-slate-300 font-bold mb-2">
            Add New Category
          </h2>
          <form
            className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4"
            onSubmit={addNewCategoryHandler}>
            <div className="">
              <label htmlFor="title" className="block mb-1 text-slate-400">
                Category Title
              </label>
              <input
                value={categoryData.title}
                onChange={changeHandler}
                type="text"
                name="title"
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 p-2"
              />
            </div>
            <div className="">
              <label
                htmlFor="description"
                className="block mb-1 text-slate-400">
                Category description
              </label>
              <textarea
                value={categoryData.description}
                onChange={changeHandler}
                type="text"
                name="description"
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full p-2"></textarea>
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <button
                type="button"
                onClick={() => setIsOpenCategory(!isOpenCategory)}
                className="flex-1 bg-transparent text-slate-400 rounded-xl border border-slate-400 py-2">
                Cancel
              </button>
              <button
                id="add-new-category"
                className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2">
                Add new category
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddNewCategory;
