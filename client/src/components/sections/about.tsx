import { personalData, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-slate-900">
              Dynamic Senior Frontend Developer
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {personalData.description}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Based in <span className="font-semibold">{personalData.location}</span>, I've had the privilege of working with multiple startups and established companies, collaborating with cross-functional teams to deliver impactful software solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.yearsExperience}</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.projectsCompleted}</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-slate-800 rounded p-6 font-mono text-sm">
                  <div className="text-green-400"># Current Focus</div>
                  <div className="text-blue-400 mt-2">const <span className="text-white">expertise</span> = {"{"}</div>
                  <div className="text-white ml-4">frontend: <span className="text-yellow-400">'React, TypeScript'</span>,</div>
                  <div className="text-white ml-4">styling: <span className="text-yellow-400">'Tailwind CSS'</span>,</div>
                  <div className="text-white ml-4">cloud: <span className="text-yellow-400">'AWS Certified'</span></div>
                  <div className="text-blue-400">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}