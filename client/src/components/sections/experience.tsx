import { experience } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative animate-slide-up">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-600"></div>
              <div className="relative flex items-start">
                <div className={`w-4 h-4 ${index === 0 ? 'bg-blue-600' : 'bg-slate-400'} rounded-full mt-6 z-10`}></div>
                <div className="ml-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <div className="text-blue-600 font-semibold">{exp.company}</div>
                      <div className="text-slate-500">{exp.location}</div>
                    </div>
                    <div className="text-slate-500 lg:text-right">
                      <div className="font-medium">{exp.duration}</div>
                      <div className="text-sm">{exp.type}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-slate-600">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}