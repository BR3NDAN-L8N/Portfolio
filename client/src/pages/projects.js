import React from 'react';

export default function Projects() {
    return (
        <main>

            {/* <!--
          PROJECT SECTION
      --> */}
            <article id="project">
                <section className="row">
                    <h2 className="col-12">Portfolio</h2>
                    <hr />
                </section>
                {/* <!-- PROJECT 1 --> */}
                <section className="row individual-project-section project-1">
                    <h3 className="col-sm-12 project-title">Outdoor Adventure Buddies</h3>
                    <div className="row">
                        <figure className="col-sm-12 col-md-6">
                            <img className="project-image" src="assets/Images/OAB-Screenshot.png"
                                alt="Preview of the application's home page." />
                        </figure>
                        <div className="col-sm-12 col-md-6">
                            <div className="project-technologies-used">
                                <h4>Technologies Used</h4>
                                <ul className="technologies-list">
                                    <li>Basic: HTML, CSS, Javascript</li>
                                    <li>JQuery</li>
                                    <li>Hiking Project API</li>
                                    <li>Node.js</li>
                                    <li>Axios</li>
                                    <li>Express.js</li>
                                    <li>Express-Handlebars</li>
                                    <li>Passport.js</li>
                                    <li>bcrypt</li>
                                    <li>Sequelize</li>
                                    <li>SendGrid</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                        <p className="project-description col-12">
                            Throughout these unprecedented times one thing has remained clear, people want to get out and
                            explore
                            the
                            outdoors! For these exact moments we created Outdoor Adventure Buddies. Our application allows users
                            to
                            create an account, search for hiking trails and best of all find buddies to hike with. Users can
                            also
                            save
                            trails to their bucket list for future hikes as well as find and message new buddies for their
                            future
                            adventures!
                        </p>
                        <p className="project-description col-12">
                            This is a group project with myself and 5 others. My main responsibility was implementing email
                            messaging
                            for users to connect, using SendGrid with Handlebars templates. Initially I added basic template
                            code to
                            get
                            us up and running. At the end I converted the HTML for the front-end to Express-Handlebars.
                        </p>
                        <div className="project-links col-12">
                            <a href="https://whispering-castle-57159.herokuapp.com/" className="project-link" target="_blank">View Site
                            </a>
                            <span>||</span>
                            <a href="https://github.com/dylanbest15/Outdoor-Adventure-Buddies" className="project-link"
                                target="_blank">View Code
                            </a>
                        </div>
                    </div>
                </section>
                {/* <!-- PROJECT 2 --> */}
                <section className="row individual-project-section project-1">
                    <h3 className="col-sm-12 project-title">My COVID Tracker</h3>
                    <div className="row">
                        <figure className="col-sm-12 col-md-6">
                            <img className="project-image" src="https://media.giphy.com/media/Vh9PHybWF4VsakZqi2/giphy.gif"
                                alt="Preview gif of the My COVID Tracker website." />
                        </figure>
                        <div className="col-sm-12 col-md-6">
                            <div className="project-technologies-used">
                                <h4>Technologies Used</h4>
                                <ul className="technologies-list">
                                    <li>Basic: HTML, CSS, Javascript</li>
                                    <li>JQuery</li>
                                    <li>New York Times API</li>
                                    <li>Coronavirus COVID19 API</li>
                                    <li>Materialize</li>
                                </ul>
                            </div>
                        </div>
                        <p className="project-description col-12">
                            My COVID Tracker helps those seeking answers to keep up with the growing numbers and news about the
                            current
                            state of COVID-19. Search by country and find the current stats and news. Articles are pulled from
                            the
                            Wall
                            Street Journal. If you find an article you want to save for later, click the save button and
                            navigate to
                            your archive and view it later. For statistics, you can find the total confirmed, active, and
                            recovered
                            cases, as well as deaths associated with COVID-19. Be sure to check the CDC guidelines for safe
                            practices
                            located on the bottom of each page!
                </p>
                        <p className="project-description col-12">
                            This is a group project with myself and 3 others. I was in charge of the NY Times API. I handled the
                            ajax
                            call and the saving/deleting aspect of the personal archive.
                </p>
                        <div className="project-links col-12">
                            <a href="https://cjlaflamme1.github.io/MyCovidTracker/" className="project-link" target="_blank">View
                        Site</a>
                            <span>||</span>
                            <a href="https://github.com/cjlaflamme1/MyCovidTracker" className="project-link" target="_blank">View
                        Code</a>
                        </div>
                    </div>
                </section>
                {/* <!-- PROJECT 3 --> */}
                <section className="row individual-project-section project-2">
                    <h3 className="col-sm-12 project-title">Weather Dashboard</h3>
                    <div className="row">
                        <figure className="col-sm-12 col-md-6">
                            <img className="project-image" src="assets/Images/WeatherDashboard.png"
                                alt="Preview of Weather Dashboard app." />
                        </figure>
                        <div className="col-sm-12 col-md-6">
                            <div className="project-technologies-used">
                                <h4>Technologies Used</h4>
                                <ul className="technologies-list">
                                    <li>Basic: HTML, CSS, Javascript</li>
                                    <li>CSS Grid</li>
                                    <li>JQuery</li>
                                    <li>Bootstrap 4 (clearfix only)</li>
                                    <li>Open Weather Map API</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="project-description col-12">
                        Your typical weather app but inspired by eggplants &#x1F346;&#x1F346;&#x1F346;. Upon load, you're shown
                        weather for your geolocation. Enter a zip code to see the weather in the desired area and be shown
                        current
                        weather stats as well as a five-day forecast. A list of previous searches is saved as buttons for
                        quicker
                        searches in the future.
            </p>
                    <div className="project-links col-12">
                        <a href="https://br3ndan-l8n.github.io/Weather-Dashboard-API/" className="project-link" target="_blank">View
                    Site</a>
                        <span>||</span>
                        <a href="https://github.com/BR3NDAN-L8N/Weather-Dashboard-API" className="project-link" target="_blank">View
                    Code</a>
                    </div>
                </section>
                {/* <!-- PROJECT 4 --> */}
                <section className="row individual-project-section project-3">
                    <h3 className="col-sm-12 project-title">Work Day Scheduler</h3>
                    <div className="row">
                        <figure className="col-sm-12 col-md-5">
                            <img className="project-image" src="assets/Images/WorkDayScheduler.png"
                                alt="Preview of Work Day Scheduler app." />
                        </figure>
                        <div className="col-sm-12 col-md-6">
                            <div className="project-technologies-used">
                                <h4>Technologies Used</h4>
                                <ul className="technologies-list">
                                    <li>Basic: HTML, CSS, Javascript</li>
                                    <li>JQuery</li>
                                    <li>Local Storage</li>
                                    <li>Bootstrap 4</li>
                                    <li>Moment.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="project-description col-12">
                        Scheduler for the workday! Enter a start time and be presented with 9, 1-hour, blocks. Easily keep track
                        of your current, past, and future tasks with dynamic time-block-coloring. Unfortunately, you're limited
                        to
                        a 9-hour workday, but I call that a feature #WorkLifeBalance!
            </p>
                    <div className="project-links col-12">
                        <a href="https://br3ndan-l8n.github.io/Day-Calendar/" className="project-link" target="_blank">View Site</a>
                        <span>||</span>
                        <a href="https://github.com/BR3NDAN-L8N/Day-Calendar" className="project-link" target="_blank">View Code</a>
                    </div>
                </section>
            </article>

        </main>
    );
}