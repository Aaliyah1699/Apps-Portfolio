import hero from '/src/Hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='bg-rose-100 py-8'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-6xl font-bold tracking-wide font-bruno text-slate-950'>
                        Aaliyah M.
                    </h1>
                    <p className='mt-4 text-3xl text-slate-800 capitalize tracking-wide font-jura'>
                        Software Engineer
                    </p>
                    <p className='mt-2 text-lg text-slate-800 capitalize tracking-wide font-jura'>
                        Creating pathways to a world of boundless opportunities.
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        {/* Add links */}
                        <a
                            href='https://github.com/Aaliyah1699'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithubSquare className='h-8 w-8 text-rose-600 hover:text-rose-950 duration-300 ' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/aaliyahmontgomery'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaLinkedin className='h-8 w-8 text-rose-600 hover:text-rose-950 duration-300 ' />
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
