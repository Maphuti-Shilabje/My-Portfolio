const Skills = () => (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl text-gray-300 mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-4">
          {['JavaScript (ES6+)', 'React', 'Node.js', 'Express.js', 'Python', 'Java', 'C++', 'SQL', 'MongoDB', 'Git', 'RESTful APIs', 'GraphQL', 'Docker', 'AWS'].map((skill) => (
            <span key={skill} className="bg-blue-900 text-teal-400 px-5 py-2 rounded text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
  export default Skills;