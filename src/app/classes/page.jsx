"use client"
import React, { useState } from 'react';
import { BookOpen, Users, Clock, Star, Award, ChevronRight, Filter, Search, Play, Calendar, Trophy, Globe, Code, Calculator, Microscope, PenTool, Music, Languages, GraduationCap, Target, CheckCircle, BookOpenCheck, Brain, Lightbulb } from 'lucide-react';

const Class1To12Page = () => {
  const [activeGrade, setActiveGrade] = useState('all');
  const [activeBoard, setActiveBoard] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const grades = [
    { id: 'all', name: 'All Classes', range: '' },
    { id: 'primary', name: 'Class 1-5', range: 'Primary' },
    { id: 'middle', name: 'Class 6-8', range: 'Middle School' },
    { id: 'secondary', name: 'Class 9-10', range: 'Secondary' },
    { id: 'senior', name: 'Class 11-12', range: 'Senior Secondary' }
  ];

  const boards = [
    { id: 'all', name: 'All Boards' },
    { id: 'cbse', name: 'CBSE' },
    { id: 'icse', name: 'ICSE' },
    { id: 'state', name: 'State Boards' },
    { id: 'ib', name: 'IB/IGCSE' }
  ];

  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      grade: "Class 9-10",
      gradeCategory: "secondary",
      board: "CBSE",
      boardCategory: "cbse",
      instructor: "Prof. Ramesh Kumar",
      rating: 4.9,
      students: 25420,
      duration: "Academic Year",
      price: "₹12,999",
      originalPrice: "₹18,999",
      sessions: "3 per week",
      language: "Hindi & English",
      features: ["NCERT Solutions", "Sample Papers", "Board Preparation", "Doubt Clearing"],
      topics: ["Number Systems", "Algebra", "Geometry", "Trigonometry", "Statistics"],
      icon: "📐",
      popular: true,
      description: "Complete Mathematics course covering all CBSE Class 9-10 syllabus with special focus on board exam preparation"
    },
    {
      id: 2,
      name: "Science (PCB)",
      grade: "Class 11-12",
      gradeCategory: "senior",
      board: "CBSE",
      boardCategory: "cbse",
      instructor: "Dr. Priya Sharma",
      rating: 4.8,
      students: 18950,
      duration: "2 Years",
      price: "₹24,999",
      originalPrice: "₹34,999",
      sessions: "5 per week",
      language: "Hindi & English",
      features: ["Physics", "Chemistry", "Biology", "Lab Practicals", "NEET Prep"],
      topics: ["Mechanics", "Organic Chemistry", "Cell Biology", "Genetics", "Ecology"],
      icon: "🔬",
      popular: true,
      description: "Comprehensive PCB course for Class 11-12 with NEET preparation and board exam focus"
    },
    {
      id: 3,
      name: "English Literature",
      grade: "Class 6-8",
      gradeCategory: "middle",
      board: "ICSE",
      boardCategory: "icse",
      instructor: "Mrs. Sunita Mehta",
      rating: 4.7,
      students: 12340,
      duration: "Academic Year",
      price: "₹9,999",
      originalPrice: "₹14,999",
      sessions: "3 per week",
      language: "English",
      features: ["Grammar", "Literature", "Creative Writing", "Speaking Skills"],
      topics: ["Poetry", "Prose", "Drama", "Grammar Rules", "Comprehension"],
      icon: "📚",
      popular: false,
      description: "English Language and Literature course following ICSE curriculum with focus on language skills"
    },
    {
      id: 4,
      name: "Social Science",
      grade: "Class 9-10",
      gradeCategory: "secondary",
      board: "CBSE",
      boardCategory: "cbse",
      instructor: "Mr. Vikram Singh",
      rating: 4.8,
      students: 16780,
      duration: "Academic Year",
      price: "₹11,999",
      originalPrice: "₹16,999",
      sessions: "4 per week",
      language: "Hindi & English",
      features: ["History", "Geography", "Political Science", "Economics"],
      topics: ["Indian History", "World Geography", "Democratic Politics", "Economic Development"],
      icon: "🌍",
      popular: true,
      description: "Complete Social Science course covering History, Geography, Political Science and Economics"
    },
    {
      id: 5,
      name: "Hindi Literature",
      grade: "Class 11-12",
      gradeCategory: "senior",
      board: "CBSE",
      boardCategory: "cbse",
      instructor: "Pandit Suresh Sharma",
      rating: 4.6,
      students: 8560,
      duration: "2 Years",
      price: "₹13,999",
      originalPrice: "₹19,999",
      sessions: "3 per week",
      language: "Hindi",
      features: ["Kavya", "Gadya", "Vyakaran", "Rachna", "Sahitya"],
      topics: ["Kabir", "Tulsidas", "Premchand", "Mahadevi Verma", "Harivansh Rai Bachchan"],
      icon: "📝",
      popular: false,
      description: "Hindi Literature course with famous poets and writers from Indian literary heritage"
    },
    {
      id: 6,
      name: "Computer Science",
      grade: "Class 11-12",
      gradeCategory: "senior",
      board: "CBSE",
      boardCategory: "cbse",
      instructor: "Mr. Anil Gupta",
      rating: 4.9,
      students: 14230,
      duration: "2 Years",
      price: "₹18,999",
      originalPrice: "₹25,999",
      sessions: "4 per week",
      language: "Hindi & English",
      features: ["Python Programming", "Database", "Web Development", "Project Work"],
      topics: ["Programming Logic", "Data Structures", "MySQL", "HTML/CSS", "Problem Solving"],
      icon: "💻",
      popular: true,
      description: "Modern Computer Science course with Python programming and practical project development"
    },
    {
      id: 7,
      name: "Environmental Science",
      grade: "Class 1-5",
      gradeCategory: "primary",
      board: "CBSE",
      boardCategory: "cbse",
      instructor: "Mrs. Kavita Rao",
      rating: 4.5,
      students: 9340,
      duration: "Academic Year",
      price: "₹7,999",
      originalPrice: "₹11,999",
      sessions: "2 per week",
      language: "Hindi & English",
      features: ["Nature Study", "Fun Activities", "Project Work", "Field Trips"],
      topics: ["Plants & Animals", "Weather", "Water", "Food", "Our Environment"],
      icon: "🌱",
      popular: false,
      description: "Environmental Science for young learners with interactive activities and nature exploration"
    },
    {
      id: 8,
      name: "Commerce Stream",
      grade: "Class 11-12",
      gradeCategory: "senior",
      board: "CBSE",
      boardCategory: "cbse",
      instructor: "CA Rajesh Khanna",
      rating: 4.8,
      students: 11450,
      duration: "2 Years",
      price: "₹21,999",
      originalPrice: "₹29,999",
      sessions: "5 per week",
      language: "Hindi & English",
      features: ["Accountancy", "Business Studies", "Economics", "Entrepreneurship"],
      topics: ["Financial Accounting", "Business Environment", "Microeconomics", "Macroeconomics"],
      icon: "💼",
      popular: true,
      description: "Complete Commerce stream preparation with CA foundation readiness"
    },
    {
      id: 9,
      name: "Sanskrit",
      grade: "Class 6-8",
      gradeCategory: "middle",
      board: "CBSE",
      boardCategory: "cbse",
      instructor: "Acharya Mahesh Tiwari",
      rating: 4.6,
      students: 5670,
      duration: "Academic Year",
      price: "₹8,999",
      originalPrice: "₹12,999",
      sessions: "3 per week",
      language: "Hindi & Sanskrit",
      features: ["Shlokas", "Grammar", "Literature", "Pronunciation"],
      topics: ["Devanagari Script", "Sandhi Rules", "Dhatu Roop", "Subhashitas", "Stories"],
      icon: "🕉️",
      popular: false,
      description: "Sanskrit language course with focus on grammar, literature and cultural heritage"
    }
  ];

  const filteredSubjects = subjects.filter(subject => {
    const matchesGrade = activeGrade === 'all' || subject.gradeCategory === activeGrade;
    const matchesBoard = activeBoard === 'all' || subject.boardCategory === activeBoard;
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGrade && matchesBoard && matchesSearch;
  });

  const stats = [
    { label: "Classes Covered", value: "1-12", icon: GraduationCap },
    { label: "Subject Experts", value: "500+", icon: Award },
    { label: "Board Success Rate", value: "98%", icon: Target },
    { label: "Happy Students", value: "1,50,000+", icon: Users }
  ];

  const boardFeatures = [
    {
      name: "CBSE",
      description: "Complete CBSE curriculum with NCERT solutions",
      icon: "📋",
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "ICSE",
      description: "ICSE syllabus with comprehensive study material",
      icon: "🎓",
      color: "bg-green-100 text-green-700"
    },
    {
      name: "State Boards",
      description: "Regional state board preparation",
      icon: "🏛️",
      color: "bg-purple-100 text-purple-700"
    },
    {
      name: "IB/IGCSE",
      description: "International curriculum support",
      icon: "🌍",
      color: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-green-50">
     

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              कक्षा <span className="text-orange-300">1-12</span> कोचिंग
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              हर कक्षा के लिए विशेषज्ञ शिक्षकों के साथ संपूर्ण तैयारी
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Choose Your Class
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
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Board Features */}
      <div className="bg-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              All Major Education Boards Covered
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coaching for every education board in India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardFeatures.map((board, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{board.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{board.name}</h3>
                <p className="text-gray-600 text-sm">{board.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${board.color}`}>
                  Available
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search subjects, classes, or teachers..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <select
                  value={activeGrade}
                  onChange={(e) => setActiveGrade(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {grades.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {grade.name}
                    </option>
                  ))}
                </select>
                
                <select
                  value={activeBoard}
                  onChange={(e) => setActiveBoard(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {boards.map((board) => (
                    <option key={board.id} value={board.id}>
                      {board.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Subject-wise Expert Coaching
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our comprehensive subject courses designed by expert teachers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSubjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                {subject.popular && (
                  <div className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 relative">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{subject.icon}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{subject.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                      {subject.name}
                    </h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                      {subject.grade}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{subject.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{subject.instructor}</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                      {subject.board}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {subject.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                      {subject.topics.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{subject.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {subject.features.map((feature, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{subject.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{subject.sessions}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{subject.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>{subject.language}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-green-600">{subject.price}</span>
                          <span className="text-sm text-gray-500 line-through">{subject.originalPrice}</span>
                        </div>
                        <div className="text-sm text-gray-500">Per Academic Year</div>
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

      {/* Grade-wise Features */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Grade-wise Learning Approach
            </h2>
            <p className="text-lg text-gray-600">
              Tailored teaching methods for every age group and learning stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Class 1-5</h3>
              <p className="text-gray-600">Fun-based learning with interactive activities and games</p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Class 6-8</h3>
              <p className="text-gray-600">Conceptual understanding with practical applications</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Class 9-10</h3>
              <p className="text-gray-600">Board exam preparation with comprehensive practice</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Class 11-12</h3>
              <p className="text-gray-600">Competitive exam readiness with advanced concepts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from our dedicated students across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Aarav Sharma</h3>
              <p className="text-gray-600 mb-2">Class 10 CBSE - 98% Marks</p>
              <p className="text-sm text-gray-500">"EduBharat's Mathematics course helped me score full marks in boards!"</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Priya Patel</h3>
              <p className="text-gray-600 mb-2">Class 12 Science - NEET AIR 245</p>
              <p className="text-sm text-gray-500">"The PCB course was perfectly designed for NEET preparation."</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rohan Gupta</h3>
              <p className="text-gray-600 mb-2">Class 12 Commerce - 96% Marks</p>
              <p className="text-sm text-gray-500">"Commerce coaching was excellent, got admission in top college!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Excel in Your Class?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of students who chose EduBharat for their academic success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Learning Today
            </button>
            <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Schedule Demo Class
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Class1To12Page;