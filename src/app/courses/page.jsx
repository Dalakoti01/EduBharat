"use client";
import React, { useState } from "react";
import {
  Users,
  Clock,
  Star,
  Award,
  ChevronRight,
  Search,
  Play,
  Trophy,
  Globe,
  Code,
  Calculator,
  Microscope,
  PenTool,
  Languages,
} from "lucide-react";

const CoursesPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Courses", icon: Code },
    { id: "engineering", name: "Engineering", icon: Code },
    { id: "medical", name: "Medical", icon: Microscope },
    { id: "commerce", name: "Commerce", icon: Calculator },
    { id: "arts", name: "Arts & Humanities", icon: PenTool },
    { id: "language", name: "Languages", icon: Languages },
    { id: "competitive", name: "Competitive Exams", icon: Trophy },
  ];

  const courses = [
    {
      id: 1,
      title: "JEE Main & Advanced Preparation",
      subtitle: "Complete Engineering Entrance Preparation",
      category: "engineering",
      instructor: "Dr. Rajesh Sharma",
      rating: 4.9,
      students: 15420,
      duration: "12 months",
      price: "₹24,999",
      originalPrice: "₹34,999",
      level: "Intermediate",
      language: "Hindi & English",
      features: [
        "Live Classes",
        "Mock Tests",
        "Doubt Clearing",
        "Study Material",
      ],
      image: "🎯",
      popular: true,
    },
    {
      id: 2,
      title: "NEET Biology Mastery",
      subtitle: "Complete Medical Entrance Biology Course",
      category: "medical",
      instructor: "Dr. Priya Mehta",
      rating: 4.8,
      students: 8950,
      duration: "10 months",
      price: "₹19,999",
      originalPrice: "₹29,999",
      level: "Advanced",
      language: "Hindi & English",
      features: [
        "Video Lectures",
        "Practice Questions",
        "Previous Papers",
        "Notes",
      ],
      image: "🔬",
      popular: false,
    },
    {
      id: 3,
      title: "Class 10 CBSE Complete",
      subtitle: "All Subjects Comprehensive Course",
      category: "cbse",
      instructor: "Smt. Anita Gupta",
      rating: 4.7,
      students: 12340,
      duration: "1 year",
      price: "₹15,999",
      originalPrice: "₹22,999",
      level: "Beginner",
      language: "Hindi & English",
      features: [
        "All Subjects",
        "Board Preparation",
        "Sample Papers",
        "Revision",
      ],
      image: "📚",
      popular: true,
    },
    {
      id: 4,
      title: "CA Foundation Course",
      subtitle: "Chartered Accountancy Foundation Preparation",
      category: "commerce",
      instructor: "CA Vikram Singh",
      rating: 4.9,
      students: 6780,
      duration: "8 months",
      price: "₹18,999",
      originalPrice: "₹25,999",
      level: "Beginner",
      language: "Hindi & English",
      features: ["Accounting", "Law", "Mathematics", "Economics"],
      image: "💼",
      popular: false,
    },
    {
      id: 5,
      title: "UPSC Prelims & Mains",
      subtitle: "Complete Civil Services Preparation",
      category: "competitive",
      instructor: "Mr. Suresh Kumar IAS",
      rating: 4.8,
      students: 9560,
      duration: "18 months",
      price: "₹32,999",
      originalPrice: "₹45,999",
      level: "Advanced",
      language: "Hindi & English",
      features: [
        "GS Papers",
        "Optional Subject",
        "Essay Writing",
        "Interview Prep",
      ],
      image: "🏛️",
      popular: true,
    },
    {
      id: 6,
      title: "Sanskrit Literature",
      subtitle: "Ancient Indian Literature & Philosophy",
      category: "arts",
      instructor: "Pandit Mahesh Shastri",
      rating: 4.6,
      students: 2340,
      duration: "6 months",
      price: "₹12,999",
      originalPrice: "₹18,999",
      level: "Intermediate",
      language: "Hindi & Sanskrit",
      features: ["Shlokas", "Grammar", "Philosophy", "Literature"],
      image: "🕉️",
      popular: false,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      activeFilter === "all" || course.category === activeFilter;
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: "Active Students", value: "2,50,000+", icon: Users },
    { label: "Expert Instructors", value: "1,500+", icon: Award },
    { label: "Course Hours", value: "50,000+", icon: Clock },
    { label: "Success Rate", value: "95%", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              हमारे <span className="text-orange-300">पाठ्यक्रम</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              भारत के सर्वश्रेष्ठ शिक्षकों के साथ अपने सपनों को साकार करें
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Browse Courses
              </button>
              <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Free Demo Class
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-beige py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      activeFilter === category.id
                        ? "bg-green-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our wide range of expert-designed courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {course.popular && (
                  <div className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 relative">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{course.image}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.subtitle}</p>

                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <span>{course.instructor}</span>
                    <span>•</span>
                    <span>{course.language}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-green-600">
                            {course.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {course.originalPrice}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {course.level} Level
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 flex items-center space-x-2">
                        <span>Enroll Now</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose EduBharat?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the best online education platform designed for Indian students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Interactive Classes</h3>
              <p className="text-gray-600">Real-time interaction with expert teachers and fellow students</p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn from Anywhere</h3>
              <p className="text-gray-600">Access quality education from the comfort of your home</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certified Courses</h3>
              <p className="text-gray-600">Get recognized certificates upon course completion</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of successful students who chose EduBharat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;