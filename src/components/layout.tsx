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
  div {
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
`;

const Content = styled.div`
  position: relative;
  max-width: 1680px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 200px;
`;

const ColorBlock = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.accent};
  position: relative;
  height: 100%;
  width: 100%;
  padding: 50px;
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
          <ColorBlock>{children}</ColorBlock>
        </Content>
      </ThemeProvider>
    </>
  );
};

export default Layout;
