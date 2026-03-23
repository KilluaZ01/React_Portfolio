import { CERTIFICATE } from "../constants";
import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <section
      className="section-shell px-6 py-10 sm:px-8 lg:px-10"
      id="certificates"
    >
      <div className="mb-10 max-w-3xl">
        <span className="eyebrow">Certificates</span>
        <h2 className="section-title mt-5">
          Recent learning that strengthened my fundamentals.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {CERTIFICATE.map((certificate, index) => (
          <div
            key={index}
            className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 sm:grid-cols-[150px_1fr]"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <img
                  className="h-[150px] w-full rounded-[1.25rem] border border-white/10 object-cover"
                  src={certificate.image}
                  width={150}
                  height={150}
                  alt={certificate.title}
                />
                <span className="mt-3 inline-flex text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  View certificate
                </span>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  {certificate.issuer}
                </p>
                <h3 className="mt-2 text-xl font-medium">
                  {certificate.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {certificate.description}
                </p>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {certificate.date}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
