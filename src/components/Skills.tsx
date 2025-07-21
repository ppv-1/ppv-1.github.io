import { Code, Database, Globe, Server, Github, Cpu } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Code className="mr-3 text-blue-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Technical Skills</h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                    <span className="text-black font-bold text-sm">JS</span>
                  </div>
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TS</span>
                  </div>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PY</span>
                  </div>
                  <span>Python</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JV</span>
                  </div>
                  <span>Java</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C++</span>
                  </div>
                  <span>C++</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C#</span>
                  </div>
                  <span>C#</span>
                </div>
              </div>
            </div>

            {/* Frontend Technologies */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <span>React</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <span>Vue.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gray-600">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <span>Next.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-orange-500" size={24} />
                  <span>HTML/CSS</span>
                </div>
              </div>
            </div>

            {/* Backend & Tools */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Backend & Tools</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Server className="text-green-500" size={24} />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gray-600">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <span>Express.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="text-blue-500" size={24} />
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="text-blue-600" size={24} />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="text-orange-500" size={24} />
                  <span>Git</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cpu className="text-blue-400" size={24} />
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
