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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <Mail className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">yongzhongrui@gmail.com</p>
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <a href="https://www.linkedin.com/in/marcusyongzr/">
                <Linkedin className="mx-auto mb-4 text-blue-400" size={48} />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400 text-sm">linkedin.com/in/marcusyongzr</p>
              </a>
              
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <a href="https://github.com/ppv-1">
                <Github className="mx-auto mb-4 text-blue-400" size={48} />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm">github.com/ppv-1</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
