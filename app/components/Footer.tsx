import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NUST Robotics & AI</h3>
            <p className="text-gray-400">
              Empowering the future through robotics and artificial intelligence education.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: robotics@nust.edu.pk</li>
              <li>Phone: +92 123 4567890</li>
              <li>Address: NUST Campus, Islamabad</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NUST Robotics & AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 