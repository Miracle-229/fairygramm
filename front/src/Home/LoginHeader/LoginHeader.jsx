import React, { useRef } from "react";
import style from "./LoginHeader.module.scss";
import logo from "../../res/logo.svg";
import user_logo from "../../res/user_logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginHeader() {
  const user2 = localStorage.getItem("newUser").split("@")[0];
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();
  const loginRef = useRef();
  const { signOut } = useAuth();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== loginRef.current) {
      setOpen(false);
    }
  });
  return (
    <div className={style.loginheader}>
      <div className={style.header}>
        <Link to="/home">
          <div className={style.logo_block}>
            <img src={logo} alt="" />
            <h1>Fairygramm</h1>
          </div>
        </Link>
        <div onClick={() => setOpen(!open)} className={style.login_block}>
          <span>{user2}</span>
          <img ref={loginRef} src={user_logo} alt="" />
        </div>
      </div>
      {open && (
        <div ref={menuRef} className={style.login_dropdown}>
          <ul>
            <li>
              <Link to="/myposts">Profile</Link>
            </li>
            <li onClick={() => signOut(() => navigate("/", { replace: true }))}>
              Log out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoginHeader;
