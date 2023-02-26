import React from 'react';
import './App.css';
import LandingPage from './Pages/Landing';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PostView from './Pages/PostView';
import PostData from './Pages/PostData';
 
 
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
        <Route path='/profile' element = {<PostView/>}/>
        <Route path='/create' element = {<PostData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
