import projectsData from "./data";
import ProjectList from "./projectLists";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col items-center px-6 py-10">
      {/* Back Arrow */}
      <Link href="/" className="absolute top-4 left-4 text-white hover:text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      
      <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 via-orange-500 to-purple-700 bg-clip-text text-transparent">
        MY PROJECTS
      </h1>

      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {projectsData.map((project, index) => (
          <ProjectList
            key={index}
            title={project.title}
            description={project.description}
            languages={project.languages}
          />
        ))}
      </div>
    </div>
  );
}
