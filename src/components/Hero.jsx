import hero from '../assets/Hero.svg';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='bg-rose-100 py-8'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-7xl font-bold tracking-wide font-lobster'>
                        I'm Aaliyah
                    </h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        Software Engineer
                    </p>
                    <p className='mt-2 text-lg text-slate-800 capitalize tracking-wide font-jura'>
                        Creating pathways to a world of boundless opportunities.
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        {/* Add links */}
                        <a href='https://github.com/Aaliyah1699'>
                            <FaGithub className='h-8 w-8 text-rose-950 hover:text-rose-600 duration-300 ' />
                        </a>
                        <a href='https://www.linkedin.com/in/aaliyahmontgomery'>
                            <FaLinkedinIn className='h-8 w-8 text-rose-950 hover:text-rose-600 duration-300 ' />
                        </a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img
                        src={hero}
                        alt='undraw image'
                        className='h-80 lg:h-80'
                    />
                </article>
            </div>
        </div>
    );
};

export default Hero;
