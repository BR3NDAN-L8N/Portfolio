import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function Footer() {
//   const [store] = useStoreContext();

  return (
    <footer>
        {/* SOCIAL MEDIA */}
        <article class="social-media d-flex justify-content-center" id="social-media">
            <a href="https://www.linkedin.com/in/brendan-leighton/" target="_blank"><i
                    class="fab fa-linkedin fa-2x"></i></a>
            <a href="https://github.com/BR3NDAN-L8N" target="_blank"><i class="fab fa-github fa-2x"></i></a>
            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a>
        </article>
        
        <div class="copyright">Brendan Leighton © 2020</div>
        <br />
        
        <article class="email-sent-success-modal container hide">
            <button class="exit-button-modal">CLOSE</button>
            <h3 class="email-modal-header">Email Sent!</h3>
            <p class="row email-modal-text">You should receive a confirmation email shortly. It may have been sent to your spam folder.</p>
        </article>
    </footer>
  );
}

export default Footer;