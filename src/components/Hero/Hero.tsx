import "./Hero.css";
import { profile } from "../../data/profile";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <p className="hero__greeting">Hi, I&apos;m</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__blurb">{profile.blurb}</p>
        <div className="hero__actions">
          <a className="button button_primary" href="#projects">
            View my work
          </a>
          <a className="button button_secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
