import React from 'react';
import { DiFirebase, DiReact, DiZend,DiPython } from 'react-icons/di';
import { SiTensorflow } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the area of machine learning/deep learning. I use python as my scripitng language and c++ for problem solving.
      I've thorough knowledge of REST-Architecture for making API and use flask for back-development.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Scripting</ListTitle>
          <ListParagraph>
            Experience with Python as a scripitng language and CPP for DS-Algo.
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with
            backend frameworks like Flask, Node.js and databases like Sqlite, MYSQL and NoSQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiTensorflow size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Keras, Tensorflow,<br/>Sk-learn</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools ML/DL framworks.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
