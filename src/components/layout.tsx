import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme, Theme } from 'theme';

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
`;

const Content = styled.div`
  position: relative;
  max-width: 1680px;
  min-height: 100vh;
  margin: auto;
  padding: 200px 0;
`;

const ColorBlock = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.accent};
  position: absolute;
  z-index: -1;
  top: 200px;
  bottom: 200px;
  right: 200px;
  left: 200px;
`;

const Layout = ({ children }: LayoutProps) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Content>
          {children}

          <ColorBlock />
        </Content>
      </ThemeProvider>
    </>
  );
};

export default Layout;
