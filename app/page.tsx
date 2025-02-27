import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jack Ferreri</h1>
        <div className="space-x-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center p-8">
        <Image src="/headshot-2024.jpeg" alt="Jack Ferreri" width={150} height={150} className="rounded-full" />
        <h2 className="text-4xl font-bold mt-4">Jack Ferreri</h2>
        <p className="text-lg text-gray-600 mt-2">Computer Science Student at The University of Florida</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/jack-ferreri12" className="px-4 py-2 bg-blue-500 text-white rounded">GitHub</a>
          <a href="https://linkedin.com/in/jack-ferreri-79607a295" className="px-4 py-2 bg-gray-800 text-white rounded">LinkedIn</a>
          <a href="mailto:jack.ferreri@ufl.edu" className="px-4 py-2 bg-green-600 text-white rounded">Email</a>
        </div>
      </header>

      {/* About Me */}
      <section id="about" className="p-6 text-center">
        <h3 className="text-3xl font-bold underline mb-2">About Me</h3>
        <p className="text-lg text-gray-700">I am a second-year computer science student who is strongly interested in software development, cybersecurity, and cloud computing. I enjoy tackling challenging projects, learning new technologies, as well as creating and playing video games. I am currently working on some very exciting projects, so please visit my GitHub to check them out!</p>
      </section>

      {/* Completed Projects */}
      <section id="projects" className="p-6">
        <h3 className="text-3xl font-bold underline mb-2">Completed Projects</h3>
        <ul className="list-disc pl-5 space-y-4">
          <li><span className="text-xl font-bold">Custom AVL Tree Implementation in C++</span> - A fully functional AVL Tree with the ability to insert, remove, and search data efficiently</li>
          <li><span className="text-xl font-bold">MineSweeper Game C++</span> - A remake of the traditional MineSweeper game</li>
          <li><span className="text-xl font-bold">Next.js Portfolio Website</span> - A resume website to familiarize myself further with JavaScript</li>
        </ul>
      </section>

      {/* Currently Working On */}
      <section className="p-6">
        <h3 className="text-3xl font-bold underline mb-2">Currently Working On</h3>
        <ul className="list-disc pl-5 space-y-4">
          <li><span className="text-xl font-bold">Posture Correction Web Extension</span> - Uses Google MediaPipe for body detection & a classification model in TensorFlow to detect posture in real-time</li>
          <li><span className="text-xl font-bold">ASL Translator</span> - A real-time American Sign Language Translation program using Python and TensorFlow</li>
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="p-6">
        <h3 className="text-3xl font-bold underline mb-2">Experience</h3>
        <ul className="list-disc pl-5 space-y-4">
          <li><span className="text-xl font-bold">College Contact - College Admissions Mentor</span> - Helping high school students prepare their resumes and essays for college applications</li>
          <li><span className="text-xl font-bold">Dark Horse Football Specialists - Private Trainer</span> - Leading workout sessions for some of the greatest football specialists in the nation</li>
          <li><span className="text-xl font-bold">Jesuit High School Sports Camps - Camp Counselor</span></li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="p-6">
        <h3 className="text-3xl font-bold underline mb-2">Skills</h3>
        <ul className="list-disc pl-5 space-y-4">
          <li><span className="text-xl font-bold">Programming Languages:</span> Python, C++, JavaScript</li>
          <li><span className="text-xl font-bold">Certifications:</span> AWS Certified Cloud Practitioner</li>
        </ul>
      </section>
    </div>
  );
}