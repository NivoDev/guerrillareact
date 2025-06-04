import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./components/About";
import { Music } from "./components/Music";
import { Contact } from "./components/Contact";
import { Navigator } from "./Navbar/Nav";
import { Footer } from "./components/Footer";
import Loader from "./components/Loader.js";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Guerrilla - Progressive Psytrance Music</title>
          <meta name="description" content="Guerrilla is an emerging psytrance duo delivering powerful progressive beats. Experience our unique sound combining cultural influences with massive kick & bass sections." />
          <meta name="keywords" content="Guerrilla, Psytrance, Progressive Psytrance, Electronic Music, Nutek Records, Dance Music" />
          
          {/* Additional SEO tags for browsers */}
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="3 days" />
          <meta name="author" content="Guerrilla" />
          <link rel="canonical" href="https://guerrillatrance.com/" />
        </Helmet>
        <div className="background-container">
          <div className="background-image" />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <Router>
            <Navigator />
            <Switch>
              <Route exact path="/">
                <About />
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
        )}
      </>
    </HelmetProvider>
  );
}

export default App;
