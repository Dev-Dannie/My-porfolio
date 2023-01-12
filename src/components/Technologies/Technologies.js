import React from 'react';
import { DiHtml5, DiReact, DiJavascript1, DiCss3, DiGit,DiGithub, DiCss3Full } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Some Technologies I've Used</SectionTitle>
    <SectionText>
      I've worked with a variety of technologies in creating beautiful 
      designs and bringing them to life!
    </SectionText>
    <List>
    <ListItem>
        <ListContainer>
          <DiHtml5 size='3rem' fill='red'/>
          <ListTitle>Html</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiCss3 size='3rem' fill='blue'/>
          <ListTitle>Css</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiJavascript1 size='3rem' fill='yellow'/>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiReact size='3rem' fill='skyblue'/>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiCss3Full size='3rem'/>
          <ListTitle>Tailwindcss</ListTitle>
        </ListContainer>
      </ListItem>
      
      
      <ListItem>
        <ListContainer>
          <DiGithub size='3rem' fill='skyblue'/>
          <ListTitle>Redux</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiGithub size='3rem' fill='skyblue'/>
          <ListTitle>Framer-motion</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiGit size='3rem' fill='red'/>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiGithub size='3rem' fill='skyblue'/>
          <ListTitle>GitHub</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiGithub size='3rem' fill='skyblue'/>
          <ListTitle>StyledComponents</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
