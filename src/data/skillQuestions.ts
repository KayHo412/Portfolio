export const skillQuestions: Record<string, Array<{
  question: string;
  options: string[];
  correct: number;
}>> = {
  'React': [
    {
      question: 'What is React primarily used for?',
      options: ['Building UI components', 'Database management', 'Server hosting', 'CSS styling'],
      correct: 0,
    },
    {
      question: 'What Hook is used to manage state in React?',
      options: ['useEffect', 'useState', 'useContext', 'useReducer'],
      correct: 1,
    },
    {
      question: 'What is JSX?',
      options: ['A database', 'JavaScript XML syntax', 'A CSS library', 'A testing framework'],
      correct: 1,
    },
  ],
  'TypeScript': [
    {
      question: 'What is TypeScript?',
      options: ['A type-safe variant of JavaScript', 'A database language', 'A styling tool', 'A server framework'],
      correct: 0,
    },
    {
      question: 'How do you define a type in TypeScript?',
      options: ['interface User {}', 'type User {}', 'Both A and B', 'Neither'],
      correct: 2,
    },
    {
      question: 'What does TypeScript compile to?',
      options: ['Python', 'Java', 'JavaScript', 'C++'],
      correct: 2,
    },
  ],
  'Node.js': [
    {
      question: 'What is Node.js?',
      options: ['A frontend framework', 'A server-side JavaScript runtime', 'A database', 'A CSS preprocessor'],
      correct: 1,
    },
    {
      question: 'Which module system does Node.js primarily use?',
      options: ['ES6 modules', 'CommonJS', 'Both', 'AMD'],
      correct: 1,
    },
    {
      question: 'What does npm stand for?',
      options: ['Node Package Manager', 'Node Project Manager', 'Network Package Module', 'Node Program Module'],
      correct: 0,
    },
  ],
  'JavaScript': [
    {
      question: 'Is JavaScript a compiled or interpreted language?',
      options: ['Compiled', 'Interpreted', 'Both', 'Neither'],
      correct: 2,
    },
    {
      question: 'What is the keyword for creating a promise?',
      options: ['async', 'await', 'new Promise()', 'promise()'],
      correct: 2,
    },
    {
      question: 'What does const mean in JavaScript?',
      options: ['Constant variable (cannot be reassigned)', 'Constructor', 'Context', 'It can be reassigned'],
      correct: 0,
    },
  ],
  'Python': [
    {
      question: 'What is Python primarily used for?',
      options: ['Web development only', 'Multiple purposes including data science and web dev', 'Desktop apps only', 'Mobile apps'],
      correct: 1,
    },
    {
      question: 'What is a key feature of Python syntax?',
      options: ['Requires semicolons', 'Indentation-based', 'Requires curly braces', 'Very verbose'],
      correct: 1,
    },
    {
      question: 'What does pip stand for?',
      options: ['Python Interface Package', 'Pip Installs Packages', 'Python Install Protocol', 'Package Input Program'],
      correct: 1,
    },
  ],
  'Tailwind CSS': [
    {
      question: 'What is Tailwind CSS?',
      options: ['A CSS framework with pre-built components', 'A utility-first CSS framework', 'A JavaScript library', 'A preprocessor'],
      correct: 1,
    },
    {
      question: 'How do you add padding in Tailwind?',
      options: ['p-4', 'padding: 4', 'pad-4', 'px-4 only'],
      correct: 0,
    },
    {
      question: 'Is Tailwind a component framework?',
      options: ['Yes, it provides pre-built components', 'No, it is utility-first', 'It can be both', 'Neither'],
      correct: 1,
    },
  ],
  'Docker': [
    {
      question: 'What is Docker?',
      options: ['A version control system', 'A containerization platform', 'A database', 'A code editor'],
      correct: 1,
    },
    {
      question: 'What is a Docker container?',
      options: ['A virtual machine', 'A lightweight, standalone package', 'A storage unit', 'A network'],
      correct: 1,
    },
    {
      question: 'What is a Dockerfile?',
      options: ['A folder for files', 'Instructions to build a Docker image', 'A text file', 'A configuration file'],
      correct: 1,
    },
  ],
  'Git & GitHub': [
    {
      question: 'What is Git used for?',
      options: ['Drawing graphics', 'Version control', 'Package management', 'Web hosting'],
      correct: 1,
    },
    {
      question: 'What command stages changes in Git?',
      options: ['git commit', 'git add', 'git push', 'git pull'],
      correct: 1,
    },
    {
      question: 'What is a Git branch?',
      options: ['A copy of your hard drive', 'A parallel line of development', 'A backup', 'A server'],
      correct: 1,
    },
  ],
  'Postman': [
    {
      question: 'What is Postman used for?',
      options: ['Sending emails', 'API testing and documentation', 'Code editing', 'Database management'],
      correct: 1,
    },
    {
      question: 'What HTTP methods can you test in Postman?',
      options: ['Only GET', 'GET, POST, PUT, DELETE, etc.', 'Only POST', 'Only DELETE'],
      correct: 1,
    },
    {
      question: 'Can you save requests in Postman?',
      options: ['No', 'Yes, in collections', 'Only in local storage', 'No, only temporary'],
      correct: 1,
    },
  ],
  'Java Spring Boot': [
    {
      question: 'What is Spring Boot?',
      options: ['A Java framework for building applications', 'A Java IDE', 'A database', 'A CSS framework'],
      correct: 0,
    },
    {
      question: 'What is the main purpose of Spring Boot?',
      options: ['To slow down development', 'To simplify development with auto-configuration', 'To replace Java', 'To manage CSS'],
      correct: 1,
    },
    {
      question: 'What is a Spring Bean?',
      options: ['A type of coffee', 'An object managed by Spring', 'A database table', 'A configuration file'],
      correct: 1,
    },
  ],
};
