import React from "react";
import RegistrationForm from "../Form/Form";
import "./Main.css";

function Main() {

    return (
        <div className="main">
            <div className="main__overlay" />
            <div className="main__text">
                <h1 className="main__title">Trade with a broker Who is Fair and Reputable</h1>
                <p className="main__subtitle">Lorem Ipsum is&nbsp;simply dummy text
                    of&nbsp;the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard
                    dummy text ever since the 1500s.
                </p>
            </div>

            <RegistrationForm/>
        </div>

    );
}

export default Main;