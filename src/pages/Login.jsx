import React from "react";
import LoginForm from "../components/LoginForm";

function Login () {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content d-flex flex-column align-items-center">
                <LoginForm />
            </section>
        </main>
    );
}

export default Login;