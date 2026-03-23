import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      className="section-shell px-6 py-10 sm:px-8 lg:px-10"
      id="experience"
    >
      <div className="mb-10 max-w-3xl">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title mt-5">
          Hands-on work shaped by real project delivery.
        </h2>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="grid gap-4 rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 lg:grid-cols-[0.28fr_0.72fr]"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex items-start"
            >
              <p className="pill text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {experience.company}
              </p>
              <h3 className="mt-3 text-2xl font-medium">{experience.role}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {experience.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="pill text-sm text-[var(--color-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
