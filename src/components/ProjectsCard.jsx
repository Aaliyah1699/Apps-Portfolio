import { FaGithub } from 'react-icons/fa';
import { TbWorldCode } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
    return (
        <article className='bg-slate-50 rounded-lg shadow-md hover:shadow-2xl duration-300'>
            <img
                src={img}
                alt={title}
                className='w-full object-cover rounded-t-lg h-56'
            />
            <div className='capitalize p-6'>
                <h2 className='text-xl tracking-wide text-slate-950 font-bold border-b border-slate-300'>
                    {title}
                </h2>
                <p className='mt-2 text-slate-800 leading-loose'>{text}</p>

                <div className='mt-3 flex gap-x-4'>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        <TbWorldCode className='h-7 w-7 text-rose-600 hover:text-rose-950 duration-300 ' />
                    </a>
                    <a href={github} target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='h-7 w-7 text-rose-600 duration-300 hover:text-rose-950 pt-1' />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectsCard;
