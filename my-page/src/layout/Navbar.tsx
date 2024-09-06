import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { SlEnvolope, SlPhone, SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { HashLink } from "react-router-hash-link";
export const Navbar = () => {

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);
    const [top, setTop] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous! && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        if (latest === 0) {
            setTop(true);
        } else {
            setTop(false);
        }
    });

    return (
        <motion.nav
            variants={{
                hidden: { y: "-100%" },
                visible: { y: 0, backgroundColor: "hsl(0, 0%, 0%, 0.7)", backdropFilter: "blur(10px)" },
                top: { backgroundColor: "hsl(0, 100%, 100%)" }
            }}
            animate={hidden ? "hidden" : top ? "top" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sticky top-0 w-full z-20 py-4">
            <div className="grid grid-cols-3 py-2 items-center">
                <div className="text-4xl font-mono text-gray-800"></div>
                <div className="flex justify-center">
                    <HashLink to='#' smooth className="text-2xl font-serif bg-white py-1 px-4 rounded-full transition duration-300 hover:bg-amber-100 hover:scale-110">
                        Mátyás
                    </HashLink>
                </div>
                <div className="flex gap-4 px-4 justify-end text-2xl font-mono text-black">

                    <a className="group transition duration-300 bg-white p-2 rounded-full hover:bg-amber-100 hover:scale-110" href="mailto: andmatyas@gmail.com">
                        <SlEnvolope />
                    </a>


                    <a className="group transition duration-300 bg-white p-2 rounded-full hover:bg-amber-100 hover:scale-110" href="tel:+45 49 90 3800">
                        <SlPhone />
                    </a>


                    <a className="group transition duration-300 bg-white p-2 rounded-full hover:bg-amber-100 hover:scale-110" href="https://www.linkedin.com/in/matyas-andras">
                        <SlSocialLinkedin />
                    </a>


                    <a className="group transition duration-300 bg-white p-2 rounded-full hover:bg-amber-100 hover:scale-110" href="https://github.com/matyiandras">
                        <SlSocialGithub />
                    </a>

                </div>
            </div>
        </motion.nav>
    )
}