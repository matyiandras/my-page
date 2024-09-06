
import { FaLongArrowAltRight } from "react-icons/fa"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useEffect, useState } from "react";
import { ins } from "framer-motion/client";

export const About = () => {

    const { scrollY } = useScroll();

    //animate text position on scroll
    const [variant, setVariant] = useState(0);
    const [ scrollDirection, setScrollDirection ] = useState(0);
    
    const variants = {
        first: { y: 0 },
        second: { y: -40 },
        third: { y: -80 },
        fourth: { y: -120 },
        fifth: { y: -160 }
    };
    const transitionBasic = { duration: 0.5, ease: "easeInOut" };
    const transitionBack = { duration: 0 };

    const transition= scrollDirection === 1 ? variant % 5 === 0 ? transitionBack : transitionBasic : variant % 5 === 4 ? transitionBack : transitionBasic;

    //endless cycle through 4 text variants and reset instatly
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(variant);
        if(scrollY.getPrevious()! < latest){
            setScrollDirection(1);
        }
        else{
            setScrollDirection(-1);
        }
        setVariant(Math.floor(latest / 100));
    });
    //change text variant every 2 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setVariant((prev) => prev + 1);
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, []);


    return (
        <div id="about" className="flex flex-col py-40 items-center justify-center bg-black border-2 border-black">
            <div className="grid grid-cols-3  max-w-[958px] justify-center space-x-4 mx-20">
                <div className="col-span-1 ">
                    <div className="flex items-center text-5xl font-mono text-amber-100">
                        <div>About</div>
                        <div className="flex flex-grow justify-center"><FaLongArrowAltRight className="inline text-4xl ml-2" /></div>
                    </div>

                </div>
                <div className="col-span-2 text-2xl text-justify text-amber-100 font-mono">
                    <div className="flex gap-2 overflow-hidden items-center">
                        I’m a 23-year-old
                        <div className="flex flex-col gap-2 overflow-hidden h-10 border-2 border-amber-100 text-amber-100 font-semibold w-max px-2 rounded-full items-center">
                            <motion.div
                                variants={variants}
                                animate={variant % 5 === 0 ? "first" : variant % 5 === 1 ? "second" : variant % 5 === 2 ? "third" : variant % 5 === 3 ? "fourth" : "fifth"}
                                transition={transition}
                                className="relative"
                            >
                                Frontend Developer
                            </motion.div>
                            <motion.div
                                variants={variants}
                                animate={variant % 5 === 0 ? "first" : variant % 5 === 1 ? "second" : variant % 5 === 2 ? "third" : variant % 5 === 3 ? "fourth" : "fifth"}
                                transition={transition}
                                className="relative"
                            >
                                UX/UI Designer
                            </motion.div>
                            <motion.div
                                variants={variants}
                                animate={variant % 5 === 0 ? "first" : variant % 5 === 1 ? "second" : variant % 5 === 2 ? "third" : variant % 5 === 3 ? "fourth" : "fifth"}
                                transition={transition}
                                className="relative"
                            >
                                VR Enthusiast
                            </motion.div>
                            <motion.div
                                variants={variants}
                                animate={variant % 5 === 0 ? "first" : variant % 5 === 1 ? "second" : variant % 5 === 2 ? "third" : variant % 5 === 3 ? "fourth" : "fifth"}
                                transition={transition}
                                className="relative"
                            >
                                Engineer
                            </motion.div>
                            <motion.div
                                variants={variants}
                                animate={variant % 5 === 0 ? "first" : variant % 5 === 1 ? "second" : variant % 5 === 2 ? "third" : variant % 5 === 3 ? "fourth" : "fifth"}
                                transition={transition}
                                className="relative"
                            >
                                Frontend Developer
                            </motion.div>
                        </div>
                    </div>
                    with a passion for creating immersive digital experiences. Currently I'm most interested in Virtual Reality and UX design, where I strive to blend creativity with functionality. I enjoy tackling complex challenges and turning innovative ideas into reality. Let’s connect and explore the future of technology together!</div>
            </div>
        </div>
    )
}