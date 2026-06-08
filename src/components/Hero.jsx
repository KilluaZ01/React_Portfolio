import { CONTACT, HERO_CONTENT, HERO_METRICS } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/Profile.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section className="section-shell px-6 py-10 sm:px-8 lg:px-10" id="home">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="flex flex-col items-start">
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="eyebrow mb-6"
            >
              Kathmandu based • Junior Python Developer • Open to opportunities
            </motion.span>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="display-font max-w-4xl text-6xl leading-none sm:text-7xl lg:text-[6.5rem]"
            >
              Building automation systems, web scrapers, and efficient workflows
              that solve real-world problems.
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg uppercase tracking-[0.28em] text-[var(--color-accent)] sm:text-xl"
            >
              Arik Rai • Junior Python Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-2xl py-4 text-base leading-8 text-[var(--color-muted)] sm:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="mt-4 flex flex-wrap gap-3"
            >
              <a href="#projects" className="link-pill link-pill-primary">
                View selected work
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="link-pill link-pill-secondary"
              >
                Email me
              </a>
            </motion.div>

            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-8 grid w-full gap-4 sm:grid-cols-3"
            >
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="glass-card rounded-3xl p-4">
                  <p className="display-font text-4xl text-[var(--color-accent)]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="lg:p-4">
          <div className="relative mx-auto flex max-w-md justify-center">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)]"></div>
            <motion.img
              className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Arik Rai"
            />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.35 }}
              className="glass-card absolute bottom-6 left-6 right-6 rounded-[1.75rem] p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                What I focus on
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="pill">Python automation</span>
                <span className="pill">Web scraping & analysis</span>
                <span className="pill">Workflow optimization</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
