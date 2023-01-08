import React, { useContext, useEffect, useState } from "react";
import { ApiPostContext } from "../context/ApiPostContext";
import style from "./Home.module.scss";
import user_logo from "../res/user_logo.svg";
import like_img from "../res/like.svg";
import comm_img from "../res/comm.svg";
import LoginHeader from "./LoginHeader/LoginHeader";
import ModalPost from "./Modal/ModalPost";

const Home = () => {
  const user2 = localStorage.getItem("newUser").split("@")[0];
  const [users, setUsers] = useContext(ApiPostContext);
  const [activeUser, setActiveUser] = useState({});
  const [comment, setComment] = useState("");

  const commentFromLocalStorage = JSON.parse(
    localStorage.getItem(`comments`) || "[]"
  )?.filter((comment) => comment?.id === activeUser?.id);

  const [comments, setComments] = useState(commentFromLocalStorage);
  const onClickHandler = () => {
    if (comment === " ") {
      alert("вы забыли ввести сообщение");
    }
    setComments((comments) => [...comments, comment]);
    setComment(" ");
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem(`comments`, JSON.stringify(comments));
  }, [comments]);

  return (
    <div className={style.home}>
      <LoginHeader></LoginHeader>
      <div className={style.content}>
        {users.map((user, idx) => {
          return (
            <>
              <div key={idx} className={style.post}>
                <div className={style.post_header}>
                  <span>{user2}</span>
                  <img src={user_logo} alt="" />
                </div>
                <div className={style.post_image}>
                  <img src={user.img} alt="" />
                </div>
                <div className={style.post_buttons}>
                  <span>{user.date}</span>
                  <button
                    onClick={() => {
                      setActiveUser(user);
                    }}
                  >
                    <img src={comm_img} alt="" />
                  </button>
                  <button className={style.post_button_like}>
                    <img src={like_img} alt="" />
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <ModalPost setActive={setActiveUser} active={activeUser?.img}>
          <div className={style.Modal}>
            <div className={style.Modal_Img}>
              <img className={style.Modal_Img} src={activeUser?.img} alt="" />
            </div>
            <div className={style.Modal_Comment}>
              <div className={style.Modal_Comment_Logo}>
                <span>{user2}</span>
                <img src={user_logo} alt="" />
              </div>
              <div className={style.Modal_Comment_Field}>
                {comments.map((text, idx) => (
                  <div
                    id={activeUser?.img}
                    key={idx}
                    className={style.Modal_Comment_Comments}
                  >
                    <span>{user2}</span>:<p>{text}</p>
                  </div>
                ))}
              </div>
              <div className={style.Modal_Comment_Text}>
                <textarea
                  value={comment}
                  onChange={onChangeHandler}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button onClick={onClickHandler}>
                  <img src={comm_img} alt="" />
                </button>
              </div>
            </div>
          </div>
        </ModalPost>
      </div>
    </div>
  );
};

export default Home;
