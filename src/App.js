import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LatestPhotos from './components/LatestPhotos';

import './App.css';

function App() {
  return (
    <div className="App">
     
      <Header />

      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Latest Photos</h2>

              <div className="row">
                <LatestPhotos/>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <Footer/>
      
    </div>
  );
}

export default App;
