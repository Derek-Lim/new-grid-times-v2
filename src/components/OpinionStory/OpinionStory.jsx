import React from 'react';
import styled from 'styled-components';

import CardLink from '../CardLink';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <CardLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </CardLink>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  gap: 20px;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
