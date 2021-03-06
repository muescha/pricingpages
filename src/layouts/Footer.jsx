import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 1rem;
    font-size: 12px;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 0.5rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  span {
    color: ${props => props.theme.colors.highlight};
  }
  a {
    text-decoration:none !important;
    color: ${props => props.theme.colors.white.light};
  }
`;

const Legal = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.white.grey};
  a {
    text-decoration:none !important;
    color: ${props => props.theme.colors.white.light};
  }
  a:hover {
    text-decoration:none !important;
    color: ${props => props.theme.colors.highlight};
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        BestPricingPages.com - A repository of the best pricing pages
      </span>
      <br />
      <a href="https://jpvalery.me?utm_source=bestpricingpages&utm_medium=footer">Curated by @jpvalery</a> - 2019
    </Text>
    <Legal>
      2019 - <Link to="/terms">Terms</Link> & <Link to="/privacy">Privacy Policy</Link>
    </Legal>
  </Wrapper>
);
export default Footer;
