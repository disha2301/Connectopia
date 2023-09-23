import { useContext } from "react";
import "./login.scss";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>hello</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint illum
            facere eaque inventore dolorum quaerat, maiores quasi recusandae in,
            soluta nesciunt? Tenetur, hic.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
