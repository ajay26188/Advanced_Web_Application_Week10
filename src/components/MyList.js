import React from 'react'

const MyList = ({header, items, updateItem}) => {
  return (
    <div>
       <h2>{header}</h2> 
       <ol>
            {items.map(item => (
                <li key={item.id} onClick={() => updateItem(item.id)} >{item.text}</li>
            ))}
       </ol>
    </div>
  )
}

export default MyList

