import { useState } from "react";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSumbit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="container__form">
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSumbit}>
                    <label htmlFor="email">email</label>
                    <input
                        value={email}
                        type="email"
                        placeholder="youremail"
                        id="email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="password">password</label>
                    <input
                        value={pass}
                        type="password"
                        placeholder="******"
                        id="password"
                        name="password"
                        onChange={(event) => setPass(event.target.value)}
                    />
                    <button type="submit">Log in</button>
                </form>
                <button
                    className="link-btn"
                    onClick={() => props.onFormSwitch("register")}
                >
                    Dont`t have an account Register here.
                </button>
            </div>
        </div>
    );
}
