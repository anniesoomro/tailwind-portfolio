 
 function Footer() {
    return (
      <footer className="bg-gradient-to-r from-gray-400 to-green-200 shadow-lg text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 justify-items-center">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl text-black font-bold mb-2">My Portfolio</h3>
            <p className="text-gray-900 sm: text-justify">
              Creating high-quality websites and applications. Let &apos s build something amazing together!
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl text-black font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-3">
                <a href="/" className="text-gray-900 hover:text-indigo-900 transition">Home</a>
              </li>
              <li className="mb-3">
                <a href="/about" className="text-gray-900 hover:text-indigo-900 transition">About</a>
              </li>
              <li className="mb-3">
                <a href="/services" className="text-gray-900 hover:text-indigo-900 transition">Services</a>
              </li>
              <li className="mb-3">
                <a href="/portfolio" className="text-gray-900 hover:text-indigo-900 transition">Portfolio</a>
              </li>
              <li className="mb-3">
                <a href="/contact" className="text-gray-900 hover:text-indigo-900 transition">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl text-black font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-900 mb-3">Email:<a href="mailto: info@myportfolio.com" className="hover:text-indigo-900 transition">info@myportfolio.com</a></p>
            <p className="text-gray-900 mb-3">Phone: <a href="tel:+1234567890" className="hover:text-indigo-900 transition">+123 456 7890 </a></p>
            <p className="text-gray-900">Location: Karachi, Pakistan</p>
          </div>
        </div>
  
        <div className="mt-4  text-center text-gray-900">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </footer>
    );
  }

  export default Footer;