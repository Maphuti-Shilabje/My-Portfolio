// a TimeLineItem componet
// @author: Maphuti Shilabje
// email: fabridgeshilabje01@gmail.com



const TimelineItem = ({ position, company, date, isLeft }) => (
    <div className={`relative w-1/2 p-10 ${isLeft ? 'left-0' : 'left-1/2'}`}>
      <div className="bg-blue-900 p-6 rounded relative">
        <h3 className="text-gray-300">{position}</h3>
        <p>{company}</p>
        <p>{date}</p>
      </div>
    </div>
  );
  export default TimelineItem;