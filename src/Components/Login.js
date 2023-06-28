import { useState } from "react";
import "../Styles/Login.css";

export default function Login({ setUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const chechLogin = {
        username: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        password: /^.{4,12}$/, // 4 a 12 digitos.
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([username, password].includes("")) {
            setError(true)
            return
        }
        setError(false)

        setUser([username, password])

    }

    return (
        <div className="ContentImageLogin">
            <div className="ContentLogin">

                <h1>Login</h1>

                <form
                    className="Container"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        check={chechLogin.username}

                    />

                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        check={chechLogin.password}
                    />

                    <button>Sing in</button>
                </form>

                {error && <p>You need a username or password</p>}
            </div>
        </div>


    );
}
