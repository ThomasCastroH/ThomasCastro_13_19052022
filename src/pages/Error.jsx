import React from "react";
import { Link } from "react-router-dom";

function Error () {
    return (
        <main className="">
            <div className="error-container">
                <p className="error-number">
                    <span style={{color: "#0e7a53"}}>4</span>
                    <span style={{color: "#00bc77"}}>0</span>
                    <span style={{color: "#0e7a53"}}>4</span>
                </p>
                <p className="error-text">Oups, cette page n&#39;existe pas !</p>
                <Link className="error-redirect" to="/"> Cliquez ici pour être redirigé vers la page d&#39;accueil</Link>
            </div>
        </main>
    );
}

export default Error;
                