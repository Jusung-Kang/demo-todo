import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";



//버튼을 누를시 이동하게 될 Detail Page
function Detail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();

        //useEffect를 이용하여 페이지에 불러올 데이터 도메인을 axios를 사용하여 불러오는 기능
    useEffect(() => {
        //해당 아이디 데이터를 들고오는 기능
        axios.get(`/api/articles/${id}`)
          .then((res) => {
            //setArticle을 사용하여 article의 값을 바꿔준다. 
            setArticle(res.data)
          })
          .catch((error) => console.log("Error: ", error));
    }, [id]);

    const toUpdateAddPage = (id) => {
        //수정 페이지로 이동하는 기능
        navigate(`/updateAdd/${id}`);
    }

    const DeleteArticle = (id) => {
        //삭제 버튼을 눌렀을때 실행되는 함수
        if (window.confirm("정말 삭제하시겠습니까?")) {
            //TextController의 Mapping값과 동일하여야 한다. 즉 TextController에 DeleteMapping('api/articles/{id}')가 있어야 한다.
            axios.delete(`/api/articles/${id}`)
                .then(() => {
                    alert("삭제 완료!");
                    //삭제 완료 후 main 페이지로 이동하는 기능
                    navigate(`/`);
                })
                .catch((error) => console.log("Error: ", error));
        }
    }
  
    if (!article) return <p>Loading...</p>
  
    //Detail 페이지 화면에 나올 html
    return (
      <div>
        <h1>Update 페이지</h1>
          <p>
            <label>Title: {article.title}</label>
          </p>
  
          <p>
            <label>Content: {article.content}</label>
          </p>
          <p>
            <button onClick={() => toUpdateAddPage(id)}>수정</button>
            <button onClick={() => DeleteArticle(id)}>삭제</button>
          </p>
      </div>
    );
  }

  export default Detail;