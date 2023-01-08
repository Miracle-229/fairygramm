import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.js";
import CommentsProvider from "./context/CommentsProvider.js";
import PostProvider from "./context/PostProvider.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CommentsProvider>
    <PostProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PostProvider>
  </CommentsProvider>
);
