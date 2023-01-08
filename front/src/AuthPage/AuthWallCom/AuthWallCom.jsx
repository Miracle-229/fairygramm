import React from "react";
import style from "./Component.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const Component = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || "/home";
  const { signIn } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.email.value;
    signIn(user, () => navigate(fromPage, { replace: true }));
  };
  return (
    <div className={style.Component}>
      <div className={style.container}>
        <form onSubmit={handleSubmit} action="">
          <p>{props.title}</p>
          <input type="email" name="email" placeholder="Email" />
          <br />
          <input type="password" name="password" placeholder="Password" />
          <br />
          <button type="submit">{props.title}</button>
          <br />
          <Link className={style.link_path} to={props.path}>
            {props.pathName}
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Component;
