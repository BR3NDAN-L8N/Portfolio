//  REACT imports
import React from 'react'
//  COMPONENT imports
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ProjectCard from "./ProjectCard/ProjectCard";
//  STYLE imports
import './Projects.css';
import adventureBuddiesImg from './assets/adventure-buddies-tiny.png';
import myCovidTrackerImg from './assets/my-covid-tracker-tiny.png';
import safeSpaceImg from './assets/safe-space-tiny.png';

export default function Projects() {
    return (
        <article className="container" id="projects-section">
            <SectionHeader title="Projects" />

            <section className="card-wrapper">
                <ProjectCard
                    header="Safe Space"
                    text="LGBTQ Social Network"
                    techUsed={["Angular", "Nest.js", "Typescript", "MongoDB"]}
                    image={safeSpaceImg}
                    imageAlt="Site screenshot"
                    urlCode="https://github.com/macksm3/safe-space"
                    urlSite="https://safe-space-ne.herokuapp.com/home"
                />
                <ProjectCard
                    header="Outdoor Adventure Buddies"
                    text="Outdoor Adventure Meet-up Network"
                    techUsed={["Node.js", "Express", "Handlebars", "SendGrid Api"]}
                    image={adventureBuddiesImg}
                    imageAlt="Site screenshot"
                    urlCode="https://github.com/dylanbest15/Outdoor-Adventure-Buddies"
                    urlSite="https://whispering-castle-57159.herokuapp.com/"
                />
                <ProjectCard
                    header="My COVID Tracker"
                    text="Up-To-Date COVID Info"
                    techUsed={["Javascript", "Web API", "NY Times API"]}
                    image={myCovidTrackerImg}
                    imageAlt="Site screenshot"
                    urlCode="https://github.com/cjlaflamme1/MyCovidTracker"
                    urlSite="https://cjlaflamme1.github.io/MyCovidTracker/"
                />
            </section>

            


            {/* PROJECT 1 */}
            <section class="row project-card">
                <img class="col-md-6 card-img-top" src="assets/Images/safe-space-tiny.png" alt="Application preview" />
                <div class="col-md-6 card-body">
                    <h2 class="card-title">Safe Space</h2>
                    <p class="card-text">The ability to experience the world safely is not a luxury afforded to everyone.
                    Members of the LGBTQ community rely on
                    word-of-mouth to find businesses and resources to provide safe havens and community. One of the most
                    frequent roadblocks
                    is the decentralization of such information.
                    Safe Space offers a unique platform that helps the LGBTQ community safely expand their orbit by
                    connecting members with
                    resources, businesses, and community.
                </p>
                    <div class="row card-details">
                        <details class="col-xs-12 col-lg-6 list-group list-group-flush">
                            <summary>Technologies Used</summary>
                            <ul class="technologies-list">
                                <li class="list-group-item">Angular</li>
                                <li class="list-group-item">NestJS</li>
                                <li class="list-group-item">Typescript</li>
                                <li class="list-group-item">Mongo/Mongoose</li>
                            </ul>
                        </details>
                        <details class="col-xs-12 col-lg-6 list-group list-group-flush">
                            <summary>What I Did</summary>
                            <ul class="project-role-list">
                                <li class="list-group-item">
                                    Database querying.
                            </li>
                                <li class="list-group-item">
                                    Server-side routing.
                            </li>
                                <li class="list-group-item">
                                    Local Storage setup & saving user's data upon login and profile updates, for intra-app use.
                            </li>
                            </ul>
                        </details>
                    </div>
                    <div class="card-links">
                        <a href="https://safe-space-ne.herokuapp.com/home" class="card-link" target="_blank">View
                        Site
                    </a>
                        <span>||</span>
                        <a href="https://github.com/macksm3/safe-space" class="card-link" target="_blank">View
                        Code
                    </a>
                    </div>
                </div>
            </section>


            {/* PROJECT 2 */}
            <section class="row project-card">
                <img class="col-md-6 card-img-top" src="assets/Images/adventure-buddies-tiny.png" alt="Application preview" />
                <div class="col-md-6 card-body">
                    <h2 class="card-title">Outdoor Adventure Buddies</h2>
                    <p class="card-text">In these times, one thing remains clear; people want to get out and explore the
                    outdoors! For these exact moments, we
                    created Outdoor Adventure Buddies. Our application allows users to create an account, search for
                    hiking trails, and find
                    buddies to go hiking. Users can save trails to their bucket list and message new buddies for their
                    future adventures!
                </p>
                    <div class="row card-details">
                        <details class="col-xs-12 col-lg-6 list-group list-group-flush">
                            <summary>Technologies Used</summary>
                            <ul class="technologies-list">
                                <li class="list-group-item">Node.js</li>
                                <li class="list-group-item">Express.js</li>
                                <li class="list-group-item">Express-Handlebars</li>
                                <li class="list-group-item">Vanilla Handlebars</li>
                                <li class="list-group-item">SendGrid</li>
                            </ul>
                        </details>
                        <details class="col-xs-12 col-lg-6 list-group list-group-flush">
                            <summary>What I Did</summary>
                            <ul class="project-role-list">
                                <li class="list-group-item">Setup email communication using SendGrid.</li>
                                <li class="list-group-item">Email templates with vanilla Handlebars.</li>
                                <li class="list-group-item">Converted Client-Side HTML to Express-Handlebars.</li>
                            </ul>
                        </details>
                    </div>
                    <div class="card-links">
                        <a href="https://whispering-castle-57159.herokuapp.com/" class="card-link" target="_blank">View
                        Site
                    </a>
                        <span>||</span>
                        <a href="https://github.com/dylanbest15/Outdoor-Adventure-Buddies" class="card-link"
                            target="_blank">View Code
                    </a>
                    </div>
                </div>
            </section>


            {/* PROJECT 3 */}
            <section class="row project-card">
                <img class="col-md-6 card-img-top" src="assets/Images/my-covid-tracker-tiny.png" alt="Application preview" />
                <div class="col-md-6 card-body">
                    <h2 class="card-title">My COVID Tracker</h2>
                    <p class="card-text">
                        Welcome to the one-stop-shop for all your COVID-19 related information. View up to date statistics from around the world
                        and the most recent sections from the New York Times.
                </p>
                    <div class="row card-details">
                        <details class="col-xs-12 col-lg-6 list-group list-group-flush">
                            <summary>Technologies Used</summary>
                            <ul class="technologies-list">
                                <li class="list-group-item">JavaScript</li>
                                <li class="list-group-item">Local Storage</li>
                                <li class="list-group-item">NY Times API</li>
                            </ul>
                        </details>
                        <details class="col-xs-12 col-lg-6 list-group list-group-flush">
                            <summary>What I Did</summary>
                            <ul class="project-role-list">
                                <li class="list-group-item">
                                    Calls to NY Times API for articles following a search criteria.
                            </li>
                                <li class="list-group-item">
                                    Displaying NY Times in a easily readable fashion.
                            </li>
                                <li class="list-group-item">
                                    Local Storage setup & tracking of user-saved articles.
                            </li>
                            </ul>
                        </details>
                    </div>
                    <div class="card-links">
                        <a href="https://cjlaflamme1.github.io/MyCovidTracker/" class="card-link" target="_blank">View
                        Site
                    </a>
                        <span>||</span>
                        <a href="https://github.com/cjlaflamme1/MyCovidTracker" class="card-link" target="_blank">View
                        Code
                    </a>
                    </div>
                </div>
            </section>
        </article>
    )
}