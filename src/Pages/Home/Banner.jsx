import  { useEffect, useState } from "react";
import './Banner.css'
import PropTypes from "prop-types";

const Banner = ({ setResults }) => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(true);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearchClicked(true);
    if (isSearchClicked) {
          const filtered = categories.filter((category) =>
            category.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setResults(filtered);
          console.log(filtered);
        }
    setSearchQuery('')
  };

  return (
    <div>
      <div className="h-[70vh] relative background mt-10 border-none">
        <div className="absolute bottom-[27%] md:bottom-[30%] lg:bottom-[40%] w-full px-20">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold pb-10">
                I Grow By Helping People In Need
              </h1>
              <div className="flex justify-center">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  name="search"
                  id="default-search"
                  className="block md:w-[40%] lg:w-[30%] p-4 pl-10 text-sm text-gray-900 rounded-l-lg bg-gray-50 border-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search by category..."
                  required=""
                />
                <button
                  onClick={handleSearch}
                  type="submit"
                  className="text-white bg-blue-700 font-medium rounded-r-lg px-4 py-2 border-none"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  setResults: PropTypes.func,
};

export default Banner;
