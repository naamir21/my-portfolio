export default function Dropdown({ selectedCategory, setSelectedCategory }) {
    return (
      <div className="mb-6">
        <label htmlFor="category" className="block text-lg font-medium">
          Select a Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-4 py-2 mt-2 text-black rounded"
        >
          <option value="megabyte">Megabyte</option>
          <option value="mosque">Mosque</option>
          <option value="figma">Figma</option>
        </select>
      </div>
    );
  }
  