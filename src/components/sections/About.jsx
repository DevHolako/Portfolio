import React from "react";

function About() {
  return (
    <section className="flex flex-col items-start">
      <p className="text-4xl md:text-6xl font-extrabold my-2">About</p>
      <div className="w-full text-lg sm:text-xl md:text-4xl border-4 border-black drop-shadow-v-4 bg-v-white p-8 md:p-12 my-2">
        <ul>
          <li>• Enthusiastic and Dedicated Programmer</li>
          <li>• Graduated with Honors from INTIC SYBA</li>
          <li>• Actively engaged in Full Stack Web Development projects</li>
          <li>• Eagerly expanding skills in Typescript and Next.js</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
