import React from 'react';
import { BottomDiv, CardContainer, SubText, Title, TopDiv } from './styles'
import { Chip } from '@mui/material';

const RectangularCard: any = ({
    title,
    subtext,
    area,
    status,
    link
}: any ) => {
  return (
    <CardContainer>
      <a href={link} target='_blank'>
      <TopDiv>
        <Title>{title}</Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: '10px'
          }}
        >
          <Chip label={area} color={'success'} variant="outlined" />
          <div style={{
            width: '6px'
          }}></div>
          <Chip label={status} color={'error'} variant="outlined" />
        </div>
      </TopDiv>
      <BottomDiv>
        <SubText>{subtext}</SubText>
      </BottomDiv>
      </a>
    </CardContainer>

  );
};

export default RectangularCard;
