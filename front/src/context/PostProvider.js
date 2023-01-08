import React, { useState, useEffect } from "react";
import { ApiPostContext } from "./ApiPostContext";
import axios from "axios";
function PostProvider({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/data")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ApiPostContext.Provider value={[users, setUsers]}>
      {children}
    </ApiPostContext.Provider>
  );
}
export default PostProvider;
