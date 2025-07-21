import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Phone className="mr-3 text-blue-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Get In Touch</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <p className="text-gray-400">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <Mail className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">john.developer@email.com</p>
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <Linkedin className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">linkedin.com/in/johndeveloper</p>
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <Github className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">github.com/johndeveloper</p>
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <Phone className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
