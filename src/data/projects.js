export const projects = [
  {
    id: 1,
    name: 'TinyApp',
    description: 'A Bitly-style application allowing users to create shortened URLs. My first app built with Node.js and an Express server.',
    image: 'tinyapp.png',
    stack: {
      frontEnd: 'EJS, HTML5, CSS, Bootstrap',
      backEnd: 'Node.js, Express',
      testing: 'Mocha, Chai',
      other: ''
    },
    date: 'October 2020',
    github: 'https://github.com/JoshGrant5/tinyapp',
    deployment: '',
    host: ''
  },
  {
    id: 2,
    name: 'Tweeter',
    description: 'A single-page Twitter clone. This project was built with a Node.js and Express back-end, and was also my first time using JQuery and Ajax.',
    image: 'tweeter.png',
    stack: {
      frontEnd: 'JQuery, EJS, Ajax, HTML5, CSS',
      backEnd: 'Node.js, Express',
      testing: '',
      other: ''
    },
    date: 'October 2020',
    github: 'https://github.com/JoshGrant5/tweeter',
    deployment: '',
    host: ''
  },
  {
    id: 3,
    name: 'QuizAndTell',
    description: 'Your standard quiz app, with a twist! Instead of just trivia quizzes, users can take and create Buzzfeed-style personality quizzes as well. Built with Node.js, Express, JQuery, Ajax, and PostgreSQL.',
    image: 'quizandtell.png',
    stack: {
      frontEnd: 'JQuery, EJS, Ajax, HTML5, SCSS, Bootstrap',
      backEnd: 'Node.js, Express, PostgreSQL',
      testing: '',
      other: ''
    },
    date: 'October 2020',
    github: 'https://github.com/JoshGrant5/quiz-app',
    deployment: 'https://quizandtell.herokuapp.com/',
    host: 'Heroku'
  },
  {
    id: 4,
    name: 'LHL Scheduler',
    description: 'A single-page app for users to book and cancel interviews in a realtime experience. My first experience with WebSockets, and more excitingly, my first React app! Node.js and PostgreSQL backend, with testing done with Jest, Cypress, and Storybook.',
    image: 'scheduler.png',
    stack: {
      frontEnd: 'React, Axios, HTML5, SCSS',
      backEnd: 'Node.js, PostgreSQL',
      testing: 'Jest, Cypress, Storybook',
      other: 'WebSockets'
    },
    date: 'October 2020',
    github: 'https://github.com/JoshGrant5/interview-scheduler',
    deployment: 'https://lhl-scheduler-jg.netlify.app/',
    host: 'Netlify'
  },
  {
    id: 5,
    name: 'Jungle',
    description: 'A mini e-commerce app for users to purchase obscure items. Built with Ruby on Rails, PostgreSQL, and the Stripe API. Testing done in RSpec and Capybara.',
    image: 'jungle.png',
    stack: {
      frontEnd: 'ERB, HTML5, SCSS',
      backEnd: 'Ruby on Rails, PostgreSQL',
      testing: 'RSpec, Capybara',
      other: 'Stripe API'
    },
    date: 'November 2020',
    github: 'https://github.com/JoshGrant5/jungle',
    deployment: '',
    host: ''
  },
  {
    id: 6,
    name: 'Symposium',
    description: 'A video-chat platform for like-minded people to listen to and discuss podcasts. Built with React, Node.js, Socket.io, WebRTC, the Itunes API, and a PostgreSQL database. Testing done in Cypress.',
    image: 'symposium.png',
    fullStack: {
      frontEnd: 'React, Axios, HTML5, SCSS',
      backEnd: 'Node.js, Express, Axios, PostgreSQL',
      testing: 'Cypress',
      other: 'Socket.io, Simple-Peer, Itunes API'
    },
    date: 'November 2020',
    github: 'https://github.com/JoshGrant5/symposium',
    deployment: 'https://the-symposium.herokuapp.com/',
    host: 'Heroku'
  },
];