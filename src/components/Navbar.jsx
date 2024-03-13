import { links } from '../data';

const Navbar = () => {
    return (
        <nav className='bg-rose-100'>
            <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 leading-loose '>
                <h2 className='text-3xl font-extrabold tracking-wide font-bruno text-slate-950'>
                    Dev<span className='text-rose-600'>Domain</span>
                </h2>
                <div className='flex gap-x-3 leading-loose border-b border-slate-700 '>
                    {links.map((link) => {
                        const { id, href, text, to } = link;
                        return (
                            <a
                                key={id}
                                href={href}
                                to={to}
                                className='capitalize text-lg tracking-widest hover:text-rose-600 duration-300 font-jura hover:shadow-lg'
                            >
                                {text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
