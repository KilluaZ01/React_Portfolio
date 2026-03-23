import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiSelenium } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { WORK_PRINCIPLES } from "../constants";
import { image } from "framer-motion/client";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  {
    name: "React",
    Icon: RiReactjsLine,
    image: "",
    href: "https://react.dev/learn",
    iconClassName: "text-cyan-300",
    duration: 2.5,
  },
  {
    name: "Selenium",
    Icon: SiSelenium,
    image: "",
    href: "https://selenium.dev/documentation/",
    iconClassName: "text-green-400",
    duration: 3,
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    image: "",
    href: "https://www.mongodb.com/docs/",
    iconClassName: "text-green-400",
    duration: 2,
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    image: "",
    href: "https://dev.mysql.com/doc/",
    iconClassName: "text-blue-300",
    duration: 5,
  },
  {
    name: "Python",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png",
    href: "https://docs.python.org/3/",
    iconClassName: "text-yellow-300",
    duration: 3.5,
  },
  {
    name: "Github",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-svg-vector.svg",
    href: "https://docs.github.com/en",
    iconClassName: "text-yellow-300",
    duration: 3.5,
  },
];

const Technologies = () => {
  return (
    <section className="section-shell px-6 py-10 sm:px-8 lg:px-10" id="stack">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <span className="eyebrow">Tech stack</span>
          <h2 className="section-title mt-5">
            Tools I use to turn ideas into working products.
          </h2>
          <div className="mt-8 space-y-4">
            {WORK_PRINCIPLES.map((principle) => (
              <div key={principle} className="glass-card rounded-[1.5rem] p-5">
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((technology) => {
            const Icon = technology.Icon;

            return (
              <motion.a
                key={technology.name}
                href={technology.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants(technology.duration)}
                initial="initial"
                animate="animate"
                className="glass-card rounded-[1.75rem] p-6 transition hover:-translate-y-1"
              >
                {technology.image ? (
                  <img
                    src={technology.image}
                    alt={technology.name}
                    className="w-16 h-16 object-contain"
                  />
                ) : Icon ? (
                  <Icon
                    className={`text-6xl ${technology.iconClassName || ""}`}
                  />
                ) : null}
                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {technology.name}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
