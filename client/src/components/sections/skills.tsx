import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-slide-up"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <i className={`${skill.icon} text-2xl text-blue-600 group-hover:text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold ml-4 text-slate-900">{skill.name}</h3>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right text-sm text-slate-500 mt-1">{skill.proficiency}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}