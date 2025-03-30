import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Main from "./Main";
import Detail from "./Detail";
import UpdateAdd from "./UpdateAdd";





// Router와 Routes를 설정하는 컴포넌트
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/updateAdd/:id" element={<UpdateAdd />} />
      </Routes>
    </Router>
  );
}

export default App;