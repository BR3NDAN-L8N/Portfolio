import React from 'react';

export default function Email() {
    return (
        <div>
            <button className="btn email-button">
                <i className="far fa-envelope fa-2x"></i>
            </button>

            <form action="#" className="email-form hide">
                <button className="exit-button">CLOSE</button>
                <div className="row">
                    {/* Name and Email forms */}
                    <section className="col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" className="form-control" id="name" placeholder="John Smith" name="name" />
                    </section>
                    <section className="col-md-6">
                        <label htmlFor="email">Your Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Example@email.com" name="email" />
                    </section>
                </div>
                <div className="row">
                    {/* Message and Submit button */}
                    <section className="col-sm-12">
                        <label htmlFor="form-message">Message</label>
                        <textarea type="text" className="form-control" rows="7" id="form-message"
                            placeholder="Tell me something about my eyes..." name="email"></textarea>
                        <input type="submit" value="Submit" id="submit-email-button" className=" col-sm-12 text-uppercase font-weight-bold" />
                    </section>
                </div>
            </form>
        </div>
    )
}