import React from "react";
import './Styles/Form.css';

const Form = () => {

    return (
        <div>
            <form>
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows='6' placeholder="Enter your message"></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default Form;