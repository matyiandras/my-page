import { useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export const Navigation = () => {

    const { hash } = useLocation()

    return (
        <div className="flex w-full justify-center py-8 pl-4">
            <div className="flex w-full flex-col space-y-4 text-4xl text-gray-800">
                <div className="w-1/2 rounded-xl p-2 transition duration-200 ease-in-out hover:translate-x-6 font-mono hover:font-semibold hover:bg-black hover:text-amber-100">
                    <HashLink to="#home" smooth># Home</HashLink>
                </div>
                <div className="w-1/2 rounded-xl p-2 transition duration-200 ease-in-out hover:translate-x-6 font-mono hover:font-semibold hover:bg-black hover:text-amber-100">
                    <HashLink to="#about" smooth># About</HashLink>
                </div>
                <div className="w-1/2 rounded-xl p-2 transition duration-200 ease-in-out hover:translate-x-6 font-mono hover:font-semibold hover:bg-black hover:text-amber-100">
                    <HashLink to="#projects" smooth># Projects</HashLink>
                </div>
                <div className="w-1/2 rounded-xl p-2 transition duration-200 ease-in-out hover:translate-x-6 font-mono hover:font-semibold hover:bg-black hover:text-amber-100">
                    <HashLink to="#contact" smooth># Contact</HashLink>
                </div>
            </div>
        </div>
    )
}