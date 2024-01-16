import React from 'react'
import MyList from './MyList'

const MyContainer = () => {
  return (
    <div>
        <MyList 
            header="Really epic last comment"
            items={[
                { id: "1", text: "This is an item" },
                { id: "2", text: "Also this" },
            ]}
        />
    </div>
    
  )
}

export default MyContainer