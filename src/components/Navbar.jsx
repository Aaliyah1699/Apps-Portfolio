import { links } from '../data';

// Add Fonts & colors

const Navbar = () => {
    return (
        <nav className='bg-rose-100'>
            <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 leading-loose'>
                <h2 className='text-4xl font-extrabold tracking-wide font-lobster'>
                    Dev<span className='text-rose-600'>Hub</span>
                </h2>
                <div className='flex gap-x-3 leading-loose'>
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <a
                                key={id}
                                href={href}
                                className='capitalize text-lg tracking-widest hover:text-rose-600 duration-300'
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
