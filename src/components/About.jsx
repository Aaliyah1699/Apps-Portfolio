import AboutImg from '../assets/About.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img
                    src={AboutImg}
                    alt='undraw image'
                    className='w-full h-64'
                />
                <article>
                    <SectionTitle text='A little bit about me...' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias, autem. Harum fuga, modi ullam accusantium
                        nemo officiis aliquam molestiae odit minus
                        necessitatibus delectus veritatis cupiditate doloribus
                        dolores alias ipsam unde.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;
