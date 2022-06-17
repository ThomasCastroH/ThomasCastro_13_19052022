import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logIn } from "../redux/userSlice";
import { logInUser } from "../redux/service";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function LoginForm () {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        rememberMe: false
    });

    console.log("formData");
    console.log(formData);

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormeData => ({
            ...prevFormeData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    useEffect(() => {
        localStorage.setItem("remember", formData.rememberMe)
    }, [formData.rememberMe])

    const navigate = useNavigate();
    let username = formData.username;
    let password = formData.password;
    let rememberMe = formData.rememberMe;

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(logInUser(username, password, rememberMe))
        .then(data => {
            dispatch(logIn(data));
            if (data) {
                navigate("/profile");
            }
        })
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <FaUserCircle className="sign-in-icon" />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                name='username'
                required
                onChange={handleChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                name='password'
                onChange={handleChange}
                />
            </div>
            <div className="input-remember">
                <input
                type="checkbox"
                id="remember-me"
                name='rememberMe'
                onChange={handleChange}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
                Sign In
            </button>
            </form>
        </div>
    );
}

export default LoginForm;