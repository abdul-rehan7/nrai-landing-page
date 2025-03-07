import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Courses from "./components/Courses";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Welcome to NUST Robotics & AI
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100">
                Shaping the future through cutting-edge education in Robotics and Artificial Intelligence
              </p>
              <a
                href="#courses"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Explore Our Courses
              </a>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <Courses />

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Why Choose NUST Robotics & AI?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience world-class education with state-of-the-art facilities and expert instructors
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Learn from industry experts and experienced researchers</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-2">Hands-on Learning</h3>
                <p className="text-gray-600">Practice with real robots and AI systems in our labs</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2">Industry Connection</h3>
                <p className="text-gray-600">Strong partnerships with leading tech companies</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
