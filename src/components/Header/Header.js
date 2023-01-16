import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineBars } from 'react-icons/ai';
import Bars from '../../asset/bars.png'

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => {

 return (
  <Container>
    <Div1>
      <Link href='/'>
          <Span>DevDannie</Span> 
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects' smooth={true}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>Read Me.</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://twitter.com/DevDannie'>
        <AiFillTwitterCircle size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://github.com/Dev-Dannie'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons> 
    </Div3>
  </Container>
);
}
export default Header;
