// Footer.jsx

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer Logo */}
            <div className="mb-4 md:mb-0">
              <img src="/logo-white.png" alt="Logo" className="h-12" />
            </div>
            {/* Footer Links */}
            <nav className="flex flex-wrap justify-center md:justify-end">
              <a href="#" className="text-gray-300 hover:text-white px-4 py-2">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-4 py-2">About</a>
              <a href="#" className="text-gray-300 hover:text-white px-4 py-2">Tools</a>
              <a href="#" className="text-gray-300 hover:text-white px-4 py-2">How to Use</a>
              <a href="#" className="text-gray-300 hover:text-white px-4 py-2">FAQ</a>
            </nav>
          </div>
          {/* Bottom Text */}
          <div className="text-center mt-4 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  