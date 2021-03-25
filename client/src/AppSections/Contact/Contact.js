//  REACT imports
import React from 'react';
import { useForm } from 'react-hook-form';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
//  STYLE imports
import './Contact.css';
import githubLogo from './assets/github.png';
import linkedInLogo from './assets/linkedin.png';

export default function Contact() {

    //  FORM
    const { register, handleSubmit, errors } = useForm();

    const postToBackendApi = (data) => {
        console.log(data);
        console.log(`\nstingified data: ${JSON.stringify(data)}\n`);
        const url = '/email/send-email';
        const initObject = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        };
        fetch(url, initObject);
        // return response.json;
    }

    return (
        <article className="contact container">

            <SectionHeader
                title="Get In Touch!"
            />

            <form className="form" onSubmit={handleSubmit(postToBackendApi)}>
                <div className="form-wrapper">
                    {/* FORM LEFT */}
                    <div className="form-left">
                        <div className="name">
                            {/* FIRST NAME */}
                            <label htmlFor="name">* Name</label>
                            <input className={errors.name && "contact-form-required"} type="text" id="name" placeholder="John Smith" name="name" size="auto" ref={register({ required: true, minLength: 3  })} />
                        </div>
                        <div className="email">
                            {/* EMAIL */}
                            <label htmlFor="email">* Email</label>
                            <input className={errors.email && "contact-form-required"} type="text" id="email" placeholder="Example@email.com" name="email" ref={register({ required: true, minLength: 10 })} />
                        </div>
                    </div>
                    {/* LOGOS */}
                    <div className="logos">

                        <a href="https://github.com/BR3NDAN-L8N" className="tooltip" target="_blank" rel="noreferrer">
                            <span className="tooltip-text">Github Profile</span>
                            <img src={githubLogo} className="social-profile-logo logo-github" alt="github logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/brendan-leighton/" className="tooltip" target="_blank" rel="noreferrer">
                            <span className="tooltip-text">LinkedIn Profile</span>
                            <img src={linkedInLogo} className="social-profile-logo logo-linkedin" alt="linkedIn logo" />
                        </a>
                    </div>
                    {/* FORM RIGHT */}
                    <div className="form-right">
                        <div className="message">
                            {/* MESSAGE  */}
                            <label htmlFor="message">* Message</label>
                            <textarea className={errors.message && "contact-form-required"} type="text" rows="12" id="form-message"
                                placeholder="Tell me something about my eyes..." name="message" ref={register({ required: true, minLength: 20 })}></textarea>
                        </div>
                        {/* SUBMIT EMAIL */}
                        <input type="submit" value="Send Email" />
                    </div>
                </div>
            </form>
        </article>
    )
}
