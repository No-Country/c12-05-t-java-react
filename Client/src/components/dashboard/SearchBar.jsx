import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import PropTypes from 'prop-types';

const SearchBar = ({ handleCreateVisible }) => {
  return (
    <div className="col col-span-3 border-2 border-gray-400">
      <div className="flex w-full h-full items-center px-6 gap-5">
        <div className="flex justify-between border-2 border-gray-400 rounded-md w-3/6">
          <input
            type="text"
            className="px-4 h-10 bg-transparent"
            placeholder="Search..."
          />
          <button className="px-4 bg-transparent">
            <AiOutlineSearch className=" text-gray-600 text-2xl hover:text-gray-400 transition-all duration-300 ease-in-out cursor-pointer" />
          </button>
        </div>
        <button className="px-4 bg-yellow-200 text-gray-900 rounded-md h-3/6 w-1/6 flex justify-center items-center gap-2 hover:text-yellow-200 hover:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer" type="button" onClick={handleCreateVisible}>
          <AiOutlinePlus /> Agregar
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleCreateVisible: PropTypes.func.isRequired,
}

export default SearchBar;
