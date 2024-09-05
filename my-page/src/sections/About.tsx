
import { FaLongArrowAltRight } from "react-icons/fa"

export const About = () => {
    return (
        <div id="about" className="flex flex-col py-40 items-center justify-center bg-black border-2 border-black">
            <div className="grid grid-cols-3  max-w-[958px] justify-center space-x-4 mx-20">
                <div className="col-span-1 ">
                    <div className="flex items-center text-5xl font-mono text-amber-100">
                        <div>About</div>
                        <div className="flex flex-grow justify-center"><FaLongArrowAltRight className="inline text-4xl ml-2" /></div>
                    </div>

                </div>
                <div className="col-span-2 text-2xl text-justify text-amber-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec consequat nulla. Curabitur a suscipit risus, in tincidunt orci. Aliquam eleifend dui nec nunc luctus, eget aliquam ipsum efficitur. Mauris semper quam in urna ultricies aliquet. Morbi sagittis auctor metus vitae consectetur. Curabitur ac diam non erat viverra luctus. Vivamus tincidunt eget lacus sed tristique. Morbi euismod, odio nec consequat fringilla, erat neque pretium sem, non rutrum enim nulla sed velit. Aenean malesuada lacus a neque egestas, ut viverra lacus imperdiet.</div>
            </div>
        </div>
    )
}