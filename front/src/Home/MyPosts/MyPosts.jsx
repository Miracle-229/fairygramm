import React, { useContext, useEffect } from "react";
import { ApiPostContext } from "../../context/ApiPostContext";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import style from "./MyPosts.module.scss";
import user_logo from "../../res/user_logo.svg";
import logout_img from "../../res/logout.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDog } from "@fortawesome/free-solid-svg-icons";
import LoginHeader from "../LoginHeader/LoginHeader";
import ModalPost from "../Modal/ModalPost";
import { useState } from "react";

const MyPosts = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const user = localStorage.getItem("newUser").split("@")[0];
  const [users, setUsers] = useContext(ApiPostContext);
  const [activeUser, setActiveUser] = useState({});
  return (
    <div className={style.post}>
      <LoginHeader></LoginHeader>
      <div className={style.user_info}>
        <img src={user_logo} alt="" />
        <span>{user}</span>
        <span>likes 1234</span>
        <span>posts 1234</span>
        <img
          src={logout_img}
          onClick={() => signOut(() => navigate("/", { replace: true }))}
          alt=""
        />
      </div>
      <div id="posts" className={style.user_posts}>
        {users.map((user, idx) => {
          return (
            <div key={idx} className={style.user_post}>
              <img onClick={() => setActiveUser(user)} className="user_post_img" src={user.img} alt="" />
              <div id="chikibriki" className={style.user_post_inf}>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <span>10</span>
                <FontAwesomeIcon icon={faDog}></FontAwesomeIcon>
                <span>10</span>
              </div>
            </div>
          );
        })}
      </div>
      <ModalPost
        className={style.ModalPost}
        setActive={setActiveUser}
        active={activeUser?.img}
      >
        <img className={style.ModalImg} src={activeUser?.img} alt="" />
      </ModalPost>
    </div>
  );
};

export default MyPosts;
