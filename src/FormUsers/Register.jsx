import { useState } from "react";

export default function Register(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSumbit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container__form">
            <div className="auth-form-container">
                <form className="register-form" onSubmit={handleSumbit}>
                    <label htmlFor="name">Full name</label>
                    <input
                        value={name}
                        id="name"
                        name="name"
                        placeholder="full name"
                        onChange={(event) => setName(event.target.value)}
                    />
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
                    onClick={() => props.onFormSwitch("login")}
                >
                    Already have an account Login here.
                </button>
            </div>
        </div>
    );
}
