import React from "react";

function Contact() {
    return(
        <div className="container">
        <div className="row">
            <h1>Contact</h1>
        </div>
        <div className="row">
            <h5>Name</h5>
        </div>
        <div className="row">
            <textarea name="Name" id="Name" cols="20" rows="1"></textarea>
        </div>
        <div className="row">
            <h5>Email</h5>
        </div>
        <div className="row">
            <textarea name="Email" id="Email" cols="20" rows="1"></textarea>
        </div>
        <div className="row">
            <h5>Message</h5>
        </div>
        <div className="row">
            <textarea name="Message" id="Message" cols="20" rows="2"></textarea>
        </div>
    </div>
    )
}

export default Contact;