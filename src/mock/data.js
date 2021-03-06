import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Daniel Laserna | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my professional software portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Daniel',
  subtitle: 'And the web is my playground.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne: "I'm a frontend developer, and I love what I do!",
  paragraphTwo:
    "As a builder at heart, I enjoy the process of learning and finding ways to transform ideas into realized products. Having completed Codecademy's Web Developer Career Path, as well as Udacity’s React Nanodegree Program, I’ve trained myself to build responsive, scalable, and performant software solutions. Consequently, I hope to use those same skills to bring to life your own innovative, digital ideas.",
  paragraphThree:
    'Current Stack:  Javascript, ReactJS, NextJS, GatsbyJS, NodeJS, Firebase, Material UI, styled-components, HTML, CSS, Git, and VSCode',
  resume: 'https://my.indeed.com/p/daniell-gb342sz',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'das-hero.png',
    title: 'DAS Development',
    info:
      'A freelance website that showcases the use of React, Next.js and Material UI.  Features a responsive design, active menu selection, SEO integration, form and form validation, Google Cloud functions, Nodemailer, progress indicator (i.e. loading spinner), Snackbar components (provides brief feedback messages of action performed - e.g. "Message sent"), and cross-browser support.',
    info2: 'Stack:  Javascript, ReactJS, Material UI, HTML, CSS, NextJS, Firebase',
    url: 'https://das-next-js.vercel.app/',
    repo: 'https://github.com/onTheDL/das-nextJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'das-pm.png',
    title: 'DAS Project Manager',
    info:
      "DAS Development's internal client-side app used to keep track of its freelance projects. Features include the ability to add a project, delete one or multiple projects, search by any registered project detail, sort projects either alphabetically or numerically based on the selected table heading, filter according to the price, and determine the number of rows displayed on the table.",
    info2: 'Stack: Javascript, ReactJS, NextJS, Material UI, HTML, CSS',
    url: 'https://das-pm.vercel.app/',
    repo: 'https://github.com/onTheDL/das-pm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'github-battle.png',
    title: 'GitHub Battle',
    info:
      'A client-side React app that shows the top GitHub profiles ranked according to various computer languages. Users can also battle two GitHub users to see which has the more popular profile.',
    info2: 'Stack: ReactJS, Javascript, HTML, CSS',
    url: 'https://frosty-williams-207395.netlify.app/',
    repo: 'https://github.com/onTheDL/github-battle-v1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dc-resort.png',
    title: "Dreamer's Cove Resort",
    info: 'A luxury resort website showcasing the use of styled-components',
    info2: 'Stack: ReactJS, styled-components, HTML, CSS',
    url: 'https://inspiring-albattani-986be0.netlify.app/',
    repo: 'https://github.com/onTheDL/dc-resort', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'maze.png',
    title: 'Mazing Around',
    info: 'A simple maze game.',
    info2:
      'Built with MatterJS for the 2D physics, and Canvas, vanilla JS, and HTML for the randomized layout',
    url: 'https://hardcore-darwin-6563fe.netlify.app/',
    repo: 'https://github.com/onTheDL/a-zing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to work with me? That's great!",
  btn: "Let's Talk",
  email: 'daniel.laserna@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-laserna-6396831b9/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/onTheDL',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
