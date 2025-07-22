import React from 'react';
import { Code } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiJira,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVite,
  SiFigma,
  SiPostman,
  SiGithub,
  SiFirebase,
  SiSpringboot,
  SiMysql,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';

const Skills = () => {
  const languages = [
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: FaJava, name: 'Java', color: '#007396' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  ];

  const frameworks = [
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38B2AC' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express.js', color: '#000000' },
  ];

  const tools = [
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiGithub, name: 'GitHub', color: '#181717' },
    { icon: SiJira, name: 'Jira', color: '#0052CC' },
    { icon: FaAws, name: 'AWS', color: '#FF9900' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: SiVite, name: 'Vite', color: '#646CFF' },
    { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  ];

  type SkillItem = {
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;
    name: string;
    color: string;
  };

  interface ScrollingRowProps {
    items: SkillItem[];
    direction?: 'left' | 'right';
    speed?: number;
  }

  const ScrollingRow: React.FC<ScrollingRowProps> = ({ items, direction = 'left', speed = 30 }) => {
    // Create enough duplicates to ensure seamless scrolling
    const duplicatedItems = [...items, ...items, ...items, ...items];
    const itemWidth = 120; // width including spacing

    return (
      <div className="overflow-hidden relative">
        <div 
          className={`flex space-x-8 ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'}`}
          style={{ 
            animationDuration: `${speed}s`,
            width: `${duplicatedItems.length * itemWidth}px`
          }}
        >
          {duplicatedItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[100px] group cursor-pointer transition-transform hover:scale-110"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center group-hover:border-blue-500 transition-colors mb-2">
                  <IconComponent 
                    size={32} 
                    style={{ color: item.color }}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Add custom CSS for seamless infinite animations */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }

        /* Pause animation on hover for better UX */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section id="skills" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-16">
            <Code className="mr-3 text-blue-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Technical Skills</h2>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-12 relative">
            {/* Programming Languages Row */}
            <div className="relative">
              <h3 className="text-xl font-semibold mb-6 text-blue-400 text-center">Programming Languages</h3>
              <ScrollingRow items={languages} direction="left" speed={25} />
            </div>

            {/* Frameworks Row */}
            <div className="relative">
              <h3 className="text-xl font-semibold mb-6 text-blue-400 text-center">Frameworks & Libraries</h3>
              <ScrollingRow items={frameworks} direction="right" speed={30} />
            </div>

            {/* Tools Row */}
            <div className="relative">
              <h3 className="text-xl font-semibold mb-6 text-blue-400 text-center">Tools & Technologies</h3>
              <ScrollingRow items={tools} direction="left" speed={35} />
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
