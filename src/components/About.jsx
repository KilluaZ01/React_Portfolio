import aboutImg from "../assets/about.jpg";
import {
  ABOUT_PILLARS,
  ABOUT_TEXT1,
  ABOUT_TEXT2,
  ABOUT_TEXT3,
} from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-shell px-6 py-10 sm:px-8 lg:px-10" id="about">
      <div className="mb-10 max-w-3xl">
        <span className="eyebrow">About me</span>
        <h2 className="section-title mt-5">
          A developer who cares about both the build and the feel.
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="lg:pr-6"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)]"></div>
            <img
              className="relative rounded-[2rem] border border-white/10 object-cover"
              src={aboutImg}
              alt="Arik Rai working"
            />
            <div className="glass-card absolute bottom-6 right-6 rounded-[1.5rem] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Based in
              </p>
              <p className="mt-1 display-font text-3xl">Kathmandu</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="glass-card rounded-[1.75rem] p-6 sm:p-8">
            <p className="text-base leading-8 text-[var(--color-muted)]">
              {ABOUT_TEXT1}
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              {ABOUT_TEXT2}
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              {ABOUT_TEXT3}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {ABOUT_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card rounded-[1.5rem] p-5"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {pillar.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
