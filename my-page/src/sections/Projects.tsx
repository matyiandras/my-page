
import { FaLongArrowAltRight } from "react-icons/fa"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react";
import { use } from "framer-motion/client";

export const Projects = () => {

    const [openIndex, setOpenIndex] = useState(1);

    useMotionValueEvent(useScroll().scrollY, "change", (latest) => {
        console.log(latest);
        if (latest < 1100) {
            setOpenIndex(1);
        }
        if (latest > 1100) {
            setOpenIndex(2);
        }
        if (latest > 1300) {
            setOpenIndex(3);
        }
        if (latest > 1500) {
            setOpenIndex(4);
        }
    });

    return (
        <div id="projects" className="flex flex-col py-40 items-center place-content-center place-items-center bg-amber-100 font-mono text-black">
            <div className="grid grid-cols-3 w-full max-w-[958px] space-x-4 gap-8 mx-20">
                <div className="col-span-1 ">
                    <div className="flex items-center text-5xl justify-center">
                        <div>Experience</div>
                        <div className="flex flex-grow justify-center"><FaLongArrowAltRight className="inline text-4xl text-gray-800 ml-2" /></div>
                    </div>
                </div>
                <div className="col-span-2 flex gap-4 text-3xl text-gray-800 items-center">
                    <div className="h-full flex items-start justify-start font-semibold">
                        2024
                    </div>
                    <div className="h-full overflow-hidden">
                        <a className="group transition duration-300 font-bold cursor-pointer" onMouseEnter={() => setOpenIndex(1)}>
                            Technical University of Denmark
                            <motion.span
                                variants={{
                                    open: { width: "100%" },
                                    closed: { width: 0 }
                                }}
                                animate={openIndex === 1 ? "open" : "closed"}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="block h-0.5 bg-black"
                            ></motion.span>
                        </a>
                        <motion.div
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                closed: { opacity: 0, height: 0 }
                            }}
                            animate={openIndex === 1 ? "open" : "closed"}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-2xl"
                        >
                            I'm currently studying for a MSc in <span className="font-bold">Human-Centered Artificial Intelligence</span>.
                        </motion.div>
                    </div>

                </div>
                <div className="col-span-1 " />
                <div className="col-span-2 flex gap-4 text-3xl text-gray-800 items-center">
                    <div className="h-full flex items-start justify-start font-semibold">
                        2023
                    </div>
                    <div className="h-full items-start overflow-hidden">
                        <a className="group transition duration-300 font-bold cursor-pointer" onMouseEnter={() => setOpenIndex(2)}>
                            Microtrade Ltd.
                            <motion.span
                                variants={{
                                    open: { width: "100%" },
                                    closed: { width: 0 }
                                }}
                                animate={openIndex === 2 ? "open" : "closed"}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="block h-0.5 bg-black"
                            ></motion.span>
                        </a>
                        <motion.div
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                closed: { opacity: 0, height: 0 }
                            }}
                            animate={openIndex === 2 ? "open" : "closed"}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-2xl"
                        >
                            <p>
                                I worked as a <span className="font-bold">Lead Frontend Developer</span> at the software development branch of Microtrade Ltd., a small lab equipment company.
                            </p>
                            <div className="flex flex-col gap-2 pt-2 w-full">
                                <div className="flex gap-2 justify-start">
                                    <FaLongArrowAltRight className="text-2xl text-gray-800 w-16" />
                                    <p className="text-justify">Built web-applications for national and international laboratories using <span className="font-bold">React</span> and <span className="font-bold">Django</span>.</p>
                                </div>
                                <div className="flex gap-2 justify-start">
                                    <FaLongArrowAltRight className="text-2xl text-gray-800 w-16" />
                                    <p className="text-justify"><span className="font-bold">Managed a team of 4 developers</span> to deliver the project on time.</p>
                                </div>
                                <div className="flex gap-2">
                                    <FaLongArrowAltRight className="text-2xl text-gray-800 w-16" />
                                    <p className="text-justify">I have designed user-friendly interfaces using <span className="font-bold">Figma. </span></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
                <div className="col-span-1 " />
                <div className="col-span-2 flex gap-4 text-3xl text-gray-800 items-center">
                    <div className="h-full flex items-start justify-start font-semibold">
                        2022
                    </div>
                    <div className="h-full items-start overflow-hidden">
                        <a className="group transition duration-300 font-bold cursor-pointer" onMouseEnter={() => setOpenIndex(3)}>
                            Digital Thinkers
                            <motion.span
                                variants={{
                                    open: { width: "100%" },
                                    closed: { width: 0 }
                                }}
                                animate={openIndex === 3 ? "open" : "closed"}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="block h-0.5 bg-black"
                            ></motion.span>
                        </a>
                        <motion.div
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                closed: { opacity: 0, height: 0 }
                            }}
                            animate={openIndex === 3 ? "open" : "closed"}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-2xl"
                        >
                            <div>
                                I worked as a <span className="font-bold">Software Developer Intern </span> at Digital Thinkers, a medium sized web development company in Budapest.
                            </div>
                            <div className="flex flex-col gap-2 pt-2">
                                <div className="flex gap-2">
                                    <FaLongArrowAltRight className="text-2xl text-gray-800 w-16 m-2" />
                                    <p><span className="font-bold">Supported development, QA and user experience staff</span> to develop new products.</p>
                                </div>
                                <div className="flex gap-2">
                                    <FaLongArrowAltRight className="text-2xl text-gray-800 w-16" />
                                    <p><span className="font-bold">Developed a Virtual Reality project</span> using <span className="font-bold">Unity</span> and <span className="font-bold">C#</span>.</p>
                                </div>
                                <div className="flex gap-2">
                                    <FaLongArrowAltRight className="text-2xl text-gray-800 w-16 m-2" />
                                    <p><span className="font-bold">Created a Proof-of-Concept application</span> for a research project using <span className="font-bold">Flutter</span> and <span className="font-bold">Python</span>.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
                <div className="col-span-1 " />
                <div className="col-span-2 flex gap-4 text-3xl text-gray-800 items-center">
                    <div className="h-full flex items-start justify-start font-semibold">
                        2019
                    </div>
                    <div className="h-full items-start overflow-hidden">
                        <a className="group transition duration-300 font-bold cursor-pointer" onMouseEnter={() => setOpenIndex(4)}>
                            BME
                            <motion.span
                                variants={{
                                    open: { width: "100%" },
                                    closed: { width: 0 }
                                }}
                                animate={openIndex === 4 ? "open" : "closed"}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="block h-0.5 bg-black"
                            >
                            </motion.span>
                        </a>
                        <motion.div
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                closed: { opacity: 0, height: 0 }
                            }}
                            animate={openIndex === 4 ? "open" : "closed"}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-2xl"
                        >
                            <p>I've completed my <span className="font-bold">Bachelor's degree</span> in <span className="font-bold">Computer Science Engineering</span> at the <span className="font-bold">Budapest University of Technology and Economics</span>. My specialization was in <span className="font-bold">Software Development</span>.</p>                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}