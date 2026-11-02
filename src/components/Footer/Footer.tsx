import "./Footer.css";
import Contact from "../Contact/Contact";

export function Footer() {
  return (
    <footer className="section footer" id="contact">
      <div className="section__inner footer__inner">
        <h2 className="section__title">Get in Touch</h2>
        <p className="footer__text">
          Have a project in mind, an open position, or just want to chat about
          development? Drop me a line using any of the links below.
        </p>
        <Contact />
      </div>
    </footer>
  );
}
