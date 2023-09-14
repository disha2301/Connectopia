import "./login.scss";
const Login = () => {
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
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
