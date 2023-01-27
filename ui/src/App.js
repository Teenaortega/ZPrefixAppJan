import './App.css';
import config from './config';
import Header from './Components/Header';
import Items from './Components/Items';
import ItemsVisitor from './Components/ItemsVisitor';
import Details from './Components/Details'
import Login from './Components/Login';
import Onboard from './Components/Onboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect  } from 'react';
import Context from './Components/Context';

const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [currentId, setCurrentId] = useState(0);
  const [currentFilter, setCurrentFilter] = useState(0);
  const [allItems, setAllItems] = useState([]);

  const [session, setSession] = useState({});
  useEffect(() => {
    try {          
      if (document.cookie.split('=')[0] === !session.username) {
        fetch(`${API_URL}/member/${document.cookie.split('=')[1]}`)
          .then(res => res.json())
          .then(data => {
            setSession(data[0])
          }).catch(e => e)
      }
    } catch (e) { console.log(e) }
  }, [session])

  return (
    <div className="App">
      <Context.Provider value={{isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser, currentFilter,
        setCurrentFilter, allItems, setAllItems, currentId, setCurrentId, session, setSession }}>
        <Router>
          <Header />
          <div className="Content">
            <Routes>
            <Route path="/Home" element={<ItemsVisitor />} />
              {session.id && <Route path="/Home" element={<Items />} />}
              <Route path="/Details/:id" element={<Details />} />
              <Route path="/" element={<Login />} />
              <Route path="/Onboard" element={<Onboard />} />
              </Routes>
          </div>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
