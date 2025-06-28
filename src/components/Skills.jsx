import React from 'react'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <span className="bg-white p-3 rounded shadow text-center">React</span>
          <span className="bg-white p-3 rounded shadow text-center">JavaScript</span>
          <span className="bg-white p-3 rounded shadow text-center">Tailwind CSS</span>
          <span className="bg-white p-3 rounded shadow text-center">Figma</span>
        </div>
      </div>
    </section>
  )
}
