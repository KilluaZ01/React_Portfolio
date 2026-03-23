import logo from "../assets/ArikLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";

const sectionLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram,
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-4">
      <div className="section-shell flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full border border-white/10 bg-white/5 object-cover p-1"
            src={logo}
            alt="Arik Rai logo"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Portfolio
            </p>
            <p className="display-font text-2xl leading-none">Arik Rai</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="pill text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xl">
          {SOCIAL_LINKS.map((social) => {
            const Icon = socialIcons[social.label];

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
