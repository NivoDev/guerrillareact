import React , {useState, useEffect }from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home'
import { Music } from './components/Music';
import { Contact } from './components/Contact';
import  { Navigator }  from './Navbar/Nav';
import { Footer } from './components/Footer';
import Loader  from './components/Loader.js'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    },3500 )
  },[])
  return (
    <>
    {
      loading ? (
        <Loader />
        ) : (
      <Router>
        <Navigator />      
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            <Route path="/music">
            <Music />
            </Route>
            <Route path="/contact">
            <Contact />
            </Route>
        </Switch>
        <Footer />
      </Router>
      )
    }
    </>
 
  );
}

export default App;



