import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Anurag Dhyani
        </SectionTitle>
        <SectionText>
        Computer science student with excellent problem-solving skills and interest in machine learning, and backend programming, also well versed in data structures & algorithms. <br /> I am particularly interested in tackling problems in the intersection between computer vision and deep learning.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Curriculum Vitae</Button> */}
        <form method="get" action="https://drive.google.com/file/d/18DDnYDAzy09EaoZ_VBeIR5iUXZhEOi5v/view?usp=sharing">
    <Button type="submit">Curriculum Vitae</Button>
</form>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
