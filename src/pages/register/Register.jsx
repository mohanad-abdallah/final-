import "./register.css"
export default function Register() {
    return (<div className="register">
        <div className="registerWrapper">
        </div>
        <div className="registerLeft">
            <h3 className="registerLogo">Real Time Chat</h3>
            <span className="registerDesc">connect with friends and world around you on real time chat.</span>

        </div>
        <div className="registerRight">
            <div className="registerBox">
                <input type="text" placeholder="Username" className="registerInput" />
                <input type="text" placeholder="Email" className="registerInput" />
                <input type="text" placeholder="password" className="registerInput" />
                <input type="text" placeholder="password again" className="registerInput" />
                <button className="registerButton">Sign Up</button>
                <button className="loginRegisterButton">Log into Account</button>
            </div>
        </div>

    </div>)
}