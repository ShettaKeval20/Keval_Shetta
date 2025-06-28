import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded shadow-sm">
            <h4 className="font-semibold">Portfolio Website</h4>
            <p className="text-sm">Personal portfolio built with React & Tailwind</p>
          </div>
          <div className="border p-4 rounded shadow-sm">
            <h4 className="font-semibold">Task Manager App</h4>
            <p className="text-sm">Todo app with CRUD features and local storage</p>
          </div>
        </div>
      </div>
    </section>
  )
}
