import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, updateInfo } from "../redux/userSlice";
import { getUserInfo, updateUserInfo} from "../redux/service";

function Profile () {

    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
    });

    const [visible, setVisible] = useState(false);

    let dispatch = useDispatch();
    let token = useSelector((state) => state.user.token);
    useEffect(() => {
        const getUserProfile = async () => {
            await dispatch(getUserInfo(token))
            .then(data => {
                dispatch(setUser(data))
            })
            .catch(err => console.log("error", err))
        }
        getUserProfile();
    }, [dispatch, token]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputData(prevInputData => ({
            ...prevInputData,
            [name]: value
        }))
    }

    function handleSubmit (e) {
        e.preventDefault();
        updateUserInfo(inputData.firstName, inputData.lastName, token)
        dispatch(getUserInfo(token))
        .then(data => dispatch(updateInfo(data)))
        .catch(err => console.log("error", err))
        setVisible(false);
    }

    let user = useSelector((state) => state.user.currentUser);

    return (
        <main className="main bg-dark">
            <div className="profile-header">
                <h1>
                Welcome back
                <br />
                {user ? user.firstName : "John"} {user ? user.lastName : "Doe"}
                </h1>

                { visible ?
                    <div className='change-data'>
                        <div className='change-data-input'>
                            <input 
                            type="text" 
                            id="firstName" 
                            name='firstName'
                            value={inputData.firstName}
                            placeholder="First Name"
                            onChange={handleChange}
                            />
                            <input 
                            type="text" 
                            id="lastName" 
                            name='lastName'
                            value={inputData.lastName}
                            placeholder= "Last Name"
                            onChange={handleChange}
                            />
                        </div>
                        <div className='change-data-button'>
                            <button className='edit-button' onClick={handleSubmit}>Save</button>
                            <button className='edit-button' onClick={() => setVisible(false)}>Cancel</button>
                        </div>
                    </div>
                :
                    <button className="edit-button" onClick={() => setVisible(true)}>
                    Edit Name
                    </button>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
      </main>
    );
}

export default Profile;
