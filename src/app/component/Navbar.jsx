"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon, BookOpenIcon } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <BookOpenIcon className="h-8 w-8 text-[#059669]" />
              <span className="ml-2 text-xl font-bold text-[#059669]">
                EduBharat
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#059669] px-3 py-2 font-medium"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-gray-700 hover:text-[#059669] px-3 py-2 font-medium"
            >
              Our Courses
            </Link>
            <Link
              href="/classes"
              className="text-gray-700 hover:text-[#059669] px-3 py-2 font-medium"
            >
              Class 1-12
            </Link>
            <Link
              href="/test-series"
              className="text-gray-700 hover:text-[#059669] px-3 py-2 font-medium"
            >
              Test Series
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#059669] px-3 py-2 font-medium"
            >
              About Us
            </Link>
            <Link href="/login">
            <button className="bg-[#059669] text-white px-4 py-2 rounded-md hover:bg-[#047857] transition duration-300">
              Login
            </button>
            </Link>
            
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-[#059669] font-medium"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 text-gray-700 hover:text-[#059669] font-medium"
            >
              Our Courses
            </Link>
            <Link
              href="/classes"
              className="block px-3 py-2 text-gray-700 hover:text-[#059669] font-medium"
            >
              Class 1-12
            </Link>
            <Link
              href="/test-series"
              className="block px-3 py-2 text-gray-700 hover:text-[#059669] font-medium"
            >
              Test Series
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-[#059669] font-medium"
            >
              About Us
            </Link>
            <button className="w-full text-left bg-[#059669] text-white px-3 py-2 rounded-md hover:bg-[#047857] transition duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar