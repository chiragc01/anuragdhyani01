import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { string: "1st Rank", text: 'Data-Quest Data Science competition '},
  { string: "Top 5%ile", text: 'Gate 2021 Examination', },
  { string: "Silver Medal(IMO)", text: 'Maths Olympiad', },
  { string: "3*", text: 'Codechef', },
  { string: "500+", text: 'DSA Questions solved on different platforms', }
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.string}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
