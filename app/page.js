import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-gray-900 text-white"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 min-h-screen">
        {/* Navbar */}
        <header className="bg-black bg-opacity-70 py-4 shadow-md">
          <nav className="container mx-auto flex justify-end items-center">
            <div className="space-x-4">
              <Link href="/projects" className="hover:text-purple-500">
                Projects
              </Link>
              <Link href="/design" className="hover:text-yellow-400">
                Design & UX Work
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-10">
          {/* About Me Section */}
          <section id="about" className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">My Portfolio</h2>
            <p className="text-gray-300 text-sm w-3/4">
              <span className="block">Hi, I’m Nida Aamir, a software development student passionate about creating innovative solutions. I’ve worked with various programming languages to build apps, web projects, and algorithms that blend creativity and technology.</span>  
              <br />
              <span className="block">As Graphic Designer and club executive for MegaByte SAIT, I help organize hackathons, Capture the Flag competitions, and more. I also volunteer at my mosque, creating designs that support community initiatives.</span>  
              <span className="block">Driven by a love for learning and innovation, I strive to make a positive impact through technology.</span>
            </p>
          </section>

          {/* Bottom Right Container */}
          <div className="fixed bottom-10 right-10 p-6 flex flex-col items-end space-y-6">
            {/* Resume Section */}
            <section id="resume" className="text-right">
              <h2 className="text-l font-semibold mb-4">Resume</h2>
              <a
                href="/Resume.pdf"
                download
                className="bg-purple-900 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded-full"
              >
                Download Placeholder
              </a>
            </section>

            {/* Contact Me Section */}
            <section id="contact" className="text-right">
              <h2 className="text-l font-semibold mb-4">Contact Me</h2>
              <a
                href="https://github.com/naamir21"
                className="bg-orange-800 hover:bg-orange-500 text-white text-sm px-4 py-2 rounded-full mr-2"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nida-aamir/"
                className="bg-yellow-600 hover:bg-yellow-400 text-white text-sm px-4 py-2 rounded-full"
              >
                LinkedIn
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}