import Projects from '../components/Projects';
import { RxDoubleArrowLeft } from 'react-icons/rx';

const ProjectsPage = () => {
    return (
        <>
            <div className='mt-9 mx-8 text-xl flex row-span-1'>
                <a href='/' className='font-jura text-slate-50 '>
                    <RxDoubleArrowLeft className='h-8 w-8 text-rose-600' />
                </a>
                <a href='/'>
                    <h2 className='text-3xl font-extrabold tracking-wide ml-3 font-bruno text-slate-50'>
                        Aaliyah's<span className='text-rose-600'>Work</span>
                    </h2>
                </a>
            </div>

            <Projects />
        </>
    );
};

export default ProjectsPage;
