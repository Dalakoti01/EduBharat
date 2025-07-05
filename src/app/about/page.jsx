"use client"
import React, { useState } from 'react';
import { Users, BookOpen, Award, Target, Heart, Lightbulb, Globe, Star } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { icon: Users, number: '10L+', label: 'Students Empowered' },
    { icon: BookOpen, number: '5000+', label: 'Courses Available' },
    { icon: Award, number: '500+', label: 'Expert Educators' },
    { icon: Target, number: '95%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Seva & Dedication',
      description: 'Committed to serving students with unwavering dedication, treating education as a sacred responsibility.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation in Learning',
      description: 'Blending traditional wisdom with modern technology to create transformative educational experiences.'
    },
    {
      icon: Globe,
      title: 'Inclusive Excellence',
      description: 'Making quality education accessible to every corner of Bharat, regardless of economic background.'
    },
    {
      icon: Star,
      title: 'Holistic Development',
      description: 'Nurturing not just academic excellence but character, values, and life skills for complete growth.'
    }
  ];

  const founders = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Co-Founder & CEO',
      education: 'IIT Delhi, Stanford University',
      description: 'Former Google engineer passionate about democratizing education in India.',
      image: '👩‍🎓'
    },
    {
      name: 'Arjun Patel',
      role: 'Co-Founder & CTO',
      education: 'IIT Bombay, MIT',
      description: 'EdTech visionary with 15+ years in building scalable learning platforms.',
      image: '👨‍💻'
    },
    {
      name: 'Prof. Rajesh Kumar',
      role: 'Chief Academic Officer',
      education: 'JNU, Oxford University',
      description: 'Renowned educator with expertise in Indian pedagogy and curriculum design.',
      image: '👨‍🏫'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
              Edu Bharat
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              शिक्षा ही सबसे बड़ा धन है - Empowering India's future through accessible, quality education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-orange-500 rounded-full text-lg font-semibold">
                Made in India 🇮🇳
              </span>
              <span className="px-6 py-3 bg-purple-600 rounded-full text-lg font-semibold">
                For India's Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full mb-4 group-hover:shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600">Guided by the principles of Vasudhaiva Kutumbakam</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <div className="flex space-x-2">
                {['mission', 'vision', 'values'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {activeTab === 'mission' && (
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  To democratize quality education across Bharat by leveraging technology while preserving our rich cultural heritage. 
                  We believe every student, from the bustling metros to the remote villages, deserves access to world-class education 
                  that prepares them for global opportunities while keeping them rooted in Indian values.
                </p>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  To create a Bharat where education transcends boundaries - geographical, economic, and social. 
                  We envision a future where every Indian student can pursue their dreams, contribute to nation-building, 
                  and become a global citizen while staying true to our timeless values of knowledge, wisdom, and service.
                </p>
              </div>
            )}
            
            {activeTab === 'values' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                        <p className="text-gray-700">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Born from a simple yet powerful belief: <em>"Shiksha sabke liye, sabke saath"</em> - Education for all, with everyone. 
                  Edu Bharat began in 2020 when three passionate educators realized that millions of talented students across India 
                  were held back not by lack of potential, but by lack of access.
                </p>
                <p>
                  Starting with just 50 students in a small classroom in Pune, we've grown into a movement that touches lives 
                  from Kashmir to Kanyakumari. Our platform now serves students preparing for JEE, NEET, UPSC, and various 
                  state-level examinations, always keeping affordability and quality at the forefront.
                </p>
                <p>
                  Today, we're proud to be India's fastest-growing EdTech platform, but our real pride comes from the 
                  success stories of students who've transformed their lives through education.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Edu Bharat?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Courses in Hindi, English, and regional languages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Affordable pricing - starting from ₹99/month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Live doubt-clearing sessions with IIT/IIM faculty</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Personalized learning paths with AI technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>24/7 support in your preferred language</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-600">Passionate educators and technologists united by a common vision</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{founder.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{founder.role}</p>
                <p className="text-blue-600 text-sm mb-4">{founder.education}</p>
                <p className="text-gray-600">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join lakhs of students who are already building their dreams with Edu Bharat. 
            Your journey to success starts with a single step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
              Explore Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;