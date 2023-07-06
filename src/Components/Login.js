import { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    localStorage.removeItem("Sign in")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username ==="saratintin_" && password ==="0808ST") {
            setError(false)          
            localStorage.setItem("Sign in", true)
            navigate("/Listado")
        }
        setError(true)      
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
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"                      
                    />
                    <button>Sign in</button>
                </form>
                {error && <p>You need a username or password</p>}
            </div>
        </div>
    );
}
