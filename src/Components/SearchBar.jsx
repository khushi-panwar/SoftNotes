import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({searchInput, setSearchInput, onSearch }) => {

  return (
    <div className='space-x-2 md:space-x-5'>
      <button onClick={onSearch}

        className="cursor-pointer"
        aria-label="search"><IoSearchOutline /></button>
      <input className='w-30 md:w-100 border px-3 py-1 rounded'
        type='text'
        value={searchInput}
        onChange={(e) => {setSearchInput(e.target.value)}}
        placeholder='Search'
      />
    </div>
  )
}

export default SearchBar
