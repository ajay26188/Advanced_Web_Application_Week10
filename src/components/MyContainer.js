import React, {useState} from 'react'
import MyList from './MyList'

const MyContainer = () => {
    const [items, setItems] = useState([
        { id: "1", text: "item1", clicked: false },
        { id: "2", text: "item2", clicked: false },
    ]);

    const [newItems, setNewItems] = useState('');

    const addItem = () => {
        if (newItems.trim() !== '') {
            const newItem = {
                id: String(items.length + 1),
                text: newItems,
                clicked: false,
            };
            setItems(oldItems => [...oldItems, newItem]);
            setNewItems('');
        }
    }
    const updateItem = (id) => {
        setItems(oldItems => 
            oldItems.map(item =>
                item.id === id ? {...item, clicked: !item.clicked} : item
                )
            )
    }

  return (
    <div>
        <MyList
            updateItem={updateItem}
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