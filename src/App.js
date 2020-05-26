import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/customers">Customers</Link> <br/>
        <Link to="/customers/777">Customers 777</Link>
      </div>
    </Router>
  );
}

export default App;
