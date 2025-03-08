import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-200">NUST Robotics & AI</h3>
            <p className="text-indigo-200">
              Empowering the future through robotics and artificial intelligence education.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-indigo-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-indigo-200 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-indigo-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-indigo-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-200">Contact Us</h3>
            <ul className="space-y-2 text-indigo-200">
              <li>Email: robotics@nust.edu.pk</li>
              <li>Phone: +92 123 4567890</li>
              <li>Address: NUST Campus, Islamabad</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-200">
          <p>&copy; {new Date().getFullYear()} NUST Robotics & AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 