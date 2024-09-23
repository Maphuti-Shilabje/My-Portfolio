// a Project Card componet
// @author: Maphuti Shilabje
// email: fabridgeshilabje01@gmail.com

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBook } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, githubLink, demoLink }) => (
    <div className="bg-blue-900 rounded p-6 transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-gray-300 mt-0">{title}</h3>
      <p className="mb-5">{description}</p>
      <div>
        <a href={githubLink} className="text-teal-400 mr-4 no-underline">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href={demoLink} className="text-teal-400 no-underline">
          <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
        </a>
      </div>
    </div>
  );
  export default ProjectCard;