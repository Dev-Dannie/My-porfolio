import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a Software Developer passionate about creating stunning user 
        interface designs and bringing them to life with code!
      </SectionText>
      <Button onClick= {() => window.location = '#projects'}>My Projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;