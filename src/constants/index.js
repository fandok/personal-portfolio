import { placeholder } from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
} from "react-icons/ai";

import { SiReact, SiAngular } from "react-icons/si";

import { FaRegImage } from "react-icons/fa";

export const resumeLink = "";
export const callToAction = "https://www.linkedin.com/in/<your-linkedin-id>/";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: FaRegImage,
    title: "Universitas Indonesia (UI)",
    degree: "Bachelor’s Degree",
    duration: "2014 - 2018",
    content1:
      "Learning about software engineering and also computer architecture",
    content2: "",
  },
  {
    id: "education-2",
    icon: FaRegImage,
    title: "Labschool Rawamangun",
    degree: "",
    duration: "2011 - 2014",
    content1:
      "Learning mathematics, Indonesian, French, physics, chemistry, biology, etc in class. Outside class, doing extracurriculer activity such as futsal, percussion, also joining the committee of Labs Project 2013.",
    content2: "",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: FaRegImage,
    event: "",
    position: "",
    content1: "",
    content2: "",
    content3: "",
    article: "",
    project: "",
    youtube: "",
    github: "",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "f-2",
        icon: SiAngular,
        name: "AngularJS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: FaRegImage,
        name: "Coaching",
      },
      {
        id: "t-2",
        icon: FaRegImage,
        name: "TypeScript",
      },
      {
        id: "t-3",
        icon: FaRegImage,
        name: "Next.js",
      },
      {
        id: "t-4",
        icon: FaRegImage,
        name: "Front-End Development",
      },
      {
        id: "t-5",
        icon: FaRegImage,
        name: "Unit Testing",
      },
      {
        id: "t-6",
        icon: FaRegImage,
        name: "Ant Design",
      },
      {
        id: "t-7",
        icon: FaRegImage,
        name: "Java",
      },
      {
        id: "t-8",
        icon: FaRegImage,
        name: "Golang",
      },
      {
        id: "t-9",
        icon: FaRegImage,
        name: "Programming",
      },
      {
        id: "t-10",
        icon: FaRegImage,
        name: "Web Development",
      },
      {
        id: "t-11",
        icon: FaRegImage,
        name: "Computer Science",
      },
      {
        id: "t-12",
        icon: FaRegImage,
        name: "JavaScript",
      },
      {
        id: "t-13",
        icon: FaRegImage,
        name: "CSS",
      },
      {
        id: "t-14",
        icon: FaRegImage,
        name: "PHP",
      },
      {
        id: "t-15",
        icon: FaRegImage,
        name: "Microsoft Office",
      },
      {
        id: "t-16",
        icon: FaRegImage,
        name: "MySQL",
      },
      {
        id: "t-17",
        icon: FaRegImage,
        name: "HTML",
      },
      {
        id: "t-18",
        icon: FaRegImage,
        name: "HTML5",
      },
      {
        id: "t-19",
        icon: FaRegImage,
        name: "Microsoft Excel",
      },
      {
        id: "t-20",
        icon: FaRegImage,
        name: "Python",
      },
      {
        id: "t-21",
        icon: FaRegImage,
        name: "PostgreSQL",
      },
      {
        id: "t-22",
        icon: FaRegImage,
        name: "Microsoft Word",
      },
      {
        id: "t-23",
        icon: FaRegImage,
        name: "Perl",
      },
      {
        id: "t-24",
        icon: FaRegImage,
        name: "Node.js",
      },
      {
        id: "t-25",
        icon: FaRegImage,
        name: "SQL",
      },
      {
        id: "t-26",
        icon: FaRegImage,
        name: "Leadership",
      },
      {
        id: "t-27",
        icon: FaRegImage,
        name: "Public Speaking",
      },
      {
        id: "t-28",
        icon: FaRegImage,
        name: "Management",
      },
      {
        id: "t-29",
        icon: FaRegImage,
        name: "Team Leadership",
      },
      {
        id: "t-30",
        icon: FaRegImage,
        name: "Go",
      },
      {
        id: "t-31",
        icon: FaRegImage,
        name: "Cascading Style Sheets (CSS)",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Amartha",
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Frontend Engineer",
        duration: "Jan 2023 - Present",
        content: [
          {
            text: "",
            link: "",
          },
        ],
      },
      {
        title: "Software Engineer Internship",
        duration: "Jun 2017 - Aug 2017",
        content: [
          {
            text: "Worked in Technology Division, developed an Integration-Testing for Go-MIS application in Amartha.",
            link: "",
          },
          {
            text: "Also joined in a subteam that developed Go-MIS and Go-CAS.",
            link: "",
          },
          {
            text: "The Technology Stack: - NodeJS - MochaJS - AngularJS - Postgre - Phabricator",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Binar Academy",
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Learning Facilitator",
        duration: "Feb 2023 - Jul 2023",
        content: [
          {
            text: "Assisting and teaching participants in terms of Front-End Development.",
            link: "",
          },
          {
            text: "Courses included: - Javascript - React - Redux - Testing - Linting  Finishing the bootcamp with: - 126 facilitation hours - facilitate 18 students with 61% graduation rate - achieve 4.",
            link: "",
          },
          {
            text: "3 / 5 for the facilitator quality rating from students",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Tokopedia",
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Frontend Engineer",
        duration: "Dec 2019 - Dec 2022",
        content: [
          {
            text: "I joined the Content & IT Enterprise team as part of the new centralized web team.",
            link: "",
          },
          {
            text: "I contributed and developed in many modules, some of them including Tokopedia Play, Tokopedia Careers, Tokopedia Academy, Internal Tools.",
            link: "",
          },
          {
            text: "I am also a fast responder on the team, should any issues or problems occures, I would be the one who responded to that.",
            link: "",
          },
          {
            text: "My biggest achievements as Frontend Engineer in Tokopedia was rewriting Tokopedia Careers website from Wordpress + Jquery to ReactJs.",
            link: "",
          },
        ],
      },
      {
        title: "Software Engineer",
        duration: "Jul 2018 - Dec 2019",
        content: [
          {
            text: "",
            link: "",
          },
        ],
      },
      {
        title: "Software Engineer Intern",
        duration: "Jan 2018 - Apr 2018",
        content: [
          {
            text: "Working in User team called Shinchan, contributed and developed in the development of Talk features, where buyer can interact to the seller about the product that he/she wants to buy.",
            link: "",
          },
          {
            text: "The development in the team involving Perl, PostgreSQL, Golang, NSQ.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "University of Indonesia",
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Teaching Assistant",
        duration: "Aug 2017 - Dec 2017",
        content: [
          {
            text: "As an assistant for System Programming course, doing several works such as: - Grading homeworks - Creating a Homework in collaborations with other Assistants - As an Invigilator for their Mid-Exam.",
            link: "",
          },
        ],
      },
      {
        title: "Teaching Assistant",
        duration: "Aug 2017 - Dec 2017",
        content: [
          {
            text: "As an assistant for Game Development course, doing several works such as: - Assisting the students in Lab sessions - Grading Homeworks and Labs - With the lecturer and other Assistants, grading their final project - As an Invigilator in Mid-Exam and Final-Exam",
            link: "",
          },
        ],
      },
      {
        title: "Teaching Assistant",
        duration: "Feb 2017 - Jun 2017",
        content: [
          {
            text: "As an Teaching Assistant for Automata & Language Theory Course.",
            link: "",
          },
          {
            text: "What we do: - Review and give feedback to students for their assignments in 1 semester - Coordinate with other assistants to provide Assistants for the students if needed",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "PT Hulaa Travel Indonesia",
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Internship",
        duration: "Jun 2016 - Aug 2016",
        content: [
          {
            text: "Developing API for the company and learning Scala from scratch.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Mr.Alfred",
    github: "http://mralfred-web-admin-staging.herokuapp.com/",
    link: "http://mralfred-web-admin-staging.herokuapp.com/",
    image: placeholder,
    content: "",
    stack: [
      {
        id: "icon-1",
        icon: FaRegImage,
        name: "Placeholder",
      },
    ],
  },
  {
    id: "project-2",
    title: "Prototype Hunter",
    github: "https://gamejolt.com/games/prototype-hunter/217351",
    link: "https://gamejolt.com/games/prototype-hunter/217351",
    image: placeholder,
    content: "",
    stack: [
      {
        id: "icon-1",
        icon: FaRegImage,
        name: "Placeholder",
      },
    ],
  },
  {
    id: "project-3",
    title: "Automatic Pet Feeder",
    github: "https://gitlab.com/fandok/AutomaticPetFeeder",
    link: "https://gitlab.com/fandok/AutomaticPetFeeder",
    image: placeholder,
    content: "",
    stack: [
      {
        id: "icon-1",
        icon: FaRegImage,
        name: "Placeholder",
      },
    ],
  },
  {
    id: "project-4",
    title: "Angkasa Catering",
    github: "http://angkasacatering.com",
    link: "http://angkasacatering.com",
    image: placeholder,
    content: "",
    stack: [
      {
        id: "icon-1",
        icon: FaRegImage,
        name: "Placeholder",
      },
    ],
  },
  {
    id: "project-5",
    title: "Pennily",
    github: "",
    link: "",
    image: placeholder,
    content: "",
    stack: [
      {
        id: "icon-1",
        icon: FaRegImage,
        name: "Placeholder",
      },
    ],
  },
  {
    id: "project-6",
    title: "Re-Design Web BEM FTUI 2017",
    github: "http://bem.eng.ui.ac.id",
    link: "http://bem.eng.ui.ac.id",
    image: placeholder,
    content: "",
    stack: [
      {
        id: "icon-1",
        icon: FaRegImage,
        name: "Placeholder",
      },
    ],
  },
  {
    id: "project-7",
    title: "SuMovie",
    github: "",
    link: "",
    image: placeholder,
    content: "",
    stack: [
      {
        id: "icon-1",
        icon: FaRegImage,
        name: "Placeholder",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "BETIS 2015",
    title: "Teacher",
    duration: "Mar 2015 - May 2015",
    content: [
      {
        text: "Teaching the students of high school who will have a test to college with the lesson of basic mathematic",
        link: "",
      },
    ],
    logo: placeholder,
  },
  {
    id: 2,
    organisation: "Java Jazz",
    title: "Technical Support",
    duration: "Feb 2017 - Mar 2017",
    content: [
      {
        text: "- Coordinate and Provide technical support for other divisions.",
        link: "",
      },
      {
        text: "- Setup the computer for the daily use of the Scanner and ID Division.",
        link: "",
      },
      {
        text: "- Standby at the Main Gate during the time of the event - Work with the team of 18 peoples for the preparation of the event during the pre-event and event",
        link: "",
      },
    ],
    logo: placeholder,
  },
  {
    id: 3,
    organisation: "COMPFEST",
    title: "Playground Division Staff",
    duration: "Jan 2015 - Sep 2015",
    content: [
      {
        text: "Invite many developer and studio to come to our Playground and show their products in the Main Event of CompFest7.",
        link: "",
      },
      {
        text: "Have invited: - LIVI - Hulaa - Infokost.",
        link: "",
      },
      {
        text: "net - Flipbox Studio - Firziltech",
        link: "",
      },
    ],
    logo: placeholder,
  },
  {
    id: 4,
    organisation: "Open House Fasilkom 2014",
    title: "Public Relations Staff",
    duration: "Aug 2015 - Nov 2015",
    content: [
      {
        text: "Visiting many high schools in the Jabodetabek regions and presenting about Fasilkom UI and Open House Fasilkom UI.",
        link: "",
      },
    ],
    logo: placeholder,
  },
  {
    id: 5,
    organisation: "Open House Fasilkom 2015",
    title: "Vice Person in Charge of Public Relation Division",
    duration: "Jul 2015 - Nov 2015",
    content: [
      {
        text: "Leading 20 people from the freshmen to visit some of the high schools in around Jakarta, Bogor, Depok, etc to represent about Fasilkom UI and invite them to come to Open House Fasilkom UI.",
        link: "",
      },
    ],
    logo: placeholder,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/<your-linkedin-id>/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/<your-github-id>/",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:<your-email-id>",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/<your-twitter-id>/",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/<your-instagram-id>/",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Fandika Okdiba",
  githubUsername: "",
  tagLine:
    "Front-end enthusiast | Starting new career @ Amartha! | ex-Tokopedia",
  intro: "This is a placeholder intro",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
