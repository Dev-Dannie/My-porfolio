import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => (
 <Section>
    <SectionTitle>Let's Deal!</SectionTitle>
    <span style={{color:'white', gap: '1rem'}}><h3 style={{fontSize: '1.5rem'}}>Shoot me a mail at 
      <LinkItem href='mailto:damilaredaniel152@gmail.com'>
        damilaredaniel150@gmail.com</LinkItem>
    </h3></span> 
 </Section>
)
 

export default Footer;
