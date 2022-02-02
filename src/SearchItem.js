const SearchItem = ({searchItem,setSearchItem,clearSearch}) => {
    return (
        <form className="searchForm" onSubmit={(e)=>{
            e.preventDefault()
            clearSearch();
            }}>
            <input 
                type="text" 
                placeholder="Search Items"
                name="search"
                value={searchItem}
                onChange={(e)=>setSearchItem(e.target.value)}
            />
            <button
                
            ></button>
            <label htmlFor="search">Search Items</label>
        </form>
    )
}

export default SearchItem
