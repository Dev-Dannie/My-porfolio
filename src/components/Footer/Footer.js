import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => (
 <Section>
    <SectionTitle>Let's Deal!</SectionTitle>
    <h3>Shoot me an email at 
      <span style={{padding: '4'}}><LinkItem href='mailto:damilaredaniel152@gmail.com'>
        damilaredaniel152@gmail.com</LinkItem></span> 
    </h3>
 </Section>
)
 

export default Footer;
