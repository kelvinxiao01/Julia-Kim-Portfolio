import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Unfound from './components/Unfound.jsx';
import Amazon from './components/Amazon.jsx';
import Venmo from './components/Venmo.jsx';
import Otherwork from './components/Otherwork.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter><Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/otherwork" element={<Otherwork />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/unfound" element={<Unfound />}></Route>
    <Route path="/amazon" element={<Amazon />}></Route>
    <Route path="/venmo" element={<Venmo />}></Route>
  </Routes> </BrowserRouter>
  );
}

ReactDOM.render(
  <Routing />,
  document.getElementById("root")
)

// ReactDOM.render(
//   <BrowserRouter><App/></BrowserRouter>
//   ,
//   document.getElementById("root")
// );
