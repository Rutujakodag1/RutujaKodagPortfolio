import React from 'react';
import reactIcon from '../assets/react.jpeg';
import django from '../assets/dj.png';
import python from '../assets/python.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.png';
import vsCodeIcon from '../assets/vscode.png';
import mysqlIcon from '../assets/mysql.png';
import sqliteIcon from '../assets/sqlite.png';
import c from '../assets/c.png';
import java from '../assets/java.png';
import linuxIcon from '../assets/linux.png';
import windowsIcon from '../assets/windows.png';
import hackerrank from '../assets/hackerrank.png';
import gfg from '../assets/gfg.jpg';
import codechef from '../assets/codechef.jpg';
import android from '../assets/android.png';
import leetcode from '../assets/leetcode.png';
// Skills data
const programmingLanguages = [
  { icon: python, skillName: 'Python', proficiencyLabel: 'Expert in Python with a 5-star rating on HackerRank, demonstrating the ability to develop efficient and clean code for various applications.' },
  { icon: html, skillName: 'HTML', proficiencyLabel: 'Well-versed in HTML5, capable of structuring and formatting web pages effectively, ensuring accessibility and semantic accuracy.' },
  { icon: css, skillName: 'CSS', proficiencyLabel: 'Skilled in CSS, applying advanced design techniques to create engaging and responsive user interfaces for improved user experience.' },
  { icon: java, skillName: 'Java', proficiencyLabel: 'Experienced with simple Java programming, with a strong foundation in core concepts and problem-solving skills.' },
  { icon: c, skillName: 'C', proficiencyLabel: 'Proficient in C, with a solid foundation in data structures and algorithms. Skilled in writing optimized code for efficient problem-solving.' },
];

const frameworksLibraries = [
  { icon: django, skillName: 'Django', proficiencyLabel: 'Experienced in Django for web development, leveraging it to build scalable and secure web applications.' },
  { icon: reactIcon, skillName: 'React', proficiencyLabel: 'Skilled in React for creating dynamic user interfaces and responsive single-page applications.' },
  { icon: tailwind, skillName: 'Tailwind CSS', proficiencyLabel: 'Utilized Tailwind CSS to implement modern, responsive designs efficiently in web projects.' },
];

const toolsPlatforms = [
  { icon: gitIcon, skillName: 'Git', proficiencyLabel: 'Proficient in using Git for version control to manage and track code changes effectively.' },
  { icon: githubIcon, skillName: 'GitHub', proficiencyLabel: 'Experienced with GitHub for collaboration, code sharing, and project management.' },
  { icon: vsCodeIcon, skillName: 'VS Code', proficiencyLabel: 'Extensive experience with Visual Studio Code, using it as the primary editor for code development and debugging.' },
  { 
    icon: leetcode, 
    skillName: 'LeetCode', 
    proficiencyLabel: 'LeetCode is a coding platform where I have solved numerous problems, improving my data structures and algorithms skills. It has been instrumental in preparing me for coding interviews and competitive programming.' 
  },
  { icon: hackerrank, skillName: 'Hackerrank', proficiencyLabel: 'Hackerrank is a coding platform where I have achieved a 5-star rank in Python and 2 stars in SQL. This platform has been essential in enhancing my problem-solving and coding skills.' },
  { icon: codechef, skillName: 'CodeChef', proficiencyLabel: 'CodeChef has been a valuable platform for honing my competitive programming skills, helping me strengthen my problem-solving abilities for coding competitions and technical interviews.' },
  { icon: gfg, skillName: 'GeeksforGeeks', proficiencyLabel: 'GeeksforGeeks has served as a critical resource for deepening my understanding of data structures, algorithms, and coding concepts through hands-on practice.' },
  { icon: android, skillName: 'Android Studio',   proficiencyLabel: 'Intermediate with Android Studio, leveraging Java and XML for mobile app development, and using its testing and debugging tools.' },
];

const databases = [
  { 
    icon: mysqlIcon, 
    skillName: 'MySQL', 
    proficiencyLabel: 'Proficient in MySQL, with experience in database creation, optimization, and management for efficient data storage and retrieval.' 
  },
  { 
    icon: sqliteIcon, 
    skillName: 'SQLite', 
    proficiencyLabel: 'Proficient in SQLite, using it as an efficient embedded database solution for local data storage on devices.' 
  },
];


const operatingSystems = [
  { icon: linuxIcon, skillName: 'Linux', proficiencyLabel: 'Experienced in using Linux for development tasks, including installation, configuration, and command-line operations, supporting efficient software management and system navigation.' },
  { icon: windowsIcon, skillName: 'Windows', proficiencyLabel: 'Skilled in setting up and maintaining Windows systems, with hands-on experience in configuration, troubleshooting, and ensuring stable performance for development and personal use.' },
];

// SkillCard component
const SkillCard = ({ icon, skillName, proficiencyLabel }) => {
  return (
    <div className="relative bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out text-center ml-6 mr-6">
      {icon && <img src={icon} alt={`${skillName} icon`} className="mx-auto w-20 h-20 mb-4" />}
      <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{skillName}</h3>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{proficiencyLabel}</p>
      {/* Decorative overlay for subtle style */}
      <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-10 bg-gradient-to-br from-blue-200 to-green-200 pointer-events-none transition duration-300"></div>
    </div>
  );
};

// SkillSection component to render skills
const SkillSection = () => {
  return (
    <div className=" py-16">
    <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-800 dark:text-white">My Skills</h2>
    <p className="text-lg font-medium mb-4 text-center text-gray-600 dark:text-gray-300">
      A showcase of my technical skills and proficiencies across various tools, platforms, and technologies.
    </p>
    <div className="border-t-2 border-gray-400 dark:border-gray-600 mx-auto my-4 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[1250px] mb-6"></div>

      {/* Programming Languages Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Programming Languages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {programmingLanguages.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              skillName={skill.skillName}
              proficiencyLabel={skill.proficiencyLabel}
            />
          ))}
        </div>
      </div>
      <div className="border-t-2 border-gray-400 dark:border-gray-600 mx-auto my-4 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[1250px] mb-6"></div>

      {/* Frameworks & Libraries Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Frameworks & Libraries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {frameworksLibraries.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              skillName={skill.skillName}
              proficiencyLabel={skill.proficiencyLabel}
            />
          ))}
        </div>
      </div>
      <div className="border-t-2 border-gray-400 dark:border-gray-600 mx-auto my-4 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[1250px] mb-6"></div>

      {/* Development Tools & Platforms Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Development Tools & Platforms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {toolsPlatforms.map((tool, index) => (
            <SkillCard
              key={index}
              icon={tool.icon}
              skillName={tool.skillName}
              proficiencyLabel={tool.proficiencyLabel}
            />
          ))}
        </div>
      </div>
      <div className="border-t-2 border-gray-400 dark:border-gray-600 mx-auto my-4 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[1250px] mb-6"></div>

      {/* Databases Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Databases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {databases.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              skillName={skill.skillName}
              proficiencyLabel={skill.proficiencyLabel}
            />
          ))}
        </div>
      </div>
      <div className="border-t-2 border-gray-400 dark:border-gray-600 mx-auto my-4 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[1250px] mb-6"></div>

      {/* Operating Systems Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Operating Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {operatingSystems.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              skillName={skill.skillName}
              proficiencyLabel={skill.proficiencyLabel}
            />
          ))}
        </div>
      </div>
      <div className="border-t-2 border-gray-400 dark:border-gray-600 mx-auto my-4 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[1250px] mb-6"></div>

    </div>
  );
};

export default SkillSection;
