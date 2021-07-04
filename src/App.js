import React , {useState, useEffect }from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/About'
import { Music } from './components/Music';
import { Contact } from './components/Contact';
import  { Navigator }  from './Navbar/Nav';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import Loader  from './components/Loader.js'
import { Helmet } from 'react-helmet';
import ProfileImg from './images/profileLow.jpg';


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
        <Helmet>
          <title>Guerrilla - Music</title>
          <meta name="description" content="Guerrilla is an emerging duo formed
          by Niv Rozanowich and Tomer Segev." />
          <meta name="keywords" content="Guerrilla, Music, Psytrance, Genetics, Nutek" />
          <meta name="og:title" content="Guerrilla - Music" />
          <meta name="og:description" content="Guerrilla is an emerging duo formed
          by Niv Rozanowich and Tomer Segev." />
          <meta name="og:image" content="https://guerrillatrance.com/static/media/profileLow.a1c15d6a.jpg" />
          <meta name="fb:app_id" content="1337322356737912" />

        </Helmet>
    {
      loading ? (
        <Loader />
        ) : (
      <Router>
        <Navigator />      
        <Switch>
        <Route exact path="/">
            {/* <HomePage /> */}<About />
            </Route>
            <Route path="/music">
            <Music />
            </Route>
            <Route path="/contact">
            <Contact />
            </Route> 
            {/* <Route path="/about">
            
            </Route>
            */}
        </Switch>
        <Footer />
      </Router>
      )
    }
    </>
 
  );
}

export default App;



