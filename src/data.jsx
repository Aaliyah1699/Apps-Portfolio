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
        text: 'Skillfully harnessing Node.js and Express to orchestrate powerful backend solutions that enable lightning-fast API development and robust server-side logic.',
    },
    {
        id: nanoid(),
        title: 'MongoDB',
        icon: <SiMongodb className='h-16 w-16 text-rose-500' />,
        text: 'Skilled in MongoDB and Mongoose, architecting data storage solutions that ensure data integrity and smooth integration for your applications.',
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <FaJs className='h-16 w-16 text-rose-500' />,
        text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    },
    {
        id: nanoid(),
        title: 'Express',
        icon: <SiExpress className='h-16 w-16 text-rose-500' />,
        text: 'Effectively utilizing Express.js to sculpt the foundation of robust backend systems, ensuring efficient API development, and delivering reliable server-side solutions.',
    },
    {
        id: nanoid(),
        title: 'Python',
        icon: <FaPython className='h-16 w-16 text-rose-500' />,
        text: 'Fluency in Python, enabling versatile scripting and application development, with a keen focus on readability and efficiency.',
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
        text: 'Shop seamlessly with Moonlit Reverie, a React web app powered by a Strapi API Headless CMS. Browse products, register, and enjoy a smooth checkout. Smart filtering and personalization make shopping a breeze.',
    },
    {
        id: nanoid(),
        img: '../src/assets/voyage.png',
        url: 'https://visual-voyage.netlify.app/',
        github: 'https://github.com/Aaliyah1699/Visual-Voyage',
        title: 'Visual Voyage',
        text: 'Explore captivating images with the Visual Voyage Image Search App. It offers immersive themes, seamless searching, and a stunning image showcase using React and the Unsplash API.',
    },
    {
        id: nanoid(),
        img: '../src/assets/shop.png',
        url: 'https://e-commerce-api-q5wi.onrender.com/',
        github: 'https://github.com/Aaliyah1699/EasyShop-API',
        title: 'Easy Shop API',
        text: 'Unlock the potential of a robust and secure backend e-commerce API, driven by Node.js, Express, and MongoDB. Seamlessly manage user accounts, orders, and products with ease, while providing a complete e-commerce solution.',
    },
];
