//  REACT imports
import React from 'react';
import { useForm } from 'react-hook-form';
//  STYLE imports
import './Contact.css';
export default function Contact() {

    //  FORM
    const { register, handleSubmit, error } = useForm();

    const configureEmail = (data) => {
        console.log(data);
    }

    return (
        <article className="contact" id="contact-section">
            <form className="form" onSubmit={handleSubmit(configureEmail)}>
                {/* FIRST NAME */}
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Smith" name="name" ref={register} />
                {/* LAST NAME */}
                <label htmlFor="email">Your Email</label>
                <input type="text" id="email" placeholder="Example@email.com" name="email" ref={register} />
                {/* MESSAGE  */}
                <label htmlFor="message">Message</label>
                <textarea type="text" rows="7" id="form-message"
                    placeholder="Tell me something about my eyes..." name="message" ref={register}></textarea>
                {/* SUBMIT EMAIL */}
                <input type="submit" value="Send Email" />
            </form>
        </article>
    )
}
