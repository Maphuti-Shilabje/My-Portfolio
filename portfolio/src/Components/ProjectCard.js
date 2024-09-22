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