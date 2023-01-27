import '../App.css';
import Context from './Context';
import React, { useContext } from 'react';

const ItemFilter = () => {
  const { isLoggedIn, currentFilter, setCurrentFilter } = useContext(Context);

  return (
    

        <div className="Item-Filter">
            <button id="all" className="All-Items" onClick={() => setCurrentFilter(0)}>{currentFilter === 0 ? <>ALL ITEMS</> : <>All Items</>}</button>
           <> {isLoggedIn && <button id="mine" className="My-Items" onClick={() => setCurrentFilter(1)}>{currentFilter === 1 ? <>My Items</> : <>My Items</>}</button>}</>
           <>  {isLoggedIn && <button className="Add-Item" onClick={() => setCurrentFilter(2)}>{currentFilter === 2 ? <>ADD ITEM</> : <>Add Items</>}</button>}</>
        </div>

    
  )
}

export default ItemFilter;