// a hadder page
// @author: Maphuti Shilabje
// email: fabridgeshilabje01@gmail.com


const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-opacity-85 backdrop-blur-md z-50">
    <div className="container mx-auto px-5 py-5 flex justify-between items-center">
      <a href="#" className="text-3xl text-teal-400 no-underline">MS</a>
      <nav>
        <ul className="flex">
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <li key={item} className="ml-8">
              <a href={`#${item.toLowerCase()}`} className="text-gray-300 no-underline hover:text-teal-400 transition-colors duration-300">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
export default Header;