import about from '/src/About.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20 font-jura' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={about} alt='undraw image' className='w-full h-64' />
                <article>
                    <SectionTitle text='About Me' />
                    <p className='text-slate-900 mt-8 leading-loose text-lg'>
                        I'm Aaliyah Montgomery, a self-taught developer with 4+
                        years of coding experience. My expertise spans Python,
                        JavaScript, C#, and MERN stack. I thrive on learning new
                        technologies and thoroughly enjoy overcoming challenges.
                        I aspire to grow, innovate, and shape the future of
                        technology.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;
