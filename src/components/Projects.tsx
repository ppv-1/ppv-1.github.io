import { Briefcase, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="mr-3 text-blue-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
                  <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-400 mb-4">
                  Full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm font-medium">Source Code</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Task Management App</h3>
                  <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-400 mb-4">
                  Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Vue.js</span>
                  <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Firebase</span>
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">Socket.io</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm font-medium">Source Code</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Data Visualization Dashboard</h3>
                  <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-400 mb-4">
                  Interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data updates using Python and React.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">D3.js</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm font-medium">Source Code</a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Weather App</h3>
                  <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-400 mb-4">
                  Modern weather application with location-based forecasts, interactive maps, and responsive design built with React and Weather API.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">API</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm font-medium">Source Code</a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Chat Application</h3>
                  <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-400 mb-4">
                  Real-time chat application with multiple rooms, user authentication, and message history using WebSocket technology.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">Socket.io</span>
                  <span className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm">React</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm font-medium">Source Code</a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Portfolio Website</h3>
                  <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-400 mb-4">
                  Responsive portfolio website showcasing projects and skills, built with modern web technologies and optimized for performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Tailwind</span>
                  <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">Vite</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm font-medium">Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
