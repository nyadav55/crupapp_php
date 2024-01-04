import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admindashboard from "./dashboard";
import Userlogin from "./login";


function App() {
    return (
      <BrowserRouter><Routes>
          <Route path="/" element={<Userlogin />} />
          <Route path="/dashboard" element={<Admindashboard />} />
        </Routes></BrowserRouter>
    );
  }
  
  export default App;