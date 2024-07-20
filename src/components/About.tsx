import { useState, useEffect, useRef } from 'react';
import { CodeBlock, zenburn } from 'react-code-blocks';

const About = () => {
  const [age, setAge] = useState(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      const now = new Date();
      const birthDate = new Date('2000-04-11');
      const diff = now.getTime() - birthDate.getTime();
      const newAge = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(newAge);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const code = `const name = 'Anawil Karavek';
const age = ${age.toFixed(9)};
const languages = ['English', 'Swedish', 'Thai'];

const phone = '(+66) 969 347 200';
const email = 'akaravek@hotmail.com';

const education = {
  institution: 'Mälardalen University',
  degree: 'B.Sc. Computer Science',
  location: 'Västerås, Sweden',
  duration: '2020 - 2023'
};

const skills = {
  programmingLanguages: ['C#', 'Java', 'JavaScript', 'Python'],
  webTechnologies: ['HTML', 'CSS', 'React', 'Node.js'],
  databases: ['SQL', 'MongoDB', 'PostgreSQL'],
  frameworks: ['Spring Boot', 'Express.js'],
  tools: ['Git', 'Docker']
};`;

  return <CodeBlock text={code} language='jsx' theme={zenburn} />;
};

export default About;
