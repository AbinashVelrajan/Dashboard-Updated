import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Landing from './Landing';
function LoginPage() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='/Landing/*' element={<Landing />} />

          <Route index element={<Login/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default LoginPage
