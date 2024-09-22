


const Experience = () => (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl text-gray-300 mb-12">Experience</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute w-1 bg-blue-900 h-full left-1/2 transform -translate-x-1/2"></div>
          <TimelineItem
            position="Full Stack Developer Intern"
            company="TechCorp Solutions"
            date="June 2023 - August 2023"
            isLeft={true}
          />
          <TimelineItem
            position="Open Source Contributor"
            company="Various Projects"
            date="2022 - Present"
            isLeft={false}
          />
          <TimelineItem
            position="Teaching Assistant - Data Structures"
            company="University of Cape Town"
            date="January 2023 - May 2023"
            isLeft={true}
          />
        </div>
      </div>
    </section>
  );
  export default Experience;