import React from 'react';
import Projects from '../Projects/Projects';
import { ProjectList } from './ProjectsList.style';

const projects = [
  {
    githubLinks: {
      front: 'https://github.com/mariusGood/project-front-2',
      back: 'https://github.com/mariusGood/project-back',
    },
    title: 'E-commerce Website',
    image: require('../../assets/homepage.png'),
    description:
      'Simple responsive e-commerce shop with registration, login forms and protected routes built using ReactJs & NodeJs.',
    hosted: false,
  },
  {
    githubLinks: {
      front: 'https://github.com/margus0/todo-front',
      back: 'https://github.com/margus0/todo-back',
    },
    title: 'Todo app',
    description:
      'Full CRUD todo app with first my first pagination also built using ReactJs & NodeJs.',
    image: require('../../assets/todo.png'),
    link: 'https://seal-app-zws4n.ondigitalocean.app',
    hosted: false,
  },
  {
    githubLinks: {
      front: 'https://github.com/margus0/movie-app',
    },
    title: 'Movie app',
    image: require('../../assets/movie.png'),
    description: 'Movie app created using OMDB API, ReactJs and Bootstrap.',
    link: 'https://movie-app-f780c.firebaseapp.com/',
    hosted: true,
  },
  {
    githubLinks: {
      front: 'https://github.com/margus0/youtube-clone',
    },
    title: 'Youtube-clone',
    image: require('../../assets/youtube-clone-image.png'),
    description:
      'Youtube clone website created using React, Bootstrap and Youtube V3 API.',
    link: 'https://clone-68805.firebaseapp.com',
    hosted: true,
  },
  {
    githubLinks: {
      front: 'https://github.com/mariusGood/receipt-tracking-application',
    },
    title: 'Receipt app',
    image: require('../../assets/receipt-image.png'),
    description:
      'Simple receipt tracking application built with React and styled-components.',
    link: 'https://receipt-app-6f708.firebaseapp.com/',
    hosted: true,
  },
];

const ProjectsList = () => {
  return (
    <ProjectList id='projects'>
      <a className='back' href='/'>
        <i className='fa-solid fa-arrow-left-long'></i>
      </a>
      <h1>Projects</h1>
      {projects.map((e) => {
        return (
          <Projects
            title={e.title}
            description={e.description}
            image={e.image}
            link={e.link}
            links={e.githubLinks}
            hosted={e.hosted}
          />
        );
      })}
    </ProjectList>
  );
};

export default ProjectsList;
