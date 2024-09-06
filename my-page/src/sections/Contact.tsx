

import { FaLongArrowAltRight } from "react-icons/fa"
import { SlEnvolope, SlPhone, SlSocialGithub, SlSocialLinkedin } from "react-icons/sl"

export const Contact = () => {
    return (
        <div id="contact" className="flex flex-col py-40 items-center bg-black text-white">
            <div className="grid grid-cols-3 font-mono w-full max-w-[958px] justify-center space-x-4 mx-20">
                <div className="col-span-1 ">
                    <div className="flex items-center text-5xl font-mono">
                        <div>Contact</div>
                        <div className="flex flex-grow justify-center"><FaLongArrowAltRight className="inline text-4xl ml-2" /></div>
                    </div>

                </div>
                <div className="col-span-2 text-2xl items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <SlEnvolope />
                            Email
                        </div>
                        <div className="">
                            <a className="group transition duration-300" href="mailto: andmatyas@gmail.com">
                                andmatyas@gmail.com
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-100"></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <SlPhone />
                            Phone
                        </div>
                        <div className="">
                            <a className="group transition duration-300" href="tel:+45 49 90 3800">
                                (DK) +45 49 90 3800
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-100"></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="">

                        </div>
                        <div className="">
                            <a className="group transition duration-300" href="tel:+45 49 90 3800">
                                (H) +36 20 923 7756
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-100"></span>
                            </a>
                            
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <SlSocialLinkedin />
                            LinkedIn:
                        </div>
                        <div className="">
                            <a className="group transition duration-300" href="https://www.linkedin.com/in/matyas-andras">
                                matyas-andras
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-100"></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <SlSocialGithub />
                            GitHub:
                        </div>
                        <div className="">
                            <a className="group transition duration-300" href="https://github.com/matyiandras">
                                matyiandras
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-100"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}