import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-700">NUST</span>
              <span className="text-xl font-semibold text-indigo-800 ml-2">Robotics & AI</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-indigo-600 hover:text-purple-700 font-medium">
              Home
            </Link>
            <Link href="#courses" className="text-indigo-600 hover:text-purple-700 font-medium">
              Courses
            </Link>
            <Link href="#about" className="text-indigo-600 hover:text-purple-700 font-medium">
              About
            </Link>
            <Link href="#contact" className="text-indigo-600 hover:text-purple-700 font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 