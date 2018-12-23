import { injectGlobal } from 'styled-components'
import { breakpoints, colors } from './variables'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata|Quicksand');
  *{
    box-sizing: border-box;
  }
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    
  }
  body{
    margin: 0;
    padding: 0;
  }
  h1{
    ${breakpoints.xs(`
      font-size: 32px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.sm(`
      font-size: 32px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.md(`
      font-size: 40px;
      margin-bottom: 8px;  
    `)}
    ${breakpoints.lg(`
      font-size: 48px;
      margin-bottom: 10px
    `)}
    ${breakpoints.xl(`
      font-size: 56px;
      margin-bottom: 12px;
    `)}
    font-family: 'Inconsolata', monospace;
    margin:0;
  }
  h2{
    ${breakpoints.xs(`
    font-size: 28px;
    margin-bottom: 6px;
    `)}

    ${breakpoints.sm(`
      font-size: 28px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.md(`
      font-size: 32px;
      margin-bottom: 8px;  
    `)}
    ${breakpoints.lg(`
      font-size: 34px;
      margin-bottom: 10px
    `)}
    ${breakpoints.xl(`
      font-size: 36px;
      margin-bottom: 12px;
    `)}
    font-family: 'Quicksand', sans-serif;
    margin:0;
  }  
  h3{
    ${breakpoints.xs(`
      font-size: 20px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.sm(`
      font-size: 20px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.md(`
      font-size: 22px;
      margin-bottom: 8px;  
    `)}
    ${breakpoints.lg(`
      font-size: 25px;
      margin-bottom: 10px
    `)}
    ${breakpoints.xl(`
      font-size: 28px;
      margin-bottom: 12px;
    `)},
      ${`color: ${colors.light};`}
      font-family: 'Inconsolata', monospace;
      margin:0;
  }
 
  p{
    ${breakpoints.xs(`
      font-size: 14px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.sm(`
      font-size: 16px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.md(`
      font-size: 16px;
      margin-bottom: 8px;  
    `)}
    ${breakpoints.lg(`
      font-size: 16px;
      margin-bottom: 10px
    `)}
    ${breakpoints.xl(`
      font-size: 18px;
      margin-bottom: 12px;
    `)}
    font-family: 'Quicksand', sans-serif;
    margin:0;
  }
 a{
  ${breakpoints.xs(`
    font-size: 14px;
    margin-bottom: 6px;
    padding: 3px 8px;
  `)}
  ${breakpoints.sm(`
    font-size: 16px;
    margin-bottom: 6px;
    padding: 3px 8px;
  `)}
  ${breakpoints.md(`
    font-size: 16px;
    margin-bottom: 8px;  
    padding: 4px 10px;
  `)}
  ${breakpoints.lg(`
    font-size: 16px;
    margin-bottom: 10px;
    padding: 5px 12px;
  `)}
  ${breakpoints.xl(`
    font-size: 18px;
    margin-bottom: 12px;
    padding: 5px 12px;
  `)} 
 }
`
