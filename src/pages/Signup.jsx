import "../css/loginAndSignup.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Signup() {
  return (
    <>
      <div className="login-section-1">
        <span>Welcome to Book My Kids!</span>
        <p>
          Join Book my kids to access exclusive casting opportunities, connect
          with industry professionals, and start your journey towards stardom.
          Join our community and take the first step in showcasing your talent!
        </p>
      </div>
      <div className="login-section-2">
        <div className="login-card">
          <h1>User Signup</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control inputField"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control inputField"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input "
                id="exampleCheck1"
              />
              <p className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </p>
            </div>
            <button type="submit" className="btn-custom">
              Submit
            </button>
          </form>
          <div className="another-login-options">
            <p>Or</p>
            <p>Signup with</p>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaGooglePlus />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
