//  icons
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import AcatlanIcon from './assets/img/brands/acatlan.png';
import DevF from './assets/img/brands/devf.png';

// projects images
// import Project1 from './assets/img/projects/p1.webp';
// import Project2 from './assets/img/projects/p2.webp';
// import Project3 from './assets/img/projects/p3.webp';
// import Project4 from './assets/img/projects/p4.webp';
// import Project5 from './assets/img/projects/p5.webp';
// import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nodejs.png';
import SkillImg6 from './assets/img/skills/mongo.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

//blog test images 
import testImg1 from './assets/img/jscript.png';

const timeElapsed = Date.now()
const today = new Date(timeElapsed)

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  // {
  //   name: 'portfolio',
  //   href: 'portfolio',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/enrique-maya-garcia-8407a4216/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/_kikemaya/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/kikemaya',
  },
];

// companies
export const brands = [
  {
    img: AcatlanIcon,
    href: '',
  },
  {
    img: DevF,
    href: '',
  },
];

// projects
// export const projectsData = [
//   {
//     id: '1',
//     image: Project1,
//     name: 'To do',
//     // category: 'UI/UX design',
//   },
//   {
//     id: '2',
//     image: Project2,
//     name: 'Weather Api',
//     // category: 'web development',
//   },
//   {
//     id: '3',
//     image: Project3,
//     name: 'Contact List',
//     // category: 'UI/UX design',
//   },
//   {
//     id: '4',
//     image: Project4,
//     name: 'Quiz',
//     // category: 'branding',
//   },
//   {
//     id: '5',
//     image: Project5,
//     name: 'Rock Paper Scissors',
//     // category: 'web development',
//   },
//   {
//     id: '6',
//     image: Project6,
//     name: 'Memory Game',
//     // category: 'web development',
//   },
// ];

// skills
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me with the form or by social media, please.',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'México City, México',
    description: 'Working from home(:',
  },
];


// navigation
export const blog_notes = [
  {
    id: 1,
    title: 'Emmet',
    date: today.toDateString(),
    src: testImg1,
    text: 'Hola, soy un articulo #1'
  },
  {
    id: 2,
    title: 'Markdown',
    date: today.toDateString(),
    src: testImg1,
    text: 'Hola, soy un articulo #2'
  },
  {
    id: 3,
    title: 'Reactividad en JavaScript',
    date: today.toDateString(),
    src: testImg1,
    text: 'Hola, soy un articulo #3'
  },
];


