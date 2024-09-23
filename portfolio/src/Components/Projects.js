// a projects page
// @author: Maphuti Shilabje
// email: fabridgeshilabje01@gmail.com
import ProjectCard from './ProjectCard';

const Projects = () => (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl text-gray-300 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-commerce Platform"
            description="A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration."
            githubLink="#"
            demoLink="#"
          />
          <ProjectCard
            title="AI-powered Chess Engine"
            description="An intelligent chess engine implemented in Python, utilizing minimax algorithm with alpha-beta pruning for efficient move prediction."
            githubLink="#"
            demoLink="#"
          />
          <ProjectCard
            title="Task Management API"
            description="RESTful API built with Express.js and PostgreSQL, providing robust task management functionalities with user authentication and data validation."
            githubLink="#"
            demoLink="#"
          />
        </div>
      </div>
    </section>
  );
  export default Projects;