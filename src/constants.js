// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import company1_logo from './assets/company_logo/company1_logo.png';

// Education Section Logo's
import jiit_logo from './assets/education_logo/jiit-logo.png';
import school_logo from './assets/education_logo/school-logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    //  { name: 'SASS', logo: sassLogo },
    //  { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    //  { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
    //  { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    //  { name: 'GSAP', logo: gsapLogo },
    //  { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    //  { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    //  { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    //  { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    //  { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    //  { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
    //  { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    //  { name: 'Compass', logo: mcLogo },
    //  { name: 'Vercel', logo: vercelLogo },
     // { name: 'Netlify', logo: netlifyLogo },
    //  { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: company1_logo,
      role: "SWE Intern",
      company: "STMicroelectronics",
      date: "June 2024 - May 2025",
      desc: "Built internal enterprise dashboards and workflow automation tools using MongoDB, Express.js, React.js, and Node.js. Designed RESTful APIs in Node.js with Express, optimized MongoDB queries using aggregation pipelines and indexing. Developed reusable, high-performance React components with Redux state management and lazy loading, ensuring smooth user experience across modules. Developed simulation models to predict output waveforms using linear and polynomial regression techniques. Used Python libraries (NumPy, pandas, scikit-learn, Matplotlib) for data preprocessing, model training, and visualization. Built regression pipelines for time-series prediction, improving waveform simulation accuracy for Edge AI architectures.",
      skills: [
        "Python",
        "MongoDB",
        "Express.js",
        "Node.js",
        "React.js",
        "NumPy",
        "Pandas",
        "Redux.js",
        "Scikit",
        "Regression",
        "Matplotlib",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: jiit_logo,
      school: "Jaypee Institute of Information Technology, Noida",
      date: "August 2021 - June 2025",
      grade: "7.8 CGPA",
      desc: [
      "Programming (C++)",
      "Data Structure and Algorithms",
      "Database management system",
      "Object Oriented Programming",
      "Operating system",
      "Computer Networks",
    ],
      degree: "Bachelor of Technology- ECE",
    },
    {
      id: 1,
      img: school_logo,
      school: "Sir Padampat Singhania School, Kota",
      date: "March 2020 - March 2021",
      grade: "85.67%",
      desc: [
      "Physics",
      "Chemistry",
      "Mathematics",
    ],
      degree: "CBSE, Class 12th",
    },
    {
      id: 2,
      img: school_logo,
      school: "Sir Padampat Singhania School, Kota",
      date: "March 2018 - March 2019",
      grade: "92.6%",
      desc: [
      "Science",
      "Social Science",
      "Mathematics",
       ],
      degree: "CBSE, Class 10th",
    },
  ];  
  
  export const projects = [
    {
      id: 0,
      title: "Blogging Buzz",
      description:
        "Created a Node.js Responsive web application utilizing Express as a framework to handle HTTP requests. It integrates MongoDB database using Mongoose for data modelling and JWT tokens that manage user authentication and authorization, ensuring secure login and registration. • The frontend is a React application with Redux for state management and asynchronous operations. It employs async-thunks to handle asynchronous operations and manages state changes based on API responses. • Blogging Buzz allows users to create, share, interact with content, and build a community around posts and profiles.",
      image: githubdetLogo,
      tags: ["Redux", "Tailwind CSS", "React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/ojas1888/Blogging-Buzz",
      webapp: "https://github.com/ojas1888/Blogging-Buzz",
    },
    {
      id: 1,
      title: "Blood Donation",
      description:
        "Developed a Responsive website using Node.js and Express.js framework with JWT tokens for secure, authenticated, and authorized login and signup. • Integrated MongoDB database with Mongoose for structured data storage and management. • The frontend is built with React.js, enabling registration for users, organizations, and hospitals interested in blooddonation, while individuals in need can easily locate nearby donors or hospitals to facilitate urgent blood transfusions.",
      image: csprepLogo,
      tags: ["Tailwind CSS", "React.js", "MongoDB", "Node.js"],
      github: "https://github.com/ojas1888/Blood-Donation",
      webapp: "https://github.com/ojas1888/Blood-Donation",
    },
    {
      id: 2,
      title: "ChatBot",
      description:
        "Created an intelligent chatbot by integrating Python libraries such as PyPDF2, SpaCy, and NumPy along with OpenAI services. • Utilized language models for question answering, implemented natural language processing techniques, and applied similarity search and text manipulation algorithms.",
      image: movierecLogo,
      tags: ["Python"],
      github: "https://github.com/ojas1888/Chatbot",
      webapp: "https://github.com/ojas1888/Chatbot",
    },
    {
      id: 3,
      title: "Weather Application",
      description:
        "Built a React.js-based weather application that displays real-time weather conditions based on the user’s current location or city search. • Integrated geolocation API to retrieve the user’s position and fetch up-to-date weather data.",
      image: npmLogo,
      tags: ["React.js", "OpenWeather API"],
      github: "https://github.com/ojas1888/Weather-Application",
      webapp: "https://github.com/ojas1888/Weather-Application",
    },
  ];  