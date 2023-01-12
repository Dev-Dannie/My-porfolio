import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => (
      <Section id='about'>
        <SectionDivider/>
        <br />
        <SectionTitle>About Me.</SectionTitle>
        <br />
        <SectionText>
          <p>
          I'm Daniel.. Learning, building and contributing to meaningful projects 
          excites me a lot. I love building high-quality products and bringing 
          beautiful UI/UX designs to life through codes. I am highly motivated 
          and thrive in fast-paced, collaborative environments where I can work with 
          my team to continuously build, learn and iterate.</p>
          <br />
         <p> My strong communication and problem-solving skills allow me to contribute 
          effectively to any project, and I thrive on the opportinity to learn and grow
          alongside my team. In my free time, when i am not in front of a screen, you can find me 
          tweeting, reading, taking a walk while exploring nature or playing video games.</p>
          <br />

          <div style={{color: 'tomato'}}>Let's build cool stuffs!</div> 
        </SectionText>
      </Section>
);

export default About;
