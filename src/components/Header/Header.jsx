import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, COLORS, WEIGHTS, FAMILIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscriptionCtaGroup>
          <SubscribeButton>subscribe</SubscribeButton>
          <SubscriptionHelpLink>Already a subscriber?</SubscriptionHelpLink>
        </SubscriptionCtaGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const SubscriptionCtaGroup = styled(DesktopActionGroup)`
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  gap: 8px;
`;

const SubscribeButton = styled.button`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.bold};
  font-family: ${FAMILIES.sansSerif};
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 8px 24px;
`;

const SubscriptionHelpLink = styled.a`
  text-decoration: underline;
  font-size: 0.875rem;
`;

export default Header;
