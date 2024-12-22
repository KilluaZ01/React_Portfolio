import { CERTIFICATE } from "../constants";
import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <div className="border-b border-neutral-600 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h1>
      <div>
        {CERTIFICATE.map((certificate, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="relative w-full lg:w-1/4"
            >
              <div
                className="relative group rounded overflow-hidden"
                style={{ width: "150px", height: "150px" }}
              >
                <a
                  href={certificate.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    className="block w-full h-full object-cover"
                    src={certificate.image}
                    width={150}
                    height={150}
                    alt={certificate.title}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold">
                      View Certificate
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {certificate.title} -{" "}
                <span className="text-sm text-purple-100">
                  {certificate.issuer}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{certificate.description}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400 lg:text-end">
                {certificate.date}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
