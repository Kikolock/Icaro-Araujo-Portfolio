import React from "react";
import { useState } from "react";

function Contact() {
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "name" || e.target.name === "message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

    return (
        <div className="form-main-div">
            <div><h1>Contact Me</h1></div>
            <div className="form-div">
                <form>
                    <div className="fullname-div">
                        <label htmlFor="name">Full Name
                            <input defaultValue={name} onBlur={handleBlank} id="name" name="name" type="text" required />
                        </label>
                    </div>
                    <div className="email-div">
                        <label htmlFor="email">Email Address
                            <input defaultValue={email} onBlur={handleChange} id="email" name="email" type="email" required />
                        </label>
                    </div>
                    <div className="message-div">
                        <label htmlFor="message">Message
                            <textarea defaultValue={message} onBlur={handleBlank} id="message" name="message" required></textarea>
                        </label>
                    </div>
                    <div className="submit-div">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;

