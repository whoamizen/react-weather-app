import { MapPinIcon, SearchIcon } from "./icons";

function SearchForm({ city, setCity, handleSubmit }) {
  return (
    <form
      className="flex gap-4 justify-between items-center rounded-xl border border-white/30 p-2 text-2xl"
      onSubmit={handleSubmit}
    >
      <MapPinIcon />
      <input
        type="text"
        className="bg-transparent border-none outline-none w-full placeholder:text-white/50"
        placeholder="City"
        value={city}
        onChange={({ target }) => setCity(target.value)}
      />
      <button
        type="submit"
        className="bg-transparent border-none outline-none p-2 rounded-full hover:bg-white/20"
      >
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchForm;
