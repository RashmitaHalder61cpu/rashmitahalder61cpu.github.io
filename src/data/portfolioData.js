export const portfolioData = {
  personal: {
    name: "Rashmita Halder",
    title: "CSE Student | Aspiring Software Developer",
    badge: "2nd Year CSE • REVA University",
    location: "Bengaluru, India",
    heroIntro:
      "I am a Computer Science and Engineering student interested in programming and building software. I enjoy learning through practical projects and continuously developing my skills in programming, algorithms, and software development.",
    aboutParagraph1:
      "I chose Computer Science and Engineering because I am interested in programming and want to learn how to build software. I am currently developing my foundation in programming, data structures, algorithms, databases, and web technologies.",
    aboutParagraph2:
      "I believe in learning through practical experimentation. By writing code from scratch—such as building command-line utilities in C and solving algorithmic problems—I strengthen my grasp of memory management, logical reasoning, and structured software architecture.",
  },

  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],

  socials: {
    github: "https://github.com/RashmitaHalder61cpu",
    linkedin: "https://www.linkedin.com/in/rashmita-halder/",
    email: "rashmitahalder61@gmail.com",
    emailPlaceholder: "rashmitahalder61@gmail.com",
  },

  education: {
    institution: "REVA University",
    degree: "B.Tech Computer Science and Engineering",
    currentStage: "2nd Year",
    academicFocus: [
      "Data Structures & Algorithms",
      "Programming in C & Object-Oriented Concepts",
      "Database Management Systems (SQL)",
      "Foundational Computer Science Principles",
    ],
  },

  skills: [
    {
      name: "C",
      category: "Programming & Systems",
      description: "Low-level memory management, pointers, and systems programming.",
      badge: "Language",
    },
    {
      name: "Java",
      category: "Programming & Systems",
      description: "Object-oriented programming, class design, and structured application logic.",
      badge: "Language",
    },
    {
      name: "Python",
      category: "Programming & Systems",
      description: "Scripting, rapid prototyping, and algorithmic problem solving.",
      badge: "Language",
    },
    {
      name: "SQL",
      category: "Databases & Data",
      description: "Relational database querying, schema structure, and data management.",
      badge: "Database",
    },
    {
      name: "HTML",
      category: "Web Fundamentals",
      description: "Semantic markup, document structuring, and accessible web standards.",
      badge: "Frontend",
    },
    {
      name: "CSS",
      category: "Web Fundamentals",
      description: "Modern responsive layouts, typography, and styling systems.",
      badge: "Frontend",
    },
    {
      name: "Git",
      category: "Tools & Collaboration",
      description: "Version control, branching, committing, and code history tracking.",
      badge: "Tool",
    },
    {
      name: "GitHub",
      category: "Tools & Collaboration",
      description: "Remote repository hosting, issue management, and collaborative workflows.",
      badge: "Platform",
    },
  ],

  projects: [
    {
      id: "line-editor-c",
      title: "Simple Line Editor in C",
      subtitle: "Systems & Command-Line Utility",
      description:
        "A command-line text editor developed in C using an array of strings to manage document lines. It supports inserting, deleting, displaying, searching, find-and-replace, line and word counting, saving, and loading documents.",
      technologies: ["C", "Data Structures", "CLI"],
      capabilities: [
        "In-memory document buffering with 2D character arrays",
        "Interactive command parsing (insert, delete, display, count)",
        "Persistent file I/O for saving and loading document states",
        "String manipulation and pattern-matching for find & replace",
      ],
      githubUrl: "https://github.com/RashmitaHalder61cpu",
      featured: true,
    },
    {
      id: "leetcode-solutions-c",
      title: "LeetCode Solutions in C",
      subtitle: "Algorithms & Data Structures",
      description:
        "A collection of programming problem solutions implemented in C, covering arrays, strings, searching, stacks, linked lists, and fundamental algorithmic problem solving.",
      technologies: ["C", "Algorithms", "Data Structures", "Problem Solving"],
      capabilities: [
        "Memory-conscious algorithmic solutions using raw C pointers",
        "Linear data structures: dynamic arrays, stacks, and linked lists",
        "Core searching & sorting algorithmic techniques",
        "Focus on optimal time and space complexity analysis",
      ],
      githubUrl: "https://github.com/RashmitaHalder61cpu/leetcode-solutions",
      featured: true,
    },
   {
  id: "hello-world",
  title: "Hello World",
  subtitle: "Programming Fundamentals",
  description:
    "A simple introductory programming project demonstrating the basic Hello World program and fundamental programming structure.",
  technologies: ["C"],
  capabilities: [
    "Basic program structure",
    "Standard output using printf",
    "Introduction to C programming",
  ],
  githubUrl: "https://github.com/RashmitaHalder61cpu/hello-world",
  featured: true,
},
  ],
  contact: {
    heading: "Let's Connect",
    subheading:
      "I'm always interested in learning, building, and connecting with people in the technology community.",
  },
};
