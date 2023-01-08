import React from "react";
import "./ModalPost.scss";

function ModalPost({ active, setActive, children }) {
  return (
    <div
      className={active ? "ModalPost active" : "ModalPost"}
      onClick={() => setActive(false)}
    >
      <div className="ModalPostContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalPost;
