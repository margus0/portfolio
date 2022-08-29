import React from 'react';
import Projects from '../Projects/Projects';
import images from '../../assets/images.js';
import { ProjectList } from './ProjectsList.style';

const links = [
  {
    front: 'https://github.com/mariusGood/project-front-2',
    back: 'https://github.com/mariusGood/project-back',
  },
  {
    front: 'https://github.com/margus0/todo-front',
    back: 'https://github.com/margus0/todo-back',
  },
  {
    front: 'https://github.com/mariusGood/movie-app',
  },
];

const ProjectsList = () => {
  return (
    <ProjectList id='projects'>
      <a className='back' href='/'>
        <i className='fa-solid fa-arrow-left-long'></i>
      </a>
      <h1>Projects</h1>
      <Projects
        title='E-commerce Website'
        description='Simple responsive e-commerce shop with registration, login forms and protected routes built using ReactJs & NodeJs.'
        image={images.homepage}
        link='https://plankton-app-uelyf.ondigitalocean.app'
        links={links[0]}
      />
      <Projects
        title='Todo app'
        description='Full CRUD todo app with first my first pagination also built using ReactJs & NodeJs.'
        image={images.todo}
        link='https://seal-app-zws4n.ondigitalocean.app'
        links={links[1]}
      />
      <Projects
        title='Movie app'
        image={images.movie}
        description='Movie app created using OMDB API, ReactJs and Bootstrap'
        link='https://oyster-app-rod2x.ondigitalocean.app/'
        links={links[2]}
      />
      <Projects
        title='YouTube Clone'
        description='Comming soon...'
      />
    </ProjectList>
  );
};

export default ProjectsList;
