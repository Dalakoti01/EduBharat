"use client"
import React from 'react'
import Link from 'next/link'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#059669]">EduBharat</h2>
            <p className="text-gray-300 mb-4">
              Empowering Indian students with quality education and resources to
              excel in their academic journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#F97316]">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F97316]">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F97316]">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F97316]">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3B82F6]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-white">
                  Class 1-12
                </Link>
              </li>
              <li>
                <Link
                  href="/test-series"
                  className="text-gray-300 hover:text-white"
                >
                  Test Series
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3B82F6]">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Study Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  NCERT Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Previous Year Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  JEE/NEET Preparation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Career Counselling
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3B82F6]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 text-[#059669] mt-0.5" />
                <span className="text-gray-300">
                  123 Education Street, New Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-[#059669]" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-[#059669]" />
                <span className="text-gray-300">contact@edubharat.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2023 EduBharat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer