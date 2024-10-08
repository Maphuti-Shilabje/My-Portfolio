// a footer page
// @author: Maphuti Shilabje
// email: fabridgeshilabje01@gmail.com


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons';


const socialLinks = [
  { icon: faGithub, url: 'https://github.com/Maphuti-Shilabje' },
  { icon: faLinkedin, url: 'https://linkedin.com/in/maphuti-shilabje-997841241/' },
  { icon: faTwitter, url: '#' },
  { icon: faDev, url: '#' },
];


const Footer = () => (
    <footer className="bg-blue-900 py-12 text-center">
      <div className="container mx-auto px-5">
        <div className="mb-6">
          {socialLinks.map((link, index) => (
            <a 
            key={link.id}
            href={link.url} target="_blank" rel="noopener noreferrer" 
            className="text-gray-300 mx-2 text-2xl hover:text-teal-400 transition-colors duration-300">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
        <p>&copy; 2024 Maphuti Shilabje. All rights reserved.</p>
      </div>
    </footer>
  );
  export default Footer;