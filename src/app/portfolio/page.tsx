import Image from "next/image";
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description: "This is my first assignment made with Typescript and Node.js where i learn how to start coding.",
      github: "https://github.com/anniesoomro/45_Assignments.git",
    },
    {
      title: "Project 2",
      description: "This is my second project which is currency converter made with Typescript Node.js and Inquirer.",
      github: "https://github.com/anniesoomro/04.Currency_Converter.git",
    },
    {
      title: "Project 3",
      description: "This is my third project which is adventure game made with Typescript Node.js and Inquirer",
      github: "https://github.com/anniesoomro/07.Adventure_game.git",
    },
  ];

  return (
    <section id="portfolio" className="portfolio py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row  items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-5xl font-bold mb-6 text-gray-800">My Portfolio</h2>
        <p className="text-lg text-gray-700 mb-12">
          Here are some of my projects. Click on the links to view the code on GitHub.
        </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end m-8 md:mb-0">
        <Image src="/bg-05-free-img.jpg"alt="Portfolio Showcase"width={300} height={300} />
        </div>
        </div>
        {/* Projects Cards */}
        <div className="container mx-auto mt-12">
          <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-sky-200 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <Link href={project.github}
                   target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
                    View on GitHub
                  
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}