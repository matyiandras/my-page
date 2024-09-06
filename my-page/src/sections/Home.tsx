import photo from '../assets/images/me-removebg-preview.png'
import { Navbar } from '../layout/Navbar'
import { Navigation } from '../layout/Navigation'
import { About } from './About'
import { Contact } from './Contact'
import { Projects } from './Projects'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div id='home' className="flex py-4 w-full justify-center  ">
                <div className='relative'>
                    <div className='flex justify-center px-4 font-serif text-9xl text-black'>
                        Hey, I'm Mátyás<br />András
                    </div>
                    <div className='absolute z-10 bg-amber-100 laptop:w-1/2 w-1/3 rounded-3xl border-4 border-black top-4 laptop:top-40 right-4 invisible tablet:visible overflow-hidden'>
                        <img src={photo} alt="me" className="" />
                    </div>
                    <Navigation />
                    
                </div>
                
            </div>
            <About />
            <Projects />
            <Contact />
        </div>

    )
}