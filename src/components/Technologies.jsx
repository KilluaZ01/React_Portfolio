import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-600 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://react.dev/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://nodejs.org/docs/latest/api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://tailwindui.com/documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTailwindcss className="text-7xl text-cyan-500" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://dev.mysql.com/doc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMysql className="text-7xl text-cyan-700" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://docs.python.org/3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiPython className="text-7xl text-green-400" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
