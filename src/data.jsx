/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';
import { FaNodeJs, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

export const links = [
    { id: nanoid(), href: '#home', text: 'home' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'Node.JS',
        icon: <FaNodeJs className='h-16 w-16 text-rose-500' />,
        text: 'Skillfully harness Node.js and Express to orchestrate powerful backend solutions, enabling lightning-fast API development and robust server-side logic.',
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <FaJs className='h-16 w-16 text-rose-500' />,
        text: 'Expertise in JavaScript, building interactive and dynamic web applications with seamless user interactions and functionality.',
    },
    {
        id: nanoid(),
        title: 'Python',
        icon: <FaPython className='h-16 w-16 text-rose-500' />,
        text: 'Fluent in Python, enabling versatile scripting and application development with a keen focus on readability and efficiency.',
    },
    {
        id: nanoid(),
        title: 'MongoDB',
        icon: <SiMongodb className='h-16 w-16 text-rose-500' />,
        text: 'Skilled in MongoDB and expertly harnessing Mongoose to design data storage solutions that ensure data integrity and seamless integration for your applications.',
    },
    {
        id: nanoid(),
        title: 'Express',
        icon: <SiExpress className='h-16 w-16 text-rose-500' />,
        text: 'Effectively utilize Express.js to sculpt the foundation of robust backend systems, ensuring efficient API development and delivering reliable server-side solutions.',
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-rose-500' />,
        text: "Advanced proficiency in React's component-based architecture, creating efficient and interactive front-end applications that redefine user experiences.",
    },
];

export const projects = [
    {
        id: nanoid(),
        img: '../src/assets/moonlit.png',
        url: 'https://moonlit-reverie-111.netlify.app/',
        github: 'https://github.com/Aaliyah1699/Moonlit-Reverie',
        title: 'Moonlit Reverie',
        text: 'Shop comfortably with Moonlit Reverie, a React web app utilizing Strapi API as its headless CMS. Browse products, register an account, and experience seamless checkout. Intelligent filtering and personalization ensure a frictionless shopping experience.',
    },
    {
        id: nanoid(),
        img: '../src/assets/voyage.png',
        url: 'https://visual-voyage.netlify.app/',
        github: 'https://github.com/Aaliyah1699/Visual-Voyage',
        title: 'Visual Voyage',
        text: 'Explore captivating images with Visual Voyage, the image search app offering immersive themes, seamless searching, and a stunning image showcase utilizing the Unsplash API.',
    },
    {
        id: nanoid(),
        img: '../src/assets/shop.png',
        url: 'https://e-commerce-api-q5wi.onrender.com/',
        github: 'https://github.com/Aaliyah1699/EasyShop-API',
        title: 'Easy Shop API',
        text: 'Unlock the potential of a robust and secure backend e-commerce API. Node.js, ExpressJS, and MongoDB drive it and seamlessly manage user accounts, orders, and products while providing a complete e-commerce solution.',
    },
];
