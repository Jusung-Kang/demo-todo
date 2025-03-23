import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function App() {
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/articles")
      .then((res) => {
        console.log(res.data)
        setArticle(res.data)
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handlerButtonClick = (articleId) => {
    navigate(`/detail/${articleId}`);

  }

  return (
    <div>
      <h1>ToDo리스트</h1>
      <ul>
        {/* article을 받아와 뿌려주는 코드 START */}
        {article.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            {/* Button을 활용하여 다른 페이지로 넘어가는 기능 */}
            <button onClick={() => handlerButtonClick(article.id)}>Click Me</button>
          </li>
        ))}
        {/* article을 받아와 뿌려주는 코드 END */}
      </ul>
    </div>
  );
}

//버튼을 누를시 이동하게 될 Detail Page
function Detail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  //useEffect를 이용하여 페이지에 불러올 데이터 도메인을 axios를 사용하여 불러오는 기능
  useEffect(() => {
    //해당 아이디 데이터를 들고오는 기능
    axios.get(`/api/articles/${id}`)
      .then((res) => {
        console.log(res.id)
        setArticle(res.data)
      })
      .catch((error) => console.log("Error: ", error));
  }, []);

  if (!article) return <p>Loading...</p>

  //Detail 페이지 화면에 나올 html
  return (
    <div>
      <h1>Detail 페이지</h1>
      <p><strong>ID: </strong>{article.id}</p>
      <p><strong>Title: </strong>{article.title}</p>
      <p><strong>Content: </strong>{article.content}</p>
    </div>
  );
}

// Router와 Routes를 설정하는 컴포넌트
function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;