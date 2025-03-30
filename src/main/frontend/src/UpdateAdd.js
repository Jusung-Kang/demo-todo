import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function UpdateAdd(){
    //detail.js에서 id를 받아오는 역활을 한다.
    const { id } = useParams();
    const [article, setArticle] = useState({title: "", content: ""}); //초기값을 빈값으로 설정
    //다른 페이지를 이동하기 위한 것이다.
    const navigate = useNavigate();

    //값이 변경될때마다 바뀌는 역활을 한다.
    const handleChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };
    
    //type=submit 버튼을 눌렀을때 실행되는 함수
    const handleSubmit = (e) => {
      e.preventDefault();
      //TextController의 Mapping값과 동일하여야 한다. 즉 TextController에 PutMapping('api/articles/{id}')가 있어야 한다.
      axios.put(`/api/articles/${id}`, article)
        .then(() => {
          alert("수정 완료!");
          //수정 완료 후 detail 페이지로 이동하는 기능
          //해당 도메인은 App.js에 존재 하여야 한다.
          navigate(`/detail/${id}`);
        })
        .catch((error) => console.log("Error: ", error));
    };
    

    //useEffect를 이용하여 페이지에 불러올 데이터 도메인을 axios를 사용하여 불러오는 기능
    useEffect(() => {
        //TextController의 Mapping값과 동일하여야 한다. 즉 TextController에 GetMapping('api/articles/{id}')가 있어야 한다.
        axios.get(`/api/articles/${id}`)
          .then((res) => {
            //setArticle을 사용하여 article의 값을 바꿔준다.
            setArticle(res.data)
          })
          .catch((error) => console.log("Error: ", error));
          //여기서 id의 역활은 id의 값이 바뀌었는지 확인한 후
          //useEffect를 다시 실행시키는 역할을 한다. 
          //즉, id가 바뀔때마다 useEffect를 다시 실행시킨다.
      }, [id]);
      //만약 id가 없는 빈값"[]"일 경우 처음 data를 들고올때 한번만 useEffect가 실행된 후
      //id가 바뀌어도 useEffect가 실행되지 않는다.
    
    return (
        <div>
            <h1>UpdateAdd 페이지</h1>
            <h2>id: {id}</h2>
            <form onSubmit={handleSubmit}>
              <p>
                <label>Title:</label>
                <input type="text" name="title" value={article.title} onChange={handleChange} />
              </p>
              <p>
                <label>Content:</label>
                <input type="text" name="content" value={article.content} onChange={handleChange} />
              </p>
              <button type="submit">수정완료</button>
            </form>
        </div>
    )   
}

export default UpdateAdd;