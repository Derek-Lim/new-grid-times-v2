import React from 'react';
import styled from 'styled-components';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';
import { QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 0;

    > section:not(:last-of-type) {
      border-right: 1px solid var(--color-gray-300);
      padding-right: 16px;
      margin-right: 16px;
    }
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SportsSection = styled.section`
  min-width: 0;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: revert;
    grid-auto-flow: column;
    grid-auto-columns: 220px;
    overflow-x: auto;
  }
`;

export default SpecialtyStoryGrid;
