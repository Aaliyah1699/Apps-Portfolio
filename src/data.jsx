/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';
import { FaNodeJs, FaJs, FaReact, FaPython } from 'react-icons/fa';

export const links = [
    { id: nanoid(), href: '#home', text: 'home' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    { id: nanoid(), href: '#projects', text: 'projects' },
];
// change color
export const skills = [
    {
        id: nanoid(),
        title: 'NodeJS',
        icon: <FaNodeJs className='h-16 w-16 text-rose-500' />,
        text: 'nodejs, MongoDB , express, mongoose',
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <FaJs className='h-16 w-16 text-rose-500' />,
        text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-rose-500' />,
        text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
    },
];

export const projects = [
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://moonlit-reverie-111.netlify.app/',
        github: 'https://github.com/Aaliyah1699/Moonlit-Reverie',
        title: 'Moonlit Reverie',
        text: 'Shop seamlessly with Moonlit Reverie, a React web app powered by a Strapi API Headless CMS. Browse products, register, and enjoy a smooth checkout. Smart filtering and personalization make shopping a breeze.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://visual-voyage.netlify.app/',
        github: 'https://github.com/Aaliyah1699/Visual-Voyage',
        title: 'Visual Voyage',
        text: 'Explore captivating images with the Visual Voyage Image Search App. It offers immersive themes, seamless searching, and a stunning image showcase using React and the Unsplash API.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://e-commerce-api-q5wi.onrender.com/',
        github: 'https://github.com/Aaliyah1699/EasyShop-API',
        title: 'Easy Shop API',
        text: 'Unlock the potential of a robust and secure backend e-commerce API, driven by Node.js, Express, and MongoDB. Seamlessly manage user accounts, orders, and products with ease, while providing a complete e-commerce solution.',
    },
];
