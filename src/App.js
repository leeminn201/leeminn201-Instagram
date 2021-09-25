import React from 'react';
import './App.scss';

import Navbar from 'components/Navbar/Navbar';
// import Intro from 'components/Intro/Intro';
import Album from 'components/Album/Album';
function App() {
  return (
    <div className="container">
      <Navbar/>
      {/* <Intro /> */}
      <Album />
    </div>
  );
}

export default App;
