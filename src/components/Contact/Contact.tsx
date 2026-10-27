import "./Contact.css";
import { profile } from "../../data/profile";
import {
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
} from "../Icons/Icons";

export default function Contact() {
  return (
    <nav className="contact" aria-label="Contact">
      <ul className="contact__list">
        <li>
          <a className="contact__link" href={`mailto:${profile.email}`}>
            <MailIcon />
            {profile.email}
          </a>
        </li>
        <li>
          <a
            className="contact__link contact__link_muted"
            href={profile.locationUrl}
            target="_blank"
            rel="noreferrer"
          >
            <PinIcon />
            {profile.locationText}
          </a>
        </li>
        <li>
          <a
            className="contact__link contact__link_accent"
            href={profile.resume}
            download
          >
            <FileIcon />
            Download my resume
          </a>
        </li>
      </ul>
      <ul className="contact__social-list">
        <li>
          <a
            className="contact__social"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            className="contact__social"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
