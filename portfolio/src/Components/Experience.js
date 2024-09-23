// a Experience page
// @author: Maphuti Shilabje
// email: fabridgeshilabje01@gmail.com
import TimelineItem from "./TimeLineIterm";

const Experience = () => (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl text-gray-300 mb-12">Experience</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute w-1 bg-blue-900 h-full left-1/2 transform -translate-x-1/2"></div>
          <TimelineItem
            position="Experience 1 Example"
            company="Company name"
            date="June 20xx - August 20xx"
            isLeft={true}
          />
          <TimelineItem
            position="Experience 2 Example"
            company="Company name"
            date="20xx - 20xx"
            isLeft={false}
          />
          <TimelineItem
            position="Experience 3 Example"
            company="Company name"
            date="January 20xx - May 20xx"
            isLeft={true}
          />
        </div>
      </div>
    </section>
  );
  export default Experience;