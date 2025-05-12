import "./login.css"
export default function Login() {
    return (<div className="login">
        <div className="loginWrapper">
        </div>
        <div className="loginLeft">
            <h3 className="loginLogo">Real Time Chat</h3>
            <span className="loginDesc">connect with friends and world around you on real time chat.</span>

        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="text" placeholder="Email" className="loginInput" />
                <input type="text" placeholder="password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Creat a New Account</button>
            </div>
        </div>

    </div>)
}