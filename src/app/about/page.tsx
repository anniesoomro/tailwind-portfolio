import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* About Me Section */}
      <section className="about py-10 bg-white">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start">
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              I &apos m a full-stack developer with expertise in modern web
              technologies such as React, Next.js, and Node.js. I strive to
              build web applications that solve real-world problems and provide
              seamless user experiences.
            </p>
            <p className="text-lg text-gray-700">
              I believe in continuous learning and am passionate about
              leveraging the latest tech to build efficient and impactful
              applications.
            </p>
          </div>
          {/* Optional image beside text (if needed) */}
          <div className="md:w-1/2 p-6 hidden md:block">
            <Image
              src="/profile-image.jpg" //
              alt="About Me"
              width={150}
              height={100}
              
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills py-5 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
            My Skills
          </h3>
          <p className="text-gray-600 mb-10 text-center max-w-lg mx-auto">
            I believe in the fact that learning never stops, and I am
            interested in learning new technologies and programming languages
            that will help me design and develop better applications in less
            time.
          </p>
          <div className="max-w-lg mx-auto">
            {[
              { skill: "JavaScript", level: "90%" },
              { skill: "Next.js", level: "80%" },
              { skill: "Node.js", level: "90%" },
              { skill: "HTML", level: "85%" },
              { skill: "CSS", level: "75%" },
            ].map(({ skill, level }) => (
              <div key={skill} className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  {skill}
                </label>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}