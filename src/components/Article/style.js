import styled from 'styled-components'
import { breakpoints } from '../variables'

export const ArticleWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ArticleElement = styled.div`
  margin-bottom: 40px;
  ${breakpoints.xs(`
    width: 100%;
  `)}
  ${breakpoints.sm(`
    width: 100%;
  `)}
  ${breakpoints.md(`
    width:100%;
 `)}
 ${breakpoints.lg(`
    width:48%;
 `)}
 ${breakpoints.xl(`
    width:48%;
 `)}
`
