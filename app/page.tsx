'use client';
// import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Courses from "./components/Courses";
import { useInView } from './hooks/useInView';

export default function Home() {
  const [heroRef, isHeroInView] = useInView();
  const [featuresRef, isFeaturesInView] = useInView();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              ref={heroRef as any}
              className={`text-center transition-all duration-1000 ease-out transform
                ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Welcome to NUST Robotics & AI
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-purple-100">
                Shaping the future through cutting-edge education in Robotics and Artificial Intelligence
              </p>
              <a
                href="#courses"
                className="inline-block bg-white text-purple-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors"
              >
                Explore Our Courses
              </a>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <Courses />

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              ref={featuresRef as any}
              className={`transition-all duration-700 ease-out`}
            >
              <div className={`text-center mb-12 transition-all duration-700 ease-out transform
                ${isFeaturesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <h2 className="text-3xl font-bold text-indigo-900 sm:text-4xl mb-4">
                  Why Choose NUST Robotics & AI?
                </h2>
                <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
                  Experience world-class education with state-of-the-art facilities and expert instructors
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🎓",
                    title: "Expert Faculty",
                    description: "Learn from industry experts and experienced researchers"
                  },
                  {
                    icon: "💻",
                    title: "Hands-on Learning",
                    description: "Practice with real robots and AI systems in our labs"
                  },
                  {
                    icon: "🌟",
                    title: "Industry Connection",
                    description: "Strong partnerships with leading tech companies"
                  }
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out transform
                      ${isFeaturesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-purple-800">{feature.title}</h3>
                    <p className="text-indigo-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
