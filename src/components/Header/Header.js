import Link from 'next/link';
import React from 'react';
import { AiFillGithub,  AiFillLinkedin,AiFillMediumSquare } from 'react-icons/ai';
import {SiLeetcode,SiCodechef} from "react-icons/si";
import {FaHackerrank} from "react-icons/fa";
//
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


// import { SocialIcons } from '../Header/HeaderStyles';

//
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Anurag Dhyani</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Interests</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Dhyani01">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/anuragdhyani01">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://leetcode.com/Dhyani01">
          <SiLeetcode size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://codechef.com/users/anuragxd">
          <SiCodechef size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.hackerrank.com/anuragdhyani01">
          <FaHackerrank size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://medium.com/@anuragdhyani01"> 
          <AiFillMediumSquare size="3rem" />
        </SocialIcons> 


      </Div3>
    </Container>
);

export default Header;
