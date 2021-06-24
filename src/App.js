import React , {useState, useEffect }from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/About'
import { Music } from './components/Music';
import { Contact } from './components/Contact';
import  { Navigator }  from './Navbar/Nav';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import Loader  from './components/Loader.js'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    },1000 )
  },[])
  return (
    <>
    {
      loading ? (
        <Loader />
        ) : (
      <Router>
        {/* <Navigator />       */}
        <Switch>
        <Route exact path="/">
            {/* <HomePage /> */}<About />
            </Route>
            {/* <Route path="/about">
            
            </Route>
            <Route path="/music">
            <Music />
            </Route>
            <Route path="/contact">
            <Contact />
            </Route> */}
        </Switch>
        <Footer />
      </Router>
      )
    }
    </>
 
  );
}

export default App;



