const REPOSITORY = 'gatsby-resume-template';
const FIRST_NAME = 'Muhammad Ilham';
const LAST_NAME = 'Hidayat';
const GITHUB_USERNAME = 'milhamhidayat';
const TWITTER_USERNAME = 'milhamhidayat95';
const LINKEDIN_USERNAME = 'milhamhidayat';
// const PHONE_NUMBER = '604-XXX-XXXX';
const ADDRESS = 'Yogyakarta, Indonesia';
// const EMAIL = 'jane.doe@email.com';
const FOOTER_URL = 'https://www.milhamh.dev';

const BIO = `
      Hi, my name is Ilham. I'm a backend software engineer based in Yogyakarta, Indonesia. Usually I code using Go and Node.js.
      When not coding, I usually reading books or playing games. You can visit my blog in:`;

const EXPERIENCE_LIST = [
  {
    title: 'Software Engineer - Backend',
    company: 'Kurio',
    description: ``,
    period: 'August 2019 - June 2020',
  },
  {
    title: 'Backend Engineer',
    company: 'CoHive',
    description: ``,
    period: 'August 2018 - July 2019',
  },
  {
    title: 'Full Stack Developer',
    company: 'PasarPolis',
    description: "",
    period: 'July 2017 - March 2018',
  },
];

const EDUCATION_LIST = [
  {
    institution: 'Hacktiv8',
    qualification: 'Full Stack Javascript Program',
    description: ``,
    period: '2015',
  },
  {
    institution: 'Universitas Brawijaya',
    qualification: 'Information System',
    description: ``,
    period: '2012 - 2017',
  },
];

const LANGUAGES_AND_TOOLS = [
  { name: 'HTML5', iconClass: 'fa-html5' },
  { name: 'CSS3', iconClass: 'fa-css3-alt' },
  { name: 'Javascript', iconClass: 'fa-js-square' },
  { name: 'Angular', iconClass: 'fa-angular' },
  { name: 'React', iconClass: 'fa-react' },
  { name: 'NodeJS', iconClass: 'fa-node-js' },
];

const PROGRAMMING_LANGUAGES = [
  {
    url: 'https://img.shields.io/badge/go%20-%231caed6.svg?&style=for-the-badge&logo=go&logoColor=white',
    alt: 'go'
  },
  {
    url: 'https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    alt: 'javascript'
  },
  {
    url: 'https://img.shields.io/badge/node.js%20-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white',
    alt: 'node'
  }
]

const CLOUD_COMPUTING = [
  {
    url: 'https://img.shields.io/badge/Google%20Cloud%20Platform%20-%234285F4.svg?&style=for-the-badge&logo=google-cloud&logoColor=white',
    alt: 'gcp'
  },
  {
    url: 'https://img.shields.io/badge/Amazon%20Web%20Service%20-%232d3436.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white',
    alt: 'aws'
  },
]

const DATABASES = [
  {
    url: 'https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white',
    alt: 'mysql'
  },
  {
    url: 'https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white',
    alt: 'postgresql'
  },
  {
    url: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white',
    alt: 'mongodb'
  },
  {
    url: 'https://img.shields.io/badge/redis%20-%23d35400.svg?&style=for-the-badge&logo=redis&logoColor=white',
    alt: 'redis'
  }
]

const CONTAINERIZATION = [
  {
    url: 'https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white',
    alt: 'docker'
  },
  {
    url: 'https://img.shields.io/badge/kubernetes%20-%23326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white',
    alt: 'kubernetes'
  }
]

const OTHER_TOOLS = [
  {
    url: 'https://img.shields.io/badge/openapi%20-%236BA539.svg?&style=for-the-badge&logo=openapi-initiative&logoColor=white',
    alt: 'openapi'
  },
  {
    url: 'https://img.shields.io/badge/graphql%20-%239b59b6.svg?&style=for-the-badge&logo=graphql&logoColor=white',
    alt: 'graphql'
  },
  {
    url: 'https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white',
    alt: 'git'
  }
]

const SKILLS = ['Go', 'Node.js', 'Docker', 'Kubernetes', 'MySQL', 'PostgreSQL'];

const PORTFOLIO = {
  introParagraphs: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.`,
  ],
  items: [
    {
      name: 'First portfolio item',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
    {
      name: 'Second portoflio item name',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
  ],
};

const CERTIFICATIONS = [
  'Certification 1',
  'Certification 2',
  'Certification 3',
  'Award 1',
  'Award 2',
];

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME} Resume`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME} Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/favicon.png',
  pathPrefix: `/${REPOSITORY}`, // This path is subpath of your hosting https://domain/portfolio
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  // bio
  bio: BIO,
  // experience
  experienceList: EXPERIENCE_LIST,
  // education
  educationList: EDUCATION_LIST,
  // languages & tools
  langTools: LANGUAGES_AND_TOOLS,
  programmingLang: PROGRAMMING_LANGUAGES,
  cloudComputing: CLOUD_COMPUTING,
  databases: DATABASES,
  containerization: CONTAINERIZATION,
  otherTools: OTHER_TOOLS,
  // skills
  skills: SKILLS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [
    {
      icon: 'fab fa-github',
      name: 'Github',
      url: `https://github.com/${GITHUB_USERNAME}`,
    },
    {
      icon: 'fab fa-linkedin-in',
      name: 'Linkedin',
      url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: `https://twitter.com/${TWITTER_USERNAME}`,
    },
  ],
  address: ADDRESS,
  footerUrl: FOOTER_URL,
};
