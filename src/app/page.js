"use client";
import { toast } from "sonner";
import {
  ChevronRightIcon,
  BookOpenIcon,
  AwardIcon,
  UsersIcon,
  ClockIcon,
} from "lucide-react";
import CourseCard from "./component/CourseCard";
import TestimonialCard from "./component/TestimonialCard";
export default function Home() {
  const handleEnrollClick = () => {
    toast.success("Enrollment successful! We will contact you shortly.");
  };
  const handleDemoClick = () => {
    toast.success("Demo class requested! Check your email for details.");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#059669] to-[#047857] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Unlock Your Potential with EduBharat
              </h1>
              <p className="text-lg mb-8">
                India&apos;s premier online learning platform offering
                comprehensive courses for students from Class 1 to 12, JEE,
                NEET, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEnrollClick}
                  className="bg-[#F97316] hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
                >
                  Enroll Now <ChevronRightIcon className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={handleDemoClick}
                  className="bg-white hover:bg-gray-100 text-[#059669] px-6 py-3 rounded-md font-medium"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Indian students learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose EduBharat?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Designed to meet the unique needs of Indian students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
              <div className="bg-[#059669] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpenIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                CBSE & State Board Aligned
              </h3>
              <p className="text-gray-600">
                Our curriculum perfectly aligns with CBSE, ICSE, and all major
                state boards across India.
              </p>
            </div>
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
              <div className="bg-[#8B5CF6] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <AwardIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Expert Indian Educators
              </h3>
              <p className="text-gray-600">
                Learn from top teachers from IITs, NITs, and prestigious
                institutions across India.
              </p>
            </div>
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
              <div className="bg-[#3B82F6] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <UsersIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Learning
              </h3>
              <p className="text-gray-600">
                Adaptive learning paths that adjust to your strengths and areas
                needing improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Courses Section */}
      <section className="py-16 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Popular Courses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive preparation for every academic need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              title="JEE Mains & Advanced"
              description="Complete preparation for India's top engineering entrance exams with focus on Physics, Chemistry & Mathematics."
              image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              price="₹15,999"
              category="Entrance Exam"
              duration="12 months"
              onEnroll={handleEnrollClick}
            />
            <CourseCard
              title="NEET Preparation"
              description="Comprehensive course for medical aspirants covering Biology, Physics, and Chemistry with regular mock tests."
              image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              price="₹16,999"
              category="Medical"
              duration="12 months"
              onEnroll={handleEnrollClick}
            />
            <CourseCard
              title="Class 10 All Subjects"
              description="Complete coverage of CBSE Class 10 curriculum for all subjects with focus on board exam preparation."
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              price="₹8,999"
              category="School"
              duration="9 months"
              onEnroll={handleEnrollClick}
            />
          </div>
          <div className="text-center mt-10">
            <button className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-3 rounded-md font-medium">
              View All Courses
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Student Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from our students across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              location="Delhi"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              quote="Thanks to EduBharat's JEE preparation course, I secured admission to IIT Bombay. The teachers were excellent and the study material was comprehensive."
              rating={5}
            />
            <TestimonialCard
              name="Rahul Verma"
              location="Mumbai"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              quote="The NEET preparation course helped me secure a seat in AIIMS. The biology modules and mock tests were particularly helpful in my preparation."
              rating={5}
            />
            <TestimonialCard
              name="Ananya Patel"
              location="Ahmedabad"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              quote="I scored 95% in my CBSE Class 10 boards after enrolling in EduBharat's course. The teachers made complex topics easy to understand."
              rating={4}
            />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Start Your Learning Journey Today
              </h2>
              <p className="text-lg mb-6">
                Join thousands of students across India who are achieving
                academic excellence with EduBharat.
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>Flexible learning schedule</span>
                </li>
                <li className="flex items-center">
                  <UsersIcon className="h-5 w-5 mr-2" />
                  <span>Live classes with expert teachers</span>
                </li>
                <li className="flex items-center">
                  <AwardIcon className="h-5 w-5 mr-2" />
                  <span>Guaranteed improvement in scores</span>
                </li>
              </ul>
              <button
                onClick={handleEnrollClick}
                className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                Enroll Now
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
