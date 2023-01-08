import Component from "./AuthWallCom/AuthWallCom";

const Login = (props) => {
  return (
    <div className="Login">
      <Component
        pathName="Registration"
        path="/registr"
        title="Login"
      ></Component>
    </div>
  );
};

export default Login;
