import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
    return (
        <section
            className='py-20 align-element font-jura text-slate-50'
            id='projects'
        >
            <SectionTitle text='My Projects' />
            <div className='py-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {projects.map((project) => {
                    return <ProjectsCard key={project.id} {...project} />;
                })}
            </div>
        </section>
    );
};

export default Projects;
