import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div>
      <section className="text-gray-800 py-20 text-center relative       overflow-hidden">
        
          {/* Background Image */}
          <div className="absolute inset-0 opacity-80">
            <Image src="/bg-image.jpg"alt="Background" layout="fill"objectFit="cover" />
          </div>
            {/* Hero Content*/}
            <div className="container mx-auto relative z-10">
              <h1 className="text-black text-5xl md:text-6xl font-extrabold mb-6">Welcome to My Portfolio</h1>
              <p className="text-black text-lg md:text-xl font-semibold mb-66">Explore my  work, services and projects
              </p>
          <Link href="#about"
           className="px-6 py-3 bg-white text-indigo-500 font-semibold rounded-full shadow-md hover:bg-indigo-100 transition mt-6 inline-block">
            Learn More About Me 
          
          </Link>
        </div>
      </section>

      <section id="about" className="about py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-lg md:text-2xl font-semibold text-gray-600 text-start max-w-3xl mx-auto">I &apos m a passionate developer who creates
          websites and applications that make an impact.
          </p>
        </div>
      </section>
    </div>
  );
}

