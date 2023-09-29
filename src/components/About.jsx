import AboutImg from '../assets/About.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20 font-jura' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img
                    src={AboutImg}
                    alt='undraw image'
                    className='w-full h-64'
                />
                <article>
                    <SectionTitle text='About Me' />
                    <p className='text-slate-900 mt-8 leading-loose'>
                        I'm Aaliyah Montgomery, a self-taught developer with 4
                        years of coding experience. I thrive on learning new
                        technologies and enjoy overcoming challenges. My
                        expertise spans JavaScript, Node.js, Express, MongoDB,
                        and Python. I aspire to innovate and shape the future of
                        technology.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;
