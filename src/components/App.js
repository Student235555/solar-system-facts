import React from 'react';
import Page from './Page';
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          {<Header/>}
        </header>
        <main>
          {<Page/>}
        </main>
      </div>
    </Router>
  );
}

export default App;
