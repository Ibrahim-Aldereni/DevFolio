import { personalData } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-6xl text-blue-600">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            Hi, I'm <span className="text-blue-600">{personalData.firstName}</span>
            <div className="animate-bounce-gentle inline-block">👋</div>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            {personalData.title} with <span className="font-semibold text-blue-600">{personalData.yearsExperience} years</span> 
            of experience crafting exceptional user experiences with React and modern web technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="text-slate-400 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
