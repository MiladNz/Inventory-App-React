function AddNewCategory() {
  return (
    <div>
      <section>
        <div className="mb-4 max-w-screen-lg">
          <h2 className="text-xl text-slate-300 font-bold mb-2">
            Add New Category
          </h2>
          <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
            <div className="">
              <label
                htmlFor="category-title"
                className="block mb-1 text-slate-400">
                Category Title
              </label>
              <input
                type="text"
                name="category-title"
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              />
            </div>
            <div className="">
              <label
                htmlFor="category-description"
                className="block mb-1 text-slate-400">
                Category description
              </label>
              <textarea
                type="text"
                name="category-description"
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"></textarea>
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <button className="flex-1 bg-transparent text-slate-400 rounded-xl border border-slate-400 py-2">
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
