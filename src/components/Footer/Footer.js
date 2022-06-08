import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillMediumCircle, AiFillMediumSquare } from 'react-icons/ai';
import {SiLeetcode,SiCodechef} from "react-icons/si";
import {FaHackerrank} from "react-icons/fa";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:9555359262">+91-9555359262</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:anuragdhyani01@gmail.com">
            anuragdhyani01@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan><AiFillInstagram size="2rem" /> Social media @anurag_xd</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Dhyani01">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/anuragdhyani01">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://leetcode.com/Dhyani01"> 
          <SiLeetcode size="3rem" />
        </SocialIcons> 
        <SocialIcons href="https://codechef.com/anuragxd"> 
          <SiCodechef size="3rem" />
        </SocialIcons> 
        <SocialIcons href="https://hackerrank.com/anuragdhyani01"> 
          <FaHackerrank size="3rem" />
        </SocialIcons> 
      <SocialIcons href="https://medium.com/@anuragdhyani01"> 
                <AiFillMediumSquare size="3rem" />
              </SocialIcons> 

        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
