import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiCommentsContext } from './ApiCommentsContext';

function CommentsProvider({ children }) {
  const [com,setCom] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/datacomments")
      .then((res) => {
        setCom(res.datacomments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ApiCommentsContext.Provider value={[com, setCom]}>
      {children}
    </ApiCommentsContext.Provider>
  );
}
export default CommentsProvider;
