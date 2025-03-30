import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "./Main.css";

function Main() {
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

  export default Main;