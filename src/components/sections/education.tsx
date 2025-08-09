import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="p-6 bg-slate-50 rounded-xl">
                  <h4 className="text-lg font-semibold text-slate-900">{edu.degree}</h4>
                  <div className="text-blue-600 font-medium">{edu.institution}</div>
                  <div className="text-slate-500">{edu.duration}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Certifications</h3>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-6 bg-gradient-to-r ${cert.gradient} rounded-xl border-l-4 ${cert.borderColor}`}
                >
                  <div className="flex items-center mb-3">
                    <i className={`${cert.icon} text-2xl ${cert.iconColor} mr-3`}></i>
                    <h4 className="text-lg font-semibold text-slate-900">{cert.name}</h4>
                  </div>
                  <div className={`${cert.textColor} font-medium`}>{cert.issuer}</div>
                  <div className="text-slate-500">{cert.validity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}