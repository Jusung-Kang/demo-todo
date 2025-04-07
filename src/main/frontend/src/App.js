import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import axios from "axios";
import Main from "./Main";
import Detail from "./Detail";
import UpdateAdd from "./UpdateAdd";





// Router와 Routes를 설정하는 컴포넌트
function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 진입시 */}
        <Route path="/" element={<Navigate to="/main" />} />
        {/* 메인 페이지 */}
        <Route path="/main" element={<Main />} />
        {/* 상세 페이지 */}
        <Route path="/detail/:id" element={<Detail />} />
        {/* 업데이트 페이지 */}
        <Route path="/update/:id" element={<UpdateAdd />} />
        {/* 등록 페이지 */}
        <Route path="/add" element={<UpdateAdd />} />
        {/* 잘못된 경로 처리 */}
      </Routes>
    </Router>
  );
}

export default App;