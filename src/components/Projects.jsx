import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
    return (
        <section
            className='py-5 align-element font-jura text-slate-50 '
            id='projects'
        >
            <SectionTitle text='My Projects' />
            <p className='text-slate-50 mt-1'>
                Explore my collection of projects, with some already deployed
                and ready for real-world use. While others are primed for
                deployment or integration, whether as standalone applications or to be
                seamlessly connected to frontend or backend components.
            </p>
            <div className='py-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {projects.map((project) => {
                    return <ProjectsCard key={project.id} {...project} />;
                })}
            </div>
        </section>
    );
};

export default Projects;
