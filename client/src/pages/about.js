import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function About() {
  //   const [store] = useStoreContext();

  return (
    <main>
      <article id="about">
        <section className="row">
          <h2 className="col-12">About Me</h2>
          <hr />
        </section>
        <section className="row">
          <figure className="col-lg-4 col-sm-12">
            <img className="about-image" src="assets/Images/Me-MEME.png"
              alt="A MEME. Photo one, shows someone looking away from computer with the text, Me focusing on Zoom meeting. Photo two, shows the same person in the same spot with their head turned slightly towards the camera and them looking directly in the camera with the text, Me checking my angle to make sure I'm still hot." />
          </figure>
          <div className="col-lg-8 col-sm-12">
            <p className="row">Remote-friendly, self-driven, Full-Stack Web Engineer with experience in front-end, back-end,
            and web design principles. I've accumulated over 4 years of team-lead experience. Some qualities that I bring
            are creativity, an innovative spirit, passion for growth, and high personal standards.
        </p>
            <br />
            <p className="row">
              Before learning web technologies at the University of New Hampshire, I spent four years leading a team of
              Merchandisers that was regularly ahead of schedule and able to assist other teams who had fallen behind. We
              achieved this by starting with larger projects in the morning and then sprinkling in smaller projects we
              could complete before the day’s end. Each project was completed in an MVP fashion allowing us to get the
              bulk of the work done quickly. Within the last hour or two of the day, we were able to revisit those
              projects if any changes were requested. This allowed us to complete projects in less time than was
              recommended. After each two-week sprint, the client had hundreds of new products to meet growing customer
              demand as well as a cleaner, more organized user-interface.
        </p>
          </div>
        </section>
        <section className="technical-skills row d-flex justify-content-around">
          <h3 className="col-12 text-center">Technical Skills</h3>
          <div className="col-sm-3 tech-skill-list mb-4">
            <h4>Front-End</h4>
            <ul className="skill-list">
              <li>HTML5, CSS3, JavaScript</li>
              <li>Bootstrap</li>
              <li>Moment</li>
              <li>JQuery</li>
              <li>AJAX</li>
              <li>API's (Web and 3rd-Party)</li>
            </ul>
          </div>
          <div className="col-sm-3 tech-skill-list mb-4">
            <h4>Back-End</h4>
            <ul className="skill-list">
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Express</li>
              <li>Express-Handlebars</li>
              <li>Node.js</li>
              <li>Inquirer</li>
              <li>Axios</li>
              <li>Passport.js</li>
              <li>Jest</li>
              <li>3rd-Party API's</li>
            </ul>
          </div>
          <div className="col-sm-3 tech-skill-list">
            <h4>Other</h4>
            <ul className="skill-list">
              <li>Git</li>
              <li>Github</li>
              <li>Git Bash</li>
              <li>MySQL Workbench</li>
              <li>Robo 3T</li>
              <li>Heroku</li>
              <li>Slack</li>
              <li>Zoom</li>
            </ul>
          </div>
        </section>
        <section className="personal-interests">
          <div className="row d-flex justify-content-around">
            <div className="col-sm-3 mb-4">
              <h3>Personal Interests</h3>
              <ul className="interest-list">
                <li>Personal Finance</li>
                <li>Psychology</li>
                <li>Video Games</li>
                <li>Comedies</li>
                <li>Stock Market</li>
                <li>Music Production</li>
                <li>Electric Guitar</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h3>My Custom Gaming PC</h3>
              <ul className="interest-list">
                <li>Motherboard: ASRock B450 Steel Legend</li>
                <li>CPU: AMD Ryzen 5 3600</li>
                <li>GPU: MSI GTX 1660ti</li>
                <li>RAM: 16GB DDR4 Vengeance RGB Pro 3200MHz</li>
              </ul>
            </div>

          </div>
        </section>
      </article>

    </main>
  );
}

export default About;