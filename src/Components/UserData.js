import React from 'react'
import { useEffect , useState} from 'react';

const UserData = () => {
    const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('data'));
  if (items) {
   setItems(items);
  }
}, []);
return (
    <><h1 >helloooo</h1>
    <h2>{items.userName}</h2>
    </>
)
}

export default UserData