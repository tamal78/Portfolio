import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  techno,
  sparks,
  girlscript,
  hackto
} from '../assets';

// Navbar Links
export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  },
  {
    id: 'resume',
    title: 'Resume',
    link: 'https://www.linkedin.com/in/tamal78/' // change to google drive resume link
  }
];

export const about = {
  description:
    "I'm a skilled fullstack developer with experience in JavaScipt and TypeScript, and expertise in frameworks like React, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients and companies to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"
};
// Services
const services = [
  {
    title: 'Full Stack Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Frontend Developer',
    icon: creator
  },
  {
    title: 'Backend Developer',
    icon: backend
  }
];

// Technologies
const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'nextjs',
    icon: nextjs
  }
];

// Experiences
const experiences = [
  {
    title: 'BTECH Computer Science',
    company_name: 'Techno International Newtown',
    icon: techno,
    iconBg: '#383E56',
    date: 'August 2021 - June 2025',
    points: [
      'Active participation in numerous college hackathons, demonstrating practical problem-solving skills and a passion for software development.',
      'Organized college hackathons, showcasing leadership and project management abilities.',
      'Played a significant role in the college GDSC by organising seminars and mentoring juniors and providing assistance.'
    ]
  },
  {
    title: 'Mobile Developer Intern',
    company_name: 'The Sparks Foundation',
    icon: sparks,
    iconBg: '#383E56',
    date: 'March 2023 - April 2025',
    points: [
      'Contributed to mobile app development and maintenance at The Sparks Foundation.',
      'Collaborated with diverse teams to deliver high-quality features.',
      'Implemented responsive design for seamless user experiences.',
      'Engaged in code reviews, offering constructive feedback for improvement.'
    ]
  },
  {
    title: 'Open Source Contributor',
    company_name: 'GirlScript Summer of Code',
    icon: girlscript,
    iconBg: '#383E56',
    date: 'March 2022 - May 2022',
    points: [
      'Actively participated in GirlScript Summer of Code as an open-source contributor.',
      'Contributed to numerous open-source projects, spanning both frontend and backend development.',
      'Gained valuable experience and knowledge through these contributions, enhancing skills in open-source collaboration and project development.'
    ]
  }
];

// Testimonials
const testimonials = [
  {
    testimonial:
      'Pleasure working with Tamal,he is an outstanding problem solver and skilled engineer',
    name: 'Prateek Goel',
    designation: 'SWE',
    company: 'Tellius',
    image: '../../testimonials_images/prateek.jpg'
  },
  {
    testimonial:
      'Tamal helped immensely to ship our first product,his dev game is really up to the mark',
    name: 'Atharva',
    designation: 'SDE Intern',
    company: 'Afour Technologies',
    image: '../../testimonials_images/atharva.jpg'
  },
  {
    testimonial:
      'Great to work with Tamal,someone who truly knows their craft and excels at problem solving.',
    name: 'Soutik Dey',
    designation: 'Competitve Programmer',
    company: null,
    image: '../../testimonials_images/soutik.jpg'
  }
];

// Projects
const projects = [
  {
    name: 'Ecommerce Shop',
    description:
      'E-commerce platform with product listings, sorting, secure payments, and admin panel. Built with React, Redux, MongoDB, Node, Express, and Stripe for seamless functionality and user authentication',
    tags: [
      {
        name: 'mern',
        color: 'blue-text-gradient'
      },
      {
        name: 'redux',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'stripe',
        color: 'green-text-gradient'
      }
    ],
    image: project1,
    source_code_link: 'https://github.com/tamal78/ecommerce-app',
    live_site_link: 'https://ecommerce-api-azure.vercel.app/'
  },
  {
    name: 'Sumz',
    description:
      'AI-powered article summarization tool using OpenAI GPT and Rapid API. Easily condense long content into concise summaries with React, Redux, Tailwind CSS, and a seamless user experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'redux',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'Rapid Api',
        color: 'green-text-gradient'
      }
    ],
    image: project2,
    source_code_link: 'https://github.com/tamal78/Sumz',
    live_site_link: 'https://sumz-ai-gpt.vercel.app/'
  },
  {
    name: 'Krypt',
    description:
      'A blockchain app with React, Solidity smart contracts, and Metamask integration. Experience seamless Ethereum transfers and real-time transaction tracking with captivating GIF visuals.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      },
      {
        name: 'Solidity',
        color: 'green-text-gradient'
      }
    ],
    image: project3,
    source_code_link: 'https://github.com/tamal78/Krypt',
    live_site_link: 'https://kryptcorp.vercel.app/'
  },
  {
    name: 'CarHub',
    description:
      'A sleek web app built with Next.js, React, TypeScript, and Tailwind CSS. Discover cars with Rapid API details and Imagine Studio images. Explore, search, and filter car cards effortlessly.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'rapid api',
        color: 'green-text-gradient'
      }
    ],
    image: project4,
    source_code_link: 'https://github.com/tamal78/CarHub',
    live_site_link: 'https://carhub-mavue.vercel.app/'
  },
  {
    name: 'FilmPire',
    description:
      'A Netflix-inspired platform with React, Redux Toolkit, and Material UI. Features user auth, light/dark modes, API via Axios/Redux, actor/movie details, watchlist, favorites, and search.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'redux',
        color: 'blue-text-gradient'
      },
      {
        name: 'material-ui',
        color: 'pink-text-gradient'
      }
    ],
    image: project5,
    source_code_link: 'https://github.com/tamal78/FilmPire',
    live_site_link: 'https://filmpire-mavue.vercel.app/'
  },
  {
    name: 'JobSift',
    description:
      'JobSift: The mobile job board app made with React Native and Expo. Discover, apply, and own your career journey with TMDB API-powered ease.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient'
      },
      {
        name: 'rapid api',
        color: 'green-text-gradient'
      },
      {
        name: 'expo',
        color: 'green-text-gradient'
      }
    ],
    image: project6,
    source_code_link: 'https://github.com/tamal78/JobSift',
    live_site_link:
      'https://expo.dev/@tamal78/jobsift?serviceType=classic&distribution=expo-go'
  }
];

export { services, technologies, experiences, testimonials, projects };
