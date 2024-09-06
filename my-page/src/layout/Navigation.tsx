import { useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export const Navigation = () => {

    const { hash } = useLocation()

    const scrollWithOffset = (el: any, offset: number) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = offset; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <div className="flex w-full justify-center py-8 pl-4">
            <div className="flex w-full flex-col space-y-4 text-4xl text-gray-800">
                <div className="w-1/2 rounded-xl p-2 transition duration-300 ease-in-out hover:translate-x-6 font-mono hover:font-semibold hover:bg-black hover:text-amber-100">
                    <HashLink to="#" smooth># Home</HashLink>
                </div>
                <div className="w-1/2 rounded-xl p-2 transition duration-300 ease-in-out hover:translate-x-6 font-mono hover:font-semibold hover:bg-black hover:text-amber-100">
                    <HashLink to="#about" smooth scroll={el => scrollWithOffset(el, -100)}># About</HashLink>
                </div>
                <div className="w-1/2 rounded-xl p-2 transition duration-300 ease-in-out hover:translate-x-6 font-mono hover:font-semibold hover:bg-black hover:text-amber-100">
                    <HashLink to="#projects" smooth># Experience</HashLink>
                </div>
                <div className="w-1/2 rounded-xl p-2 transition duration-300 ease-in-out hover:translate-x-6 font-mono hover:font-semibold hover:bg-black hover:text-amber-100">
                    <HashLink to="#contact" smooth># Contact</HashLink>
                </div>
            </div>
        </div>
    )
}