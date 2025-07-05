"use client";
import React, { useState } from "react";

const testSeriesData = [
  {
    id: 1,
    category: "JEE Main",
    title: "JEE Main 2025 Complete Test Series",
    description: "Comprehensive test series covering all JEE Main topics with detailed solutions and performance analysis.",
    tests: 30,
    duration: "3 hours each",
    enrolled: 45230,
    fee: "₹2,999",
    rating: 4.8,
    difficulty: "medium",
  },
  {
    id: 2,
    category: "NEET",
    title: "NEET 2025 All India Test Series",
    description: "All India ranking test series for NEET with detailed analysis and performance tracking.",
    tests: 25,
    duration: "3 hours each",
    enrolled: 67890,
    fee: "₹3,499",
    rating: 4.9,
    difficulty: "hard",
  },
  {
    id: 3,
    category: "UPSC",
    title: "UPSC Prelims 2025 Test Series",
    description: "Complete UPSC Prelims preparation with current affairs and static GK coverage.",
    tests: 40,
    duration: "2 hours each",
    enrolled: 32450,
    fee: "₹4,999",
    rating: 4.7,
    difficulty: "hard",
  },
  {
    id: 4,
    category: "SSC",
    title: "SSC CGL 2025 Complete Series",
    description: "Comprehensive SSC CGL preparation with tier-wise test series and detailed solutions.",
    tests: 35,
    duration: "2 hours each",
    enrolled: 28760,
    fee: "₹1,999",
    rating: 4.6,
    difficulty: "medium",
  },
  {
    id: 5,
    category: "Banking",
    title: "Banking Exams 2025 Test Series",
    description: "Complete banking exam preparation for SBI, IBPS, RBI and other banking exams.",
    tests: 20,
    duration: "2 hours each",
    enrolled: 19340,
    fee: "₹1,499",
    rating: 4.5,
    difficulty: "easy",
  },
  {
    id: 6,
    category: "GATE",
    title: "GATE 2025 Test Series",
    description: "Branch-wise GATE preparation with previous year analysis and mock tests.",
    tests: 25,
    duration: "3 hours each",
    enrolled: 15670,
    fee: "₹2,499",
    rating: 4.8,
    difficulty: "hard",
  },
];

const examTypes = [
  { value: "", label: "All Exams" },
  { value: "jee", label: "JEE Main/Advanced" },
  { value: "neet", label: "NEET" },
  { value: "upsc", label: "UPSC" },
  { value: "ssc", label: "SSC" },
  { value: "banking", label: "Banking" },
  { value: "gate", label: "GATE" },
  { value: "cat", label: "CAT" },
];

const subjects = [
  { value: "", label: "All Subjects" },
  { value: "physics", label: "Physics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "mathematics", label: "Mathematics" },
  { value: "biology", label: "Biology" },
  { value: "gk", label: "General Knowledge" },
  { value: "english", label: "English" },
];

const difficulties = [
  { value: "", label: "All Levels" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const stats = [
  { label: "Test Series Available", value: "50+" },
  { label: "Questions Bank", value: "10,000+" },
  { label: "Students Enrolled", value: "2,50,000+" },
  { label: "Success Rate", value: "98%" },
];

const difficultyColors = {
  easy: "bg-green-500",
  medium: "bg-yellow-500",
  hard: "bg-red-500",
};

export default function TestSeriesPage() {
  const [examType, setExamType] = useState("");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [search, setSearch] = useState("");
  const [loadingId, setLoadingId] = useState(null);

  // Filtering logic (subject filter is not used in static data, but included for future use)
  const filtered = testSeriesData.filter((test) => {
    const matchesExam =
      !examType ||
      test.category.toLowerCase().includes(examType.replace(/[^a-z]/gi, "").toLowerCase());
    const matchesDifficulty = !difficulty || test.difficulty === difficulty;
    const matchesSearch =
      test.title.toLowerCase().includes(search.toLowerCase()) ||
      test.description.toLowerCase().includes(search.toLowerCase());
    return matchesExam && matchesDifficulty && matchesSearch;
  });

  // Scroll to top
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] to-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 py-10 rounded-2xl bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-xl">
          <h1 className="text-4xl font-bold mb-2">📚 Test Series</h1>
          <p className="text-lg opacity-90">
            Master your exams with comprehensive practice tests designed for Indian students
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition-all"
            >
              <div className="text-2xl font-bold text-[#059669] mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white p-8 rounded-xl shadow mb-10">
          <div className=" text-black flex flex-col md:flex-row gap-6 items-center">
            <div className="flex text-black flex-col gap-2">
              <label className="font-semibold text-gray-700 text-sm">Exam Type</label>
              <select
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#059669]"
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
              >
                {examTypes.map((ex) => (
                  <option key={ex.value} value={ex.value}>
                    {ex.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-sm">Subject</label>
              <select
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#059669]"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {subjects.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-sm">Difficulty</label>
              <select
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#059669]"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                {difficulties.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 flex-1 w-full">
              <label className="font-semibold text-gray-700 text-sm">Search</label>
              <input
                type="text"
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#059669] w-full"
                placeholder="Search test series..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Test Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filtered.map((test) => (
            <div
              key={test.id}
              className="bg-white text-black rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div
                className={`difficulty absolute top-4 right-4 px-4 py-1 rounded-full font-semibold text-xs ${
                  test.difficulty === "easy"
                    ? "bg-green-500 text-white"
                    : test.difficulty === "medium"
                    ? "bg-yellow-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1)}
              </div>
              <div className="p-6 bg-gradient-to-r from-[#F5F5DC] to-white">
                <div className="inline-block bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {test.category}
                </div>
                <h3 className="text-xl font-bold mb-1">{test.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{test.description}</p>
                <div className="flex gap-4 text-gray-500 text-sm mb-2">
                  <div className="flex items-center gap-1">📅 {test.tests} Tests</div>
                  <div className="flex items-center gap-1">⏱️ {test.duration}</div>
                  <div className="flex items-center gap-1">👥 {test.enrolled.toLocaleString()} enrolled</div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-[#059669]">{test.fee}</div>
                    <div className="text-xs text-gray-500 mt-1">Course Fee</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-[#059669]">{test.rating}⭐</div>
                    <div className="text-xs text-gray-500 mt-1">Rating</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    className="btn btn-primary bg-[#059669] hover:bg-[#047857] text-white px-4 py-2 rounded-lg font-semibold flex-1 transition-all"
                    onClick={() => {
                      setLoadingId(test.id);
                      setTimeout(() => setLoadingId(null), 1500);
                    }}
                  >
                    {loadingId === test.id ? (
                      <span className="inline-block w-5 h-5 border-2 border-gray-200 border-t-[#059669] rounded-full animate-spin mr-2"></span>
                    ) : null}
                    {loadingId === test.id ? "Starting..." : "Start Test"}
                  </button>
                  <a
                    href="#"
                    className="btn btn-outline border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white px-4 py-2 rounded-lg font-semibold flex-1 text-center transition-all"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <button
          className="fixed bottom-8 right-8 w-14 h-14 bg-[#F97316] text-white rounded-full text-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-all z-50"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </div>
  );
}