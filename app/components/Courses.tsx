'use client';
import { useInView } from '../hooks/useInView';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

type DivElement = HTMLDivElement;

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Robotics",
    description: "Learn the fundamentals of robotics including kinematics, dynamics, and basic robot programming.",
    duration: "16 weeks",
    level: "Beginner",
    image: "/robotics-intro.jpg"
  },
  {
    id: 2,
    title: "Artificial Intelligence Foundations",
    description: "Explore core AI concepts, machine learning algorithms, and practical applications.",
    duration: "14 weeks",
    level: "Intermediate",
    image: "/ai-foundations.jpg"
  },
  {
    id: 3,
    title: "Computer Vision & Deep Learning",
    description: "Master computer vision techniques and deep learning models for visual recognition tasks.",
    duration: "12 weeks",
    level: "Advanced",
    image: "/computer-vision.jpg"
  },
  {
    id: 4,
    title: "Autonomous Systems",
    description: "Design and implement autonomous systems using modern robotics and AI techniques.",
    duration: "16 weeks",
    level: "Advanced",
    image: "/autonomous-systems.jpg"
  },
  {
    id: 5,
    title: "Robot Operating System (ROS)",
    description: "Learn to develop robotic applications using ROS framework and tools.",
    duration: "10 weeks",
    level: "Intermediate",
    image: "/ros-course.jpg"
  },
  {
    id: 6,
    title: "Natural Language Processing",
    description: "Build AI systems that can understand and process human language.",
    duration: "12 weeks",
    level: "Intermediate",
    image: "/nlp-course.jpg"
  }
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [ref, isInView] = useInView<DivElement>();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out transform
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="h-48 relative bg-gradient-to-br from-purple-100 to-indigo-50">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-5xl text-purple-500">🤖</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-900 mb-2">{course.title}</h3>
        <p className="text-indigo-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
            {course.duration}
          </span>
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
            {course.level}
          </span>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [headerRef, isHeaderInView] = useInView<DivElement>();

  return (
    <section id="courses" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out transform
            ${isHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold text-indigo-900 sm:text-4xl mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
            Discover our comprehensive range of courses in Robotics and Artificial Intelligence, 
            designed to equip you with cutting-edge skills and knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses; 