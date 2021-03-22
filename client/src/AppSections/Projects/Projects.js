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
        <article className="container">
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
        </article>
    )
}