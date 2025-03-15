import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>React + Spring Boot</h1>
      <p>{message} this is connected</p>
    </div>
  );
}

export default App;