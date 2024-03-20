/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';
import { FaPython, FaNode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
import { PiFileSql } from 'react-icons/pi';
import { GrMysql } from "react-icons/gr";
import {
    TbBrandJavascript,
    TbBrandCSharp,
    TbBrandTypescript,
} from 'react-icons/tb';

export const links = [
    { id: nanoid(), href: '/', text: 'home' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    {
        id: nanoid(),
        href: '#projects',
        text: 'projects',
    },
];

export const skills = [
    {
        id: nanoid(),
        title: 'Python',
        icon: <FaPython className='h-16 w-16 text-rose-500' />,
        text: 'Fluent in Python, enabling versatile scripting and application development with a keen focus on readability and efficiency.',
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <TbBrandJavascript className='h-16 w-16 text-rose-500' />,
        text: 'Expertise in JavaScript, building interactive and dynamic web applications with seamless user interactions and functionality.',
    },
    {
        id: nanoid(),
        title: 'C#',
        icon: <TbBrandCSharp className='h-16 w-16 text-rose-500' />,
        text: 'Proficient in C#, engineering robust and scalable backend solutions with a meticulous approach to precision and efficiency.',
    },
    {
        id: nanoid(),
        title: 'Node.JS',
        icon: <FaNode className='h-16 w-16 text-rose-500' />,
        text: 'Skillfully harness Node.js and Express to orchestrate powerful backend solutions, enabling lightning-fast API development and robust server-side logic.',
    },

    {
        id: nanoid(),
        title: 'SQL',
        icon: <PiFileSql className='h-16 w-16 text-rose-500' />,
        text: 'Manage and manipulate databases, guaranteeing peak performance and reliability for my applications.',
    },
    {
        id: nanoid(),
        title: 'SQLite',
        icon: <DiSqllite className='h-16 w-16 text-rose-500' />,
        text: ' Implementing lightweight and efficient database solutions, ensuring simplicity without compromising performance in my projects.',
    },
     {
        id: nanoid(),
        title: 'MySQL',
        icon: <GrMysql className='h-16 w-16 text-rose-500' />,
        text: "Design and optimize databases to ensure efficient data management and reliability in my projects.",
    },
    {
        id: nanoid(),
        title: 'MongoDB',
        icon: <SiMongodb className='h-16 w-16 text-rose-500' />,
        text: 'Skilled in MongoDB and adeptly utilizing Mongoose to design data storage solutions that ensure data integrity and seamless integration for any application.',
    },
    {
        id: nanoid(),
        title: 'Typescript',
        icon: <TbBrandTypescript className='h-16 w-16 text-rose-500' />,
        text: 'Utilizing clean, safe, and maintainable code, enhancing the quality of web applications.',
    },
];

export const projects = [
    {
        id: nanoid(),
        img: '/curious.png',
        url: 'https://aaliyah-curiosities.onrender.com/',
        github: 'https://github.com/Aaliyah1699/Blog2',
        title: 'The Curiosities of Aaliyah',
        text: 'The Curiosities of Aaliyah satisfies my inquisitive nature through a feature-rich MERN stack blog covering diverse topics that pique my interest. It includes secure user authentication, full CRUD functionality, advanced search, image uploads, commenting, and likes to foster community engagement. The responsive React frontend, MongoDB database, Express server, and Node.js backend provide a smooth user experience. ',
    },
    {
        id: nanoid(),
        img: '/realty.png',
        url: 'https://realtyrise.onrender.com',
        github: 'https://github.com/Aaliyah1699/Real-Estate-App',
        title: 'RealtyRise',
        text: 'RealtyRise: Revolutionizing Real Estate Management. With advanced authentication, seamless user access via Firebase and Google OAuth, and intuitive CRUD operations, RealtyRise simplifies property management. Featuring user-friendly functionalities like image uploads and robust search capabilities, finding and managing properties has never been easier.',
    },
    {
        id: nanoid(),
        img: '/synthwave.png',
        url: 'https://synthwave-app.onrender.com/',
        github: 'https://github.com/Aaliyah1699/SynthWaveApp',
        title: 'SynthWave',
        text: 'SynthWave is a robust and secure E-commerce platform built with the MERN stack, featuring comprehensive admin capabilities for order management and user administration, integrated with PayPal API for seamless transactions, and empowering users with account creation, order placement, and review functionality.',
    },
    {
        id: nanoid(),
        img: '/clinic.png',
        url: 'https://github.com/Aaliyah1699/Py-CodeClinic',
        github: 'https://github.com/Aaliyah1699/Py-CodeClinic',
        title: 'CodeClinic AI',
        text: 'CodeClinic AI is a cutting-edge web application designed to revolutionize the coding experience. Powered by Python, Django, SQLite, and the OpenAI API, it offers a sophisticated chatbot interface tailored specifically for code-related queries. From fixing bugs to suggesting code snippets in multiple languages, CodeClinic AI is your go-to virtual coding assistant. With features like user authentication, code history storage, and easy code copying, it simplifies and enhances the coding journey for developers of all levels. Say goodbye to coding frustrations and hello to a smoother, more efficient coding experience with CodeClinic AI.',
    },
    {
        id: nanoid(),
        img: '/moonlit.png',
        url: 'https://moonlit-reverie-111.netlify.app/',
        github: 'https://github.com/Aaliyah1699/Moonlit-Reverie',
        title: 'Moonlit Reverie',
        text: 'Shop comfortably with Moonlit Reverie, a React web app utilizing Strapi API as its headless CMS. Browse products, register an account, and experience seamless checkout. Intelligent filtering and personalization ensure a frictionless shopping experience.',
    },
    {
        id: nanoid(),
        img: '/voyage.png',
        url: 'https://visual-voyage.netlify.app/',
        github: 'https://github.com/Aaliyah1699/Visual-Voyage',
        title: 'Visual Voyage',
        text: 'Explore captivating images with Visual Voyage, the image search app offering immersive themes, seamless searching, and a stunning image showcase utilizing the Unsplash API.',
    },
    {
        id: nanoid(),
        img: '/fairy.png',
        url: 'https://github.com/Aaliyah1699/Fairy-ChatBot-App',
        github: 'https://github.com/Aaliyah1699/Fairy-ChatBot-App',
        title: 'Fairy GodBot',
        text: 'Enter the realm of Fairy GodBot, a cutting-edge MERN full-stack application infused with TypeScript, where real-time interactions with an OpenAI AI chatbot await. Seamlessly secure, users can create accounts, engage in conversations, and even delete previous exchanges, while the AI stands ready to answer any query.',
    },
    {
        id: nanoid(),
        img: '/inkwell.png',
        url: 'https://github.com/Aaliyah1699/Blog-UI',
        github: 'https://github.com/Aaliyah1699/Blog-Api',
        title: 'The Inkwell Serenades',
        text: 'Immerse yourself in The Inkwell Serenades, a secure and dynamic full-stack blog powered by a C# backend and SQLite database. With comprehensive admin functionalities enabling blog post, category, and image upload management which is directly stored in the database, and an Angular frontend crafted with TypeScript, this platform offers a seamless and enriching blogging experience.',
    },
    {
        id: nanoid(),
        img: '/python-chatbot.png',
        url: 'https://github.com/Aaliyah1699/Py-chatbot',
        github: 'https://github.com/Aaliyah1699/Py-chatbot',
        title: 'PyChatBot',
        text: 'Step into the world of seamless communication with PyChatBot, a revolutionary Python application that harnesses the cutting-edge capabilities of the OpenAI API. PyChatBot delivers an immersive conversation experience, blurring the lines between human interaction and artificial intelligence, with its powerful natural language processing.',
    },
    {
        id: nanoid(),
        img: '/shop.png',
        url: 'https://e-commerce-api-q5wi.onrender.com/',
        github: 'https://github.com/Aaliyah1699/EasyShop-API',
        title: 'Easy Shop API',
        text: 'Unlock the potential of a robust and secure backend e-commerce API powered by Node.js, Express.js, and MongoDB. Seamlessly manage user accounts, orders, and products, offering a complete e-commerce solution.',
    },
];
