import React, {useState} from 'react'
import MyList from './MyList'

const MyContainer = () => {
    const [items, setItems] = useState([
        { id: "1", text: "This is an item" },
        { id: "2", text: "Also this" },
    ]);

    const [newItems, setNewItems] = useState('');

    const addItem = () => {
        if (newItems.trim() !== '') {
            const newItem = {
                id: String(items.length + 1),
                text: newItems,
            };
            setItems(oldItems => [...oldItems, newItem]);
            setNewItems('');
        }
    }
  return (
    <div>
        <MyList
            header="Really epic last comment"
            items={items}
        />
        <textarea
            value={newItems}
            onChange={(e) => setNewItems(e.target.value)}
            placeholder="Enter new item"
        />
        <button onClick={addItem}>Add Item</button>
       

    </div>
    
  )
}

export default MyContainer