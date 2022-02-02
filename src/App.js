import Header from './Header';
import AddItems from './AddItems';
import SearchItem from './SearchItem'
import Content from './Content';
import Footer from './Footer';
import {useState,useEffect} from 'react';


function App() {
    const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || [])
    const [addItem,setAddItem] = useState('');
    const [searchItem,setSearchItem] = useState('');

    useEffect(()=>{
        localStorage.setItem('shoppingList',JSON.stringify(items))
    },[items])



    const handleCheck = (id)=>{
        const listItems = items.map((item)=>item.id === id ? {...item, checked : !item.checked} :item );
        setItems(listItems);
    };
    const handleDelete = (id) =>{
        const listItems = items.filter((item)=>item.id !== id);

        setItems(listItems);
    }
    const addItems = ()=>{
        
        const id = items.length ?  items[items.length - 1].id + 1 : 1;
        
        const listItems =[
            ...items,
            {
                id,
                checked:false,
                item:addItem
            }
        ];
        setItems(listItems); 
        setAddItem('');
    }

    const clearSearch = ()=>{
        setSearchItem('');
    }

  return (
    <div className="App">
        <Header/>
        <AddItems
            addItem={addItem}
            setAddItem={setAddItem}
            addItems={addItems}
        />
        <SearchItem
            searchItem={searchItem}
            setSearchItem={setSearchItem}
            clearSearch={clearSearch}
        />
        <Content
            items={items.filter((item)=>(item.item).toLowerCase().includes(searchItem.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            
        />
        <Footer
            items={items}
        />
    </div>
  );
}

export default App;
