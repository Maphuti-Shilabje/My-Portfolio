const Footer = () => (
    <footer className="bg-blue-900 py-12 text-center">
      <div className="container mx-auto px-5">
        <div className="mb-6">
          {[faGithub, faLinkedin, faTwitter, faDev].map((icon, index) => (
            <a key={index} href="#" className="text-gray-300 mx-2 text-2xl hover:text-teal-400 transition-colors duration-300">
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
        <p>&copy; 2024 Maphuti Shilabje. All rights reserved.</p>
      </div>
    </footer>
  );
  export default Footer;