"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "@components/buttons/PrimaryButton";

export default function IntroHome(): JSX.Element {
  const heading = "Top quality products!";
  const headingSplitted = heading.split(" ");

  const content =
    "At Electrical Store, we offer a curated selection of cutting edge technology products, ensuring that our customers stay ahead in the rapidly evolving tech landscape. Our extensive range caters to both novices and seasoned enthusiasts, reflecting our dedication to being the go to destination for all things tech.";
  const contentSplitted = content.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const headingChild = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const textChild = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full h-[650px] bg-[#ffffff] mx-2 sm:mx-0 border rounded-3xl overflow-hidden">
      <div className="relative rounded-3xl opacity-40 shadow-sm flex justify-center items-center">
        <motion.div
          animate={{
            y: [
              0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -4, -3, -2,
              -1, 0,
            ],
            transition: { duration: 3, repeat: Infinity, yoyo: Infinity },
          }}
          className="absolute top-20 left-12 z-10"
        >
          <Image
            src="/assets/pageImages/kangaroo.jpg"
            alt="Kangaroo Machine"
            width={150}
            height={150}
          />
        </motion.div>
        <motion.div
          animate={{
            y: [
              0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -4, -3, -2,
              -1, 0,
            ],
            transition: { duration: 5, repeat: Infinity, yoyo: Infinity },
          }}
          className="absolute top-16"
        >
          <Image
            src="/assets/pageImages/kangaroo.jpg"
            alt="Kangaroo Machine"
            width={460}
            height={512}
          />
        </motion.div>
        <motion.div
          animate={{
            y: [
              0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -4, -3, -2,
              -1, 0,
            ],
            transition: { duration: 4, repeat: Infinity, yoyo: Infinity },
          }}
          className="absolute top-52 right-12"
        >
          <Image
            src="/assets/pageImages/kangaroo.jpg"
            alt="Kangaroo Machine"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute w-[80%] xl:w-[96%] top-0 left-12 2xl:left-2 p-6 mt-44 xl:mt-36">
          <motion.div
            style={{
              display: "flex",
              width: "100%",
              wordWrap: "break-word",
            }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {headingSplitted.map((word, index) => (
              <motion.span
                variants={headingChild}
                key={index}
                style={{
                  marginRight: "10px",
                  fontWeight: "bold",
                }}
                className="text-[2rem] 2xl:text-3xl xl:text-2xl inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <div className="w-full my-2 flex flex-row justify-between items-center">
            <div className="w-fit">
              <PrimaryButton name={"Shop now"} onClick={() => {}} />
            </div>
            <hr className="w-[200px] xl:w-[100px] h-[2px] mr-4 xl:m-0 bg-primary rounded"></hr>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-[96%] xl:w-full xl:text-sm font-light text-justify break-words"
          >
            {contentSplitted.map((letter, index) => (
              <motion.span
                className="mr-2 inline-block"
                variants={textChild}
                key={index}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
