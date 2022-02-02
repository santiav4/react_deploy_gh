import {FaPlus} from 'react-icons/fa';
import {useRef} from 'react';

const AddItems = ({addItem,setAddItem,addItems}) => {
    const inputRef = useRef();
    return (
        <form className="searchForm" onSubmit={(e)=>{
            e.preventDefault()   
            addItems()
            }}>
           <input 
                autoFocus
                type="text"
                name="addItem" 
                placeholder="Add an Item"
                ref={inputRef}
                value={addItem}
                onChange={(e)=>setAddItem(e.target.value)}
           /> 
           <label 
                htmlFor="addItem"
           >Add Item</label>
           <button 
                onClick={()=>inputRef.current.focus()}
           >
                <FaPlus
                    className='button'
                />
           </button>
           
        </form>
    )
}

export default AddItems
