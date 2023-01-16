import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => (
  <Section id='projects'>
    <SectionTitle main> Some Things I've Built</SectionTitle>
    <SectionDivider />
    <GridContainer>
      {
        projects.map(({title, id, source, image,  description, visit, tags}) => (
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>
                {title}
              </HeaderThree>
              <Hr />   
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Technologies utilized:</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}><AiFillGithub size='3rem'/></ExternalLinks>
              <ExternalLinks href={source}>Live Site</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
    </GridContainer>
  </Section>
);

export default Projects;