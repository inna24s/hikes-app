import React from "react";
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <h2>Contacts</h2>
            <h3>Address:</h3>
            Russia, Saint-Petersburg, Vyazemsky lane 5/7
            <br/>
            <h3>Phone:</h3>
            +7-954-789-32-34
            <br/>
            <h3>Email:</h3>
            robinzongroup@gmail.com
        </div>
    );
}
export default Contacts;