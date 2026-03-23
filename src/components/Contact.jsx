import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";

const socialIcons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram,
};

const Contact = () => {
  return (
    <section className="section-shell px-6 py-10 sm:px-8 lg:px-10" id="contact">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title mt-5">
            If you need a developer who can ship clean work, let’s talk.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            I’m open to freelance work, collaborative builds, and full-time
            opportunities where thoughtful product development matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-pill link-pill-primary"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="link-pill link-pill-secondary"
            >
              {CONTACT.phoneNo}
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="glass-card rounded-[1.6rem] p-5 sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Location
            </p>
            <p className="mt-2 text-xl font-medium">{CONTACT.address}</p>
          </div>
          {SOCIAL_LINKS.map((social) => {
            const Icon = socialIcons[social.label];

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 rounded-[1.6rem] p-5 transition hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg">
                  <Icon />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Social
                  </span>
                  <span className="mt-1 block text-base">{social.label}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
